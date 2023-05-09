import styles from "../style/testimony.module.css";

export function Testimony({person,text}) {

  return (
    <>
     <div className={styles.testimonyContainer} >
        <img className={styles.testimonyImage} src={`/images/testimony-${person.name.split(' ').at().toLowerCase()}.png`} alt={`photo from ${person.name.split(' ').at()}`} />
        <div className={styles.testimonyContainerText}>
          <p className={styles.testimonyName}>{person.name} en <strong>{person.country}</strong></p>
          <p className={styles.testimonyPosition}>{person.position} en <strong>{person.company}</strong></p>
          <p className={styles.testimonyText}>{text}</p>
        </div>
      </div>
    </>
  );  
}