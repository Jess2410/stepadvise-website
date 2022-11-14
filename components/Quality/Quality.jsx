import React, { useEffect } from "react";
import styles from "./Quality.module.css";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Quality() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <br></br>
      <br />
      <br />
      <br />
      <section
        className={styles.quality_sec}
        // data-aos='fade-up'
        // data-aos-duration='1000'
      >
        <h3 className={styles.quality_h3}>Les engagements Stepadvise</h3>
        <p className={styles.quality_p}>Maitrise du terrain </p>
        <p className={styles.quality_p}>
          Expérience du mobilier urbain et du secteur de l’Outdoor
        </p>
        <p className={styles.quality_p}>
          Connaissance des textes règlementaires
        </p>
        <p className={styles.quality_p}>Présence nationale</p>
        <p className={styles.quality_p}> Autonomie & réactivité</p>
        <p className={styles.quality_p}>
          Communication entre les différents acteurs
        </p>
      </section>
    </>
  );
}
