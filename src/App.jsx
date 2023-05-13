import Apptestimony from "./projects/testimony/Apptestimony";
import AppCount from "./projects/count/AppCount";
import AppCalculator from "./projects/calculator/AppCalculator";
import AppToDoList from "./projects/todolist/AppToDoList";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import LogoHome from "./LogoHome";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <header>
        <Link to="/">
          <div className={styles.headerContainer}>
            <div className={styles.logoHome}>
              <LogoHome />
            </div>
            ReactJS Projects
          </div>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<AppCalculator />} />
          <Route path="/count" element={<AppCount />} />
          <Route path="/testimony" element={<Apptestimony />} />
          <Route path="/todolist" element={<AppToDoList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
