import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const api = axios.create({
  // TODO: Move url to config
  baseURL: `http://localhost:5000`
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

        {this.state.pools.map(pool => <h2 key={pool.pool_id}>{pool.pool_name}</h2>)}

      </header>
    </div>
  );
  }
}

export default App;
