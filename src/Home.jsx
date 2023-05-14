import { Link } from "react-router-dom";
import styles from "./styles/App.module.css";
import logo from "/logo.svg"
import countimage from "/images/count.png"
import todolistimage from "/images/todolist.png"
import testimonyimage from "/images/testimony.png"
import calculatorimage from "/images/calculator.png"

const Home = () => {
  return (
    <>
      <main className={styles.mainContainer}>
      <header>
        <Link to="/">
          <div className={styles.headerContainer}>
            <div className={styles.logoHome}>
              <img src={logo} alt="" />
            </div>
            ReactJS Projects
          </div>
        </Link>
      </header>
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
