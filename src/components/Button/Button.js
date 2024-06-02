import './Button.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} >
      <h3>{text}</h3>
    </button>
  );
}

export default Button;