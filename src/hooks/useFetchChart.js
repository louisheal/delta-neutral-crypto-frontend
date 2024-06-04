import { useState, useEffect } from "react"
import { fetchChart } from 'api';

const useFetchChart = (poolId, durationDays) => {
  const [chart, setChart] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);

  useEffect(() => {
    const updateChart = async () => {
      setChartLoading(true);
      const fetchedChart = await fetchChart(poolId, durationDays);
      setChart(fetchedChart);
      setChartLoading(false);
    };
    updateChart();
  }, [poolId, durationDays]);

  return [chart, chartLoading];
}

export default useFetchChart;