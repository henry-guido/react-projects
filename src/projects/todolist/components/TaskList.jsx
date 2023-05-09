import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import Task from "../components/Task";
import styles from "../styles.css/tasklist.module.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setTasks(data);
    }
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('data', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (newTask) => {
    if (newTask.text.trim()) {
      newTask.text = newTask.text.trim();
      setTasks([newTask, ...tasks]);
    }
  };

  const succesTask = (id) => {
    const search = tasks.findIndex((task) => task.id === id);
    tasks[search].completed = !tasks[search].completed;
    setTasks([...tasks]);
  };

  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  };

  return (
    <React.Fragment>
      <TaskForm onSubmit={addTask} />
      <div className={styles.taskListCointainer}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            succesTask={succesTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default TaskList;
