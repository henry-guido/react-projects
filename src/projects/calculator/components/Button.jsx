import '../styles.css/button.css'

function Button({ children, handleInput }) {

  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`button-container ${isOperator(children) ? "operator" : ""}`.trimEnd()}
      onClick={() => handleInput(children,isOperator(children))}
    >
      {children}
    </div>
  );
}

export default Button;
