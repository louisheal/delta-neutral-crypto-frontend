import Spinner from "components/ui/Spinner/Spinner";

const SimulationLoading = ({ className }) => {
  return (
    <div className={className} >
      <Spinner />
      <p>Simulating...</p>
    </div>
  );
}

export default SimulationLoading;