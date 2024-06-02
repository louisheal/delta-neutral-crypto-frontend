import { useEffect, useState } from "react";
import { fetchPools } from 'api';

const useFetchPools = () => {
  const [pools, setPools] = useState([]);
  const [poolsLoading, setPoolsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const fetchedPools = await fetchPools();
      setPools(fetchedPools);
      setPoolsLoading(false);
    };
    fetch();
  }, []);

  return { pools, poolsLoading };
};

export default useFetchPools;