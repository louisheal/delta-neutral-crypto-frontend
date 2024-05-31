import React, { Component } from 'react';
import axios from 'axios';

import cake_logo from './coins/CAKE.png';
import bnb_logo from './coins/BNB.png';
import usdt_logo from './coins/USDT.png';

import Pool from './components/Pool';
import logo from './logo.png';
import spinner from './loading.png';

import './styles/App.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const logos = {
  'CAKE': cake_logo,
  'BNB': bnb_logo,
  'USDT': usdt_logo,
};

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
            <img src={logo} className='logo' alt='logo' />
            <h1>
              delta-neutral
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
                token_one_logo={logos[pool.token_one_symbol]}
                token_two_logo={logos[pool.token_two_symbol]}
                trading_fee={pool.trading_fee}
                chart_data={charts[pool.pool_id]}/>)
          ) : (
            <div>
              <img src={spinner} className='spinner' alt='spinner' />
              <p>
                Pools are currently loading...
              </p>
              <p>
                During busy times this may take longer than normal.
              </p>
            </div>
          )}
          </div>
          <div className='footer' >

          </div>
        </header>
      </div>
  );};
}

export default App;
