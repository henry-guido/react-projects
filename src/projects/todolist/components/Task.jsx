import styles from "../styles.css/task.module.css";
import { BiTaskX } from "react-icons/bi";

const Task = ({ id, text, completed, succesTask, deleteTask }) => {
  return (
    <div
      className={
        completed
          ? styles.taskContainer + " " + styles.completed
          : styles.taskContainer
      }
    >
      <div className={styles.taskText} onClick={() => succesTask(id)}>
        {text}
      </div>
      <div className={styles.taskIconsContainer} onClick={() => deleteTask(id)}>
        <BiTaskX className={styles.taskIcon} />
      </div>
    </div>
  );
};

export default Task;
