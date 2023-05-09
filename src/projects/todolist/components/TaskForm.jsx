import styles from "../styles.css/taskform.module.css";
import { useState } from "react";

const FormTask = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      text: input,
      completed: false,
    };

    onSubmit(newTask);
    setInput("");
  };

  return (
    <form className={styles.formTask} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.inputTask}
        placeholder="Write one task"
        name="text"
        onChange={handleInput}
        value={input}
      />
      <button className={styles.buttonTask}> Add Task</button>
    </form>
  );
};

export default FormTask;
