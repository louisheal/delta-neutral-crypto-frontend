import React, { Component } from 'react';
import Popup from './Popup';
import Graph from './Graph';
import axios from 'axios';

import '../styles/Pool.css';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

class Pool extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      chart: []
    };
  };

  getData = async () => {
    let data = await api.post('/simulate', {
        'pool_id': this.props.pool_id,
        'usd_to_invest': 400,
        'duration_days': 14,
      }).then(({ data }) => data);
    this.setState({ chart: data }, this.togglePopup);
    console.log(data);
    console.log(this.props.pool_id);
  };

  togglePopup = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {

    const { isOpen } = this.state;
    const {
      pool_name,
      token_one_symbol,
      token_two_symbol,
      borrow_rate_one,
      borrow_rate_two,
      trading_fee
    } = this.props;

    return (
    <>
      <div className='pool flex-container align-items-center'>
        <div className='flex-item'>
        ICONS
        </div>

        <div className='flex-item position-30'>
          {pool_name.split(' ').map((word, index) => (
            <h4 key={index}>{word}</h4>
          ))}
        </div>

        <div className='flex-item flex-row position-70'>
          <div className='align-left'>
            <p>Borrowing Interest ({token_one_symbol}):</p>
            <p>Borrowing Interest ({token_two_symbol}):</p>
            <p>Trading Fees (7 Day Avg.):</p>
          </div>

          <div className='align-right'>
            <p>{(borrow_rate_one * 100).toFixed(3)}%</p>
            <p>{(borrow_rate_two * 100).toFixed(3)}%</p>
            <p>{(trading_fee * 100).toFixed(3)}%</p>
          </div>
        </div>

        <div className='flex-item'>
          <button onClick={() => {
            this.getData();
          }}>
            <h3>Simulate</h3>
          </button>
        </div>
      </div>

      <Popup isOpen={isOpen} onClose={this.togglePopup}>
        <h2>Estimated Profit from $400 after 14 Days</h2>
        <Graph
          labels={this.state.chart[0]}
          long={this.state.chart[1]}
          short={this.state.chart[2]}
          total={this.state.chart[3]}
        />
        <button onClick={this.togglePopup}>
          <h3>Close</h3>
        </button>
      </Popup>
    </>
    )}
};

export default Pool;
