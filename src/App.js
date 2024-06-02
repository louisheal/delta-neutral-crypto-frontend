import useFetchPools from 'hooks/useFetchPools';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import PoolContainer from 'pages/Pools/PoolContainer';
import PoolsLoading from 'pages/Pools/PoolsLoading';

import 'assets/App.css';

const App = () => {

  const { pools, poolsLoading } = useFetchPools();
  
  return (
    <div className="app">
      <Header />
      {poolsLoading ? (
        <PoolsLoading />
      ) : (
        <PoolContainer pools={pools} />
      )}
      <Footer />
    </div>
  )
}

export default App;