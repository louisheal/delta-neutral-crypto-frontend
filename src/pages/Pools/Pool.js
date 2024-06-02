import usePopup from 'hooks/usePopup';

import SimulationPopup from './SimulationPopup';

import bnb_logo from 'assets/BNB.png';
import cake_logo from 'assets/CAKE.png';
import usdt_logo from 'assets/USDT.png';

const logos = {
  'BNB': bnb_logo,
  'CAKE': cake_logo,
  'USDT': usdt_logo,
}

const Pool = ( props ) => {

  const [popupOpen, togglePopup] = usePopup(false);

  const {
    pool,
    chartData,
  } = props;

  let token_one_logo = logos[pool.token_one_symbol];
  let token_two_logo = logos[pool.token_two_symbol];

  return (
    <>
      <div className='pool flex-container align-items-center'>
        <div className='flex-item'>
          <img src={token_two_logo} className='icon' alt='' />
          <img src={token_one_logo} className='icon' alt='' />
        </div>

        <div className='flex-item position-30'>
          {pool.pool_name.split(' ').map((word, index) => (
            <h4 key={index}>{word}</h4>
          ))}
        </div>

        <div className='flex-item flex-row position-70'>
          <div className='align-left'>
            <p>Borrowing Interest ({pool.token_one_symbol}):</p>
            <p>Borrowing Interest ({pool.token_two_symbol}):</p>
            <p>Trading Fees (7 Day Avg.):</p>
          </div>

          <div className='align-right'>
            <p>{(pool.borrow_rate_one * 100).toFixed(3)}%</p>
            <p>{(pool.borrow_rate_two * 100).toFixed(3)}%</p>
            <p>{(pool.trading_fee * 100).toFixed(3)}%</p>
          </div>
        </div>

        <div className='flex-item'>
          <button onClick={togglePopup}>
            <h3>Simulate</h3>
          </button>
        </div>
      </div>

      <SimulationPopup
        isOpen={popupOpen}
        togglePopup={togglePopup}
        chartData={chartData} />
      
    </>
  );
}

export default Pool;