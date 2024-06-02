import Slider from '@mui/material/Slider';

const DaySlider = ({ sliderValue, onChange, onChangeCommitted, disabled, className }) => {
  const marks = [
    { value: 1, label: '1' },
    { value: 30, label: '30' },
    { value: 90, label: '90' },
    { value: 180, label: '180' },
    { value: 365, label: '365 '},
  ];

  return (
    <Slider 
      min={1}
      max={365}
      marks={marks}
      value={sliderValue}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      disabled={disabled}
      className={className} />
  );
}

export default DaySlider;