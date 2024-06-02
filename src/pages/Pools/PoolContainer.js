import Pool from './Pool';

import 'assets/Pools.css';

const PoolContainer = ({ pools }) => {
  return (
    <div className='pool-container'>
      {pools.map(pool =>
        <Pool key={pool.pool_id} pool={pool} />
      )}
    </div>
  )
}

export default PoolContainer;