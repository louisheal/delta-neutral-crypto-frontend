import usePopup from 'hooks/usePopup';
import useChartSlider from 'hooks/useChartSlider';

import Popup from 'components/ui/Popup';
import Button from 'components/ui/Button';
import TokenLogos from 'components/TokenLogos';

import Simulation from 'pages/Simulation';

import './Pool.css';

const Pool = ({ pool }) => {
  const [popupOpen, togglePopup] = usePopup(false);
  const [chart, chartLoading, sliderValue, onChange, onChangeCommitted] = useChartSlider(pool.pool_id, 30);

  return (
    <>
      <div className='pool flex-container align-items-center'>
        <TokenLogos
          tokenOneSymbol={pool.token_one_symbol}
          tokenTwoSymbol={pool.token_two_symbol} />

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
            <p>Estimated APY:</p>
          </div>

          <div className='align-right'>
            <p>{(pool.borrow_rate_one * 100).toFixed(3)}%</p>
            <p>{(pool.borrow_rate_two * 100).toFixed(3)}%</p>
            <p>{(pool.trading_fee * 100).toFixed(3)}%</p>
            <p>{(pool.apy * 100).toFixed(3)}%</p>
          </div>
        </div>

        <Button onClick={togglePopup} text='Simulate' className='flex-item' />
      </div>

      <Popup isOpen={popupOpen} togglePopup={togglePopup} >
        <Simulation
          poolId={pool.pool_id}
          tokenOneSymbol={pool.token_one_symbol}
          tokenTwoSymbol={pool.token_two_symbol}
          chart={chart}
          chartLoading={chartLoading}
          sliderValue={sliderValue}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          close={togglePopup} />
      </Popup>
    </>
  );
}

export default Pool;