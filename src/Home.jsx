import { Link } from "react-router-dom";
import styles from "./styles/App.module.css";


const Home = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <article>
          <Link to="/calculator">Calculator</Link>
          <img
            className={styles.imageCard}
            src="/images/calculator.png"
            alt=""
          />
        </article>
        <article>
          <Link to="/count">Count</Link>
          <img className={styles.imageCard} src="/images/count.png" alt="" />
        </article>
        <article>
          <Link to="/todolist">To Do List</Link>
          <img className={styles.imageCard} src="/images/todolist.png" alt="" />
        </article>
        <article>
          <Link to="/testimony">Testimony</Link>
          <img
            className={styles.imageCard}
            src="/images/testimony.png"
            alt=""
          />
        </article>
      </main>
    </>
  );
};

export default Home;