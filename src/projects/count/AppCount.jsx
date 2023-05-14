import { useState } from 'react';
import styles from './styles/appcount.module.css';
import { Button } from './components/Button';
import { Count } from './components/Count'
import fccimage from '/images/freecodecamp-logo.png'


function AppCount() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count => count + 1)
    }
    const clickReset = () => {
        setCount(0)

    }
   
  return (
    <div className={styles.appCount}>
      <div className={styles.freecodecampLogoContainer}>
        <img
          className={styles.freecodecampLogo}
          src={fccimage}
          alt='logo of freecodecampo'
        />
      </div>
      <div className={styles.mainContainerCount}>
        <Count text={count}></Count>
        <Button text='click' isButtonOfClick={true} handleClick={handleClick}></Button>
        <Button text='Reset' isButtonOfClick={false} handleClick={clickReset}></Button>
      </div>
    </div>
  );
}

export default AppCount;
