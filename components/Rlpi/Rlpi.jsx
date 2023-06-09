import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Rlpi.module.css";

function Rlpi() {
  return (
    <div>
      {" "}
      <div className={styles.modalBg}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.services_iconBx}>
              <h2 className={styles.services_h2}>RLP(I) : Suivi</h2>
              <hr />
              <br />
              <div className={styles.services_img}></div>
            </div>
            <p className={styles.modalText}>
              Le Règlement Local de Publicité (intercommunal) est un texte légal
              précisant les règles applicables localement en matière de
              <b> publicité extérieure</b>. Ces règles sont plus restrictives
              que les règles générales. Le règlement peut être communal (il
              s&rsquo;applique à une seule commune) ou intercommunal (il
              s&rsquo;applique à plusieurs communes appartenant à un
              établissement public de coopération intercommunale - EPCI).
              L&rsquo;installation d&rsquo;une publicité ou d&rsquo;une enseigne
              doit être conforme à des conditions de densité et de format. Elle
              doit faire l&rsquo;objet d&rsquo;une déclaration ou d&rsquo;une
              autorisation préalable auprès de l&rsquo;autorité compétente.
              <br />
              <br />
              StepAdvise vous délivre un diagnostic global du parc publicitaire
              & enseignes présents sur votre territoire. Ainsi, nous vous
              accompagnons dans le suivi du respect des règles générales ou
              celles de votre
              <b> RLP</b>.
              <br />
              <br />
              En effet, nous vous remontons toutes les infractions relevées sur
              le terrain en vous communiquant les éléments factuels qui vous
              permettront de sanctionner le cas échéant le contrevenant. D’autre
              part, StepAdvise vous assiste sur la compréhension et
              l’interprétation des textes. Enfin, notre société vous aide dans
              l’analyse des nouveaux dossiers d’implantations des enseignes et
              des mobiliers publicitaires afin de valider ou réfuter la demande
              d’installation.
              <br />
              <br />
              Pour davantage de renseignements,{" "}
              <Link className={styles.link} href={"/#contact"}>
                contactez-nous
              </Link>
              .
            </p>
            <p className={styles.modalP}></p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Rlpi;