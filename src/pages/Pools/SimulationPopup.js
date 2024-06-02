import Graph from "./Graph";
import Button from "components/Button/Button";
import SimulationLoading from "./SimulationLoading";
import DaySlider from "./DaySlider";

const SimulationPopup = ({ isOpen, togglePopup, chart, chartLoading, sliderValue, onChange, onChangeCommitted }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className='overlay' onClick={togglePopup} />
          <div className='popup'>
            <h2 >Estimated Percentage Return after {sliderValue} Days</h2>
            <DaySlider sliderValue={sliderValue} onChange={onChange} onChangeCommitted={onChangeCommitted} disabled={chartLoading} className='day-slider' />
            {chartLoading ? (
              <SimulationLoading />
            ) : (
              <div className='graph-container' >
                <Graph className='graph'
                  labels={chart[0]}
                  long={chart[1]}
                  short={chart[2]}
                  total={chart[3]}
                />
              </div>
            )}
            <Button text='Close' onClick={togglePopup} />
          </div>
        </>
      )}
    </>
  );
}

export default SimulationPopup;