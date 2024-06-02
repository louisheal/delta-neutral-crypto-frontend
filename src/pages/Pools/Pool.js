import usePopup from 'hooks/usePopup';
import useChartSlider from 'hooks/useChartSlider';

import Button from 'components/Button/Button';
import SimulationPopup from './SimulationPopup';

import bnb_logo from 'assets/BNB.png';
import cake_logo from 'assets/CAKE.png';
import usdt_logo from 'assets/USDT.png';

const logos = {
  'BNB': bnb_logo,
  'CAKE': cake_logo,
  'USDT': usdt_logo,
}

const Pool = ({ pool }) => {
  const [popupOpen, togglePopup] = usePopup(false);
  const [chart, chartLoading, sliderValue, onChange, onChangeCommitted]
    = useChartSlider(pool.pool_id, 30);

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

        <Button onClick={togglePopup} text='Simulate' className='flex-item' />
        
      </div>

      <SimulationPopup
        isOpen={popupOpen}
        togglePopup={togglePopup}
        chart={chart}
        chartLoading={chartLoading}
        sliderValue={sliderValue}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted} />
      
    </>
  );
}

export default Pool;