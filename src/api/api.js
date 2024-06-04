import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const fetchPools = async () => {
  const { data: pools } = await api.get('/pools');
  return pools;
}

const fetchChart = async (poolId, durationDays) => {
  const { data: chart } = await api.post('/simulate', {
    'pool_id': poolId,
    'usd_to_invest': 100,
    'duration_days': durationDays,
  });
  return chart;
}

export { fetchPools, fetchChart };