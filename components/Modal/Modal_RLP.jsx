import React, { useEffect, useRef } from "react";
import styles from "./Modal_AMO.module.css";
import Image from "next/image";
import tlpe from "../../public/assets/tlpe.png";
import pe from "../../public/assets/pe.png";
import law from "../../public/assets/law.png";
import rlpi2 from "../../public/assets/rlpi2.jpg";
import amo from "../../public/assets/amo.png";
import Link from "next/link";

const Modal_RLP = ({ onClose }) => {
  const refModal = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!refModal.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal} ref={refModal}>
        <div className={styles.modalContent}>
          <div className={styles.services_iconBx}>
            <h2 className={styles.services_h2}>RLP(I) : Suivi</h2>
            <Image
              src='/assets/rlpi2.jpg'
              width={270}
              height={190}
              alt='rlpi'
              layout='responsive'
              className={styles.img}
            />
          </div>
          <p className={styles.modalText}>
            Le Règlement Local de Publicité (intercommunal) est un texte légal
            précisant les règles applicables localement en matière de
            <b> publicité extérieure</b>. Ces règles sont plus restrictives que
            les règles générales. Le règlement peut être communal (il
            s&rsquo;applique à une seule commune) ou intercommunal (il
            s&rsquo;applique à plusieurs communes appartenant à un établissement
            public de coopération intercommunale - EPCI). L&rsquo;installation
            d&rsquo;une publicité ou d&rsquo;une enseigne doit être conforme à
            des conditions de densité et de format. Elle doit faire
            l&rsquo;objet d&rsquo;une déclaration ou d&rsquo;une autorisation
            préalable auprès de l&rsquo;autorité compétente.
            <br />
            <br />
            StepAdvise vous délivre un diagnostic global du parc publicitaire &
            enseignes présents sur votre territoire. Ainsi, nous vous
            accompagnons dans le suivi du respect des règles générales ou celles
            de votre
            <b> RLP</b>.
            <br />
            <br />
            En effet, nous vous remontons toutes les infractions relevées sur le
            terrain en vous communiquant les éléments factuels qui vous
            permettront de sanctionner le cas échéant le contrevenant. D’autre
            part, StepAdvise vous assiste sur la compréhension et
            l’interprétation des textes. Enfin, notre société vous aide dans
            l’analyse des nouveaux dossiers d’implantations des enseignes et des
            mobiliers publicitaires afin de valider ou réfuter la demande
            d’installation.
          </p>
          <p className={styles.modalP}>
            Pour davantage de renseignements, contactez-nous « {""}
            <Link className={styles.link} href={"#contact"} onClick={onClose}>
              ici{""}
            </Link>
             ».
          </p>
        </div>
        <div>
          <button className={styles.modalBtn} onClick={onClose}>
            <Image src='/assets/close.png' alt='icon' width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal_RLP;
