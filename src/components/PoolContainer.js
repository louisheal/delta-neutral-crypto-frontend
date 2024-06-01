import Pool from './Pool';

import '../styles/PoolContainer.css';

const PoolContainer = ({ pools, charts, chartsLoading }) => {
  return (
    <div className='pool-container'>
      {pools.map(pool =>
        <Pool key={pool.pool_id}
          pool_id={pool.pool_id}
          pool_name={pool.pool_name}
          borrow_rate_one={pool.borrow_rate_one}
          borrow_rate_two={pool.borrow_rate_two}
          token_one_symbol={pool.token_one_symbol}
          token_two_symbol={pool.token_two_symbol}
          trading_fee={pool.trading_fee}
          chart_data={charts[pool.pool_id]} />)}
    </div>
  )
}

export default PoolContainer;