import './Popup.css';

const Popup = ({ isOpen, togglePopup, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className='overlay' onClick={togglePopup} ></div>
          <div className='popup' >{children}</div>
        </>
      )}
    </>
  );
}

export default Popup;