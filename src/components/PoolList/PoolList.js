import Pool from 'components/Pool';

import './PoolList.css';

const PoolList = ({ pools }) => {
  return (
    <div className='pool-list'>
      {pools.map(pool =>
        <Pool key={pool.pool_id} pool={pool} />
      )}
    </div>
  )
}

export default PoolList;