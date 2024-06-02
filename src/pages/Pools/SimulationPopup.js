import Graph from "./Graph";
import Button from "components/Button/Button";
import SimulationLoading from "./SimulationLoading";

const SimulationPopup = ({ isOpen, togglePopup, chartData }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className='overlay' onClick={togglePopup} />
          <div className='popup'>
            <h2 >Estimated Percentage Return after 30 Days</h2>
            {chartData ? (
              <Graph className='graph'
                labels={chartData[0]}
                long={chartData[1]}
                short={chartData[2]}
                total={chartData[3]}
              />
            ) : (
              <SimulationLoading />
            )}
            <Button text='Close' onClick={togglePopup} />
          </div>
        </>
      )}
    </>
  );
}

export default SimulationPopup;