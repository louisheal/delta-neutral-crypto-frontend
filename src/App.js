import React, { Component } from 'react';
import axios from 'axios';

import Pool from './components/Pool'

import './styles/App.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

class App extends Component {

  state = {
    pools: []
  }

  componentDidMount() {
    this.getPools();
  }

  getPools = async () => {
    let data = await api.get('/pools').then(({ data }) => data);
    this.setState({ pools: data });
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='pool-container'>
        {this.state.pools.map(pool =>
          <Pool key={pool.pool_id}
                pool_name={pool.pool_name}
                borrow_rate_one={pool.borrow_rate_one}
                borrow_rate_two={pool.borrow_rate_two}
                token_one_symbol={pool.token_one_symbol}
                token_two_symbol={pool.token_two_symbol}
                trading_fee={pool.trading_fee}/>)}
        </div>
      </header>
    </div>
  );
  }
}

export default App;
