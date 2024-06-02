import Pool from './Pool';

import '../styles/PoolContainer.css';

const PoolContainer = ({ pools, charts }) => {
  return (
    <div className='pool-container'>
      {pools.map(pool =>
        <Pool key={pool.pool_id} pool={pool} chart_data={charts[pool.pool_id]} />
      )}
    </div>
  )
}

export default PoolContainer;