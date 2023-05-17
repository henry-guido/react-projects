import AppTestimony from "./projects/testimony/AppTestimony";
import AppCount from "./projects/count/AppCount";
import AppCalculator from "./projects/calculator/AppCalculator";
import AppToDoList from "./projects/todolist/AppToDoList";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import logo from "/logo.svg"
import styles from "./styles/App.module.css";


function App() {
  return (
    <>
      <header>
        <Link to="/">
          <div className={styles.headerContainer}>
            <div className={styles.logoHome}>
              <img src={logo} alt="" />
            </div>
            <h1 className={styles.title}>ReactJS Projects</h1>
          </div>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<AppCalculator />} />
        <Route path="/count" element={<AppCount />} />
        <Route path="/testimony" element={<AppTestimony />} />
        <Route path="/todolist" element={<AppToDoList />} />
      </Routes>
    </>
  );
}

export default App;
