import { useEffect, useState } from "react";
import { fetchPools, fetchCharts } from '../api/fetchItems';

const useFetchPoolData = () => {
  const [pools, setPools] = useState(null);
  const [charts, setCharts] = useState({});

  useEffect(() => {
    const fetchPoolData = async () => {
      const fetchedPools = await fetchPools();
      setPools(fetchedPools);

      const chartGenerator = fetchCharts(fetchedPools);
      for await (const { pool_id, chart } of chartGenerator) {
        setCharts(prevCharts => ({ ...prevCharts, [pool_id]: chart }));
      }
    };

    fetchPoolData();
  }, []);

  return { pools, charts };
};

export default useFetchPoolData;