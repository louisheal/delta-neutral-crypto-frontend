import useFetchPools from 'hooks/useFetchPools';

import Header from 'components/Header';
import Footer from 'components/Footer';

import PoolList from 'components/PoolList';
import PoolsLoading from 'pages/PoolsLoading';

import 'assets/App.css';

const App = () => {

  const [pools, poolsLoading] = useFetchPools();
  
  return (
    <div className="app">
      <Header />
      {poolsLoading ? (
        <PoolsLoading />
      ) : (
        <PoolList pools={pools} />
      )}
      <Footer />
    </div>
  )
}

export default App;