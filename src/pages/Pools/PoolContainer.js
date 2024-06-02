import Pool from './Pool';

import 'assets/Pools.css';

const PoolContainer = ({ pools, charts }) => {
  return (
    <div className='pool-container'>
      {pools.map(pool =>
        <Pool key={pool.pool_id} pool={pool} chartData={charts[pool.pool_id]} />
      )}
    </div>
  )
}

export default PoolContainer;