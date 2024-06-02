import logo from 'assets/logo.png';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className='logo' alt='logo' />
      <h1>delta-neutral</h1>
    </div>
  )
}

export default Header;