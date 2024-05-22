import '../styles/Popup.css';

const Popup = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="overlay" onClick={onClose}></div>
          <div className="popup">{children}</div>
        </>
      )}
    </>
  )
}

export default Popup;
