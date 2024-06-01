import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const fetchPools = async () => {
  const { data: pools } = await api.get('/pools');
  return pools;
}

const fetchCharts = async function* (pools) {
  for (const pool of pools) {
    const { data: chart } = await api.post('/simulate', {
      'pool_id': pool.pool_id,
      'usd_to_invest': 100,
      'duration_days': 30,
    });
    yield { pool_id: pool.pool_id, chart };
  }
}

export { fetchPools, fetchCharts };