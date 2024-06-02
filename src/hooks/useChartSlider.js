import { useState, useEffect } from "react"
import { fetchChart } from 'api';

const useChartSlider = (poolId, initial) => {
  const [chart, setChart] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);
  const [sliderValue, setSliderValue] = useState(initial);
  const [durationDays, setDurationDays] = useState(initial);

  const onChange = (event, newValue) => {
    setSliderValue(newValue);
  }

  const onChangeCommitted = (event, newValue) => {
    setDurationDays(newValue);
  }

  useEffect(() => {
    const updateChart = async () => {
      setChartLoading(true);
      const fetchedChart = await fetchChart(poolId, durationDays);
      setChart(fetchedChart);
      setChartLoading(false);
    };
    updateChart();
  }, [poolId, durationDays]);

  return [chart, chartLoading, sliderValue, onChange, onChangeCommitted];
}

export default useChartSlider;