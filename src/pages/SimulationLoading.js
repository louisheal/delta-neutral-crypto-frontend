import Spinner from "components/Spinner/Spinner";

const SimulationLoading = ({ className }) => {
  return (
    <div className={className} >
      <Spinner />
      <p>Simulating...</p>
    </div>
  );
}

export default SimulationLoading;