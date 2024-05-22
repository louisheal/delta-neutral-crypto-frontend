import '../styles/Pool.css';

const Pool = (props) => {
  return <div className='pool flex-container align-items-center'>

    <div className='flex-item'>
    ICONS
    </div>

    <div className='flex-item position-30'>
      {props.pool_name.split(' ').map((word, index) => (
        <h4 key={index}>{word}</h4>
      ))}
    </div>

    <div className='flex-item flex-row position-70'>
      <div className='align-left'>
        <p>Borrowing Interest ({props.token_one_symbol}):</p>
        <p>Borrowing Interest ({props.token_two_symbol}):</p>
        <p>Trading Fees (7 Day Avg.):</p>
      </div>

      <div className='align-right'>
        <p>{props.borrow_rate_one.toFixed(3)}%</p>
        <p>{props.borrow_rate_two.toFixed(3)}%</p>
        <p>{props.trading_fee.toFixed(3)}%</p>
      </div>
    </div>

    <div className='flex-item'>
      <button>
        <h3>Simulate</h3>
      </button>
    </div>

  </div>
};

export default Pool;
