import "../styles.css/clearbutton.css";

function ClearButton({ children, handleClear }) {
  return (
    <div 
      className="clear-button" 
      onClick={handleClear}>
      {children}
    </div>
  );
}

export default ClearButton;
