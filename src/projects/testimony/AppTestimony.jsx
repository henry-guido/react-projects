import { useState, useEffect } from "react";
import styles from "./style/testimony.module.css";
import { Testimony } from "./components/Testimony";

function AppTestimony() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("./person.json")
      .then((response) => response.json())
      .then((res) => setPersons(res));
  }, []);

  return (
    <div className={styles.appTestimony}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {persons.length > 0 ? (
          persons.map((person, index) => (
            <Testimony
              key={index}
              person={person}
              text={<q>{person.testimony}</q>}
            />
          ))
        ) : (
          <div style={{ width: "1197px" }}>Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default AppTestimony;
