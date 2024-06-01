import React, { useState, useCallback } from 'react';

import Popup from './Popup';
import Graph from './Graph';
import Spinner from './Spinner';

import '../styles/Pool.css';

const Pool = ( props ) => {

  const [isOpen, setIsOpen] = useState(false);

  const {
    pool_name,
    borrow_rate_one,
    borrow_rate_two,
    token_one_symbol,
    token_two_symbol,
    trading_fee,
    chart_data,
  } = props;

  const togglePopup = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  let token_one_logo = `${token_one_symbol}.png`;
  let token_two_logo = `${token_two_symbol}.png`;

  return (
    <>
      <div className='pool flex-container align-items-center'>
        <div className='flex-item'>
          <img src={token_two_logo} className='icon' alt='' />
          <img src={token_one_logo} className='icon' alt='' />
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
          <button onClick={togglePopup}>
            <h3>Simulate</h3>
          </button>
        </div>
      </div>

      <Popup isOpen={isOpen} onClose={togglePopup}>
        <div className='flex-column '>
          <h2 >Estimated Percentage Return after 30 Days</h2>
          {chart_data ? (
            <Graph className='graph'
              labels={chart_data[0]}
              long={chart_data[1]}
              short={chart_data[2]}
              total={chart_data[3]}
            />
          ) : (
            <div>
              <Spinner />
              <div >Simulating...</div>
            </div>
          )}
          <button onClick={togglePopup}>
            <h3>Close</h3>
          </button>
        </div>
      </Popup>
    </>
  );
}

export default Pool;