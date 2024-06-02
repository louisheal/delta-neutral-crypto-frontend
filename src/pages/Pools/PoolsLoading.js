import Spinner from "components/Spinner/Spinner";

const PoolsLoading = () => {
  return (
    <div>
      <Spinner />
      <p>
        Pools are currently loading...
      </p>
      <p>
        During busy times this may take longer than normal.
      </p>
    </div>
  )
}

export default PoolsLoading;