import Slider from '@mui/material/Slider';

const DaySlider = ({ sliderValue, onChange, onChangeCommitted, disabled, className }) => {
  const marks = [
    { value: 1, label: '1 Day' },
    { value: 30, label: '30 Days' },
    { value: 90, label: '90 Days' },
    { value: 180, label: '180 Days' },
    { value: 365, label: '365 Days '},
  ];

  return (
    <Slider 
      min={1}
      max={365}
      marks={marks}
      defaultValue={sliderValue}
      value={sliderValue}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      disabled={disabled}
      className={className} />
  );
}

export default DaySlider;