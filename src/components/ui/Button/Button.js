import './Button.css';

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className} >
      <h3>{text}</h3>
    </button>
  );
}

export default Button;