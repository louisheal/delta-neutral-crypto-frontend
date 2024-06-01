import useFetchPoolData from './hooks/useFetchPoolData';

import Header from './components/Header';
import PoolContainer from './components/PoolContainer';
import PoolsLoading from './components/PoolsLoading';
import Footer from './components/Footer';

import './styles/App.css';

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