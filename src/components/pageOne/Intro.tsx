import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className="page" id="one">
      <div className={styles.upper}>
        <div className={`${styles.block} ${styles.blockOne}`}></div>
        <div className={`${styles.block} ${styles.blockTwo}`}></div>
      </div>
      <div className={styles.lower}>
        <div className={`${styles.block} ${styles.blockThree}`}></div>
        <div className={`${styles.block} ${styles.blockFour}`}></div>
      </div>
    </section>
  );
};

export default Intro;
