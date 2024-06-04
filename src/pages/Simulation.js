import Graph from "pages/Graph";
import SimulationLoading from "pages/SimulationLoading";

import Button from "components/Button";
import DaySlider from "components/DaySlider";

const Simulation = ({ poolId, tokenOneSymbol, tokenTwoSymbol, chart, chartLoading, sliderValue, onChange, onChangeCommitted, close }) => {
  return (
    <>
      <h2>Estimated Percentage Return after {sliderValue} Days</h2>

      <DaySlider
        sliderValue={sliderValue}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        disabled={chartLoading}
        className='day-slider' />
      
      {chartLoading ? (
        <SimulationLoading className='flex-center' />
      ) : (
        <div className='graph-container flex-center' >
          {/** TODO: Move chart separation somewhere else, or make it a dict */}
          <Graph
            labels={chart[0]}
            long={chart[1]}
            short={chart[2]}
            total={chart[3]}
            className='graph' />
        </div>
      )}

      <div className='flex-row width-100 gap-1'>
        <div className='position'>
          <h6>Long Position</h6>
          <p>Amount: 25%</p>
          <p>Borrow: {tokenTwoSymbol}</p>
          <p>Leverage: 3x</p>
        </div>

        <div className='position'>
          <h6>Short Position</h6>
          <p>Amount: 75%</p>
          <p>Borrow: {tokenOneSymbol}</p>
          <p>Leverage: 3x</p>
        </div>
      </div>

      <div className='flex-row width-100 gap-1' >
        <Button text='Close' onClick={close} className='width-100' />
        <Button text='Contine to AlpacaFinance' className='width-100' />
      </div>
    </>
  );
}

export default Simulation;