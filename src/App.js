import React, { Component } from 'react';
import axios from 'axios';

import Pool from './components/Pool'

import './styles/App.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

class App extends Component {

  state = {
    pools: null,
    charts: {},
  };

  componentDidMount() {
    this.getPools();
  };

  getPools = async () => {
    let { data: pools } = await api.get('/pools');
    this.setState({ pools: pools });

    await Promise.all(pools.map(async pool => {
      const response = await api.post('/simulate', {
        'pool_id': pool.pool_id,
        'usd_to_invest': 100,
        'duration_days': 30,
      });
      this.setState(prevState => ({
        charts: { ...prevState.charts, [pool.pool_id]: response.data }
      }));
    }));
  };

  render() {

    const { pools, charts } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className='header'>
            <div>
              LOGO
            </div>
            <h1>
              Delta-Neutral
            </h1>
          </div>
          <div className='pool-container'>
          {pools ? (
            pools.map(pool =>
              <Pool key={pool.pool_id}
                pool_id={pool.pool_id}
                pool_name={pool.pool_name}
                borrow_rate_one={pool.borrow_rate_one}
                borrow_rate_two={pool.borrow_rate_two}
                token_one_symbol={pool.token_one_symbol}
                token_two_symbol={pool.token_two_symbol}
                trading_fee={pool.trading_fee}
                chart_data={charts[pool.pool_id]}/>)
          ) : (
            <div>
              <h1>
                Loading...
              </h1>
              <p>
                (Please wait up to 5 minutes for the pools to load.)
              </p>
            </div>
          )}
          </div>
          <div className='footer'>
          
          </div>
        </header>
      </div>
  );};
}

export default App;
