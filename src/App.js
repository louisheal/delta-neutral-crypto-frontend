import useFetchPoolData from 'hooks/useFetchPoolData';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import PoolContainer from 'pages/Pools/PoolContainer';
import PoolsLoading from 'pages/Pools/PoolsLoading';

import 'assets/App.css';

const App = () => {

  const { pools, charts } = useFetchPoolData();
  
  return (
    <div className="app">
      <Header />
      {pools ? (
        <PoolContainer pools={pools} charts={charts} />
      ) : (
        <PoolsLoading />
      )}
      <Footer />
    </div>
  )
}

export default App;