import React, { useEffect } from "react";
import styles from "./Engagements.module.css";

export default function Engagements() {
  return (
    <>
      <section className={styles.wrapper}>
        <h3 className={styles.title}>Les engagements Stepadvise</h3>
        <ul className={styles.listContainer}>
          <li>Maitrise du terrain</li>
          <li>Expérience du mobilier urbain et du secteur de l’Outdoor</li>
          <li>Connaissance des textes règlementaires</li>
          <li>Présence nationale</li>
          <li>Autonomie & réactivité</li>
          <li>Communication entre les différents acteurs</li>
        </ul>
      </section>
    </>
  );
}
