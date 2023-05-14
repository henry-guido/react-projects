import TaskList from "./components/TaskList";
import styles from "./styles.css/apptodolist.module.css";
import fccimage from '/images/freecodecamp-logo.png'


function AppToDoList() {
  return (
    <div className={styles.appToDoList}>
      <div className={styles.freecodecampLogoContainer}>
        <img
          src={fccimage}
          className={styles.freecodecampLogo}
          alt="Logo of freeCodeCamp"
        />
      </div>

      <div className={styles.taskMainList}>
        <h1 className={styles.title}>My List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default AppToDoList;
