import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./Engagements.module.css";
import quote from "../../public/assets/quote.svg";

export default function Engagements() {
  return (
    <section
      className={styles.services_sec}
      // data-aos='fade-right'
      // data-aos-duration='1500'
    >
      <div className={styles.services_content}>
        <div className={styles.services_mxw800}>
          <h3 className={styles.services_h3}>
            Les engagements <span>StepAdvise</span>{" "}
          </h3>
          <hr />

          <p className={styles.services_p}>
            <Image src={quote} width={25} height={25} alt='amo' /> StepAdvise
            est à vos côtés pour le processus décisionnel sur 4 axes
            stratégiques.
          </p>
        </div>

        <div className={styles.services_items}>
          <ul className={styles.listContainer}>
            <li className={styles.li}>Maitrise du terrain</li>
            <li className={styles.li}>
              Expérience du mobilier urbain et du secteur de l’Outdoor
            </li>
            <li className={styles.li}>
              Connaissance des textes règlementaires
            </li>
            <li className={styles.li}>Présence nationale</li>
            <li className={styles.li}>Autonomie & réactivité</li>
            <li className={styles.li}>
              Communication entre les différents acteurs
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.services_transition}></div>
    </section>

    // <section className={styles.wrapper}>
    //   <div>
    //     <h3 className={styles.title}>Les engagements Stepadvise</h3>
    //     <hr />
    //   </div>
    //
    // </section>
  );
}
