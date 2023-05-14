import "../styles.css/logo.css";
import fccimage from '/images/freecodecamp-logo.png'


const Logo = () => {
  return (
    <div className="freecodecamp-logo-container">
      <img
        src={fccimage}
        className="freecodecamp-logo"
        alt="logo of freeCodeCamp"
      />
    </div>
  );
};

export default Logo;
