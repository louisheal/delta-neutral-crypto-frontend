import useSlider from 'hooks/useSlider';
import useFetchChart from 'hooks/useFetchChart';

const useChartSlider = (poolId, initial) => {
  const [previewValue, comittedValue, onChange, onChangeCommitted] = useSlider(initial);
  const [chart, chartLoading] = useFetchChart(poolId, comittedValue);

  return [chart, chartLoading, previewValue, onChange, onChangeCommitted];
}

export default useChartSlider;