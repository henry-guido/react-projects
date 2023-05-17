import { Link } from "react-router-dom";
import styles from "./styles/App.module.css";
import countimage from "/images/count.png"
import todolistimage from "/images/todolist.png"
import testimonyimage from "/images/testimony.png"
import calculatorimage from "/images/calculator.png"

const Home = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <article>
          <Link to="/calculator">Calculator</Link>
          <img
            className={styles.imageCard}
            src={calculatorimage}
            alt=""
          />
        </article>
        <article>
          <Link to="/count">Count</Link>
          <img className={styles.imageCard} src={countimage} alt="" />
        </article>
        <article>
          <Link to="/todolist">To Do List</Link>
          <img className={styles.imageCard} src={todolistimage} alt="" />
        </article>
        <article>
          <Link to="/testimony">Testimony</Link>
          <img
            className={styles.imageCard}
            src={testimonyimage}
            alt=""
          />
        </article>
      </main>
    </>
  );
};

export default Home;
