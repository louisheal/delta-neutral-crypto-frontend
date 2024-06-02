import { useState, useEffect } from 'react';
import { fetchChart } from 'api';

const useFetchChart = (poolId, durationDays) => {
  const [chart, setChart] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const fetchedChart = await fetchChart(poolId, durationDays);
      setChart(fetchedChart);
      setChartLoading(false);
    };
    fetch();
  }, [poolId, durationDays]);

  return { chart, chartLoading };
};

export default useFetchChart;