import spinner from '../assets/spinner.png';

import '../styles/Spinner.css';

const Spinner = () => {
  return (
    <img src={spinner} className='spinner' alt='spinner' />
  )
}

export default Spinner;