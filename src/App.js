import React, { Component } from 'react';
import axios from 'axios';

import Pool from './components/Pool'

import './styles/App.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

class App extends Component {

  state = {
    pools: [],
    charts: [],
  };

  componentDidMount() {
    this.getPools().then(this.getCharts);
  };

  getPools = async () => {
    let response = await api.get('/pools');
    this.setState({ pools: response.data });
    console.log("TEST 1");
  };

  getCharts = async () => {
    console.log("TEST 2");
    let data = await Promise.all(this.state.pools.map(async pool => {
      const response = await api.post('/simulate', {
        'pool_id': pool.pool_id,
        'usd_to_invest': 100,
        'duration_days': 30,
      });
      return response.data;
    }));

    console.log("TEST 3");
    console.log(data);
    
    this.setState({ charts: data });

    console.log("TEST 4");
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
          {pools.map((pool, index) =>
            <Pool key={pool.pool_id}
                  pool_id={pool.pool_id}
                  pool_name={pool.pool_name}
                  borrow_rate_one={pool.borrow_rate_one}
                  borrow_rate_two={pool.borrow_rate_two}
                  token_one_symbol={pool.token_one_symbol}
                  token_two_symbol={pool.token_two_symbol}
                  trading_fee={pool.trading_fee}
                  chart_data={charts[index]}/>)}
          </div>
          <div className='footer'>
          
          </div>
        </header>
      </div>
  );};
}

export default App;
