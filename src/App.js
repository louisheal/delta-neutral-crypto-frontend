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

        {this.state.pools.map(pool => <Pool key={pool.pool_id} name={pool.pool_name} />)}

      </header>
    </div>
  );
  }
}

export default App;
