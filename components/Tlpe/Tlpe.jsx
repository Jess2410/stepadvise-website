import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Tlpe.module.css";

function Tlpe() {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.services_iconBx}>
            <h2 className={styles.services_h2}>TLPE : Audit & Gestion </h2>
            <hr />
            <br />
            <div className={styles.services_img}></div>
          </div>

          <p className={styles.modalText}>
            La<b> Taxe Locale sur la Publicité Extérieure</b> est une
            contribution créée par la loi du 4 août 2008 pour la modernisation
            de l’économie. Elle concerne toutes les entreprises qui exploitent
            des<b> supports publicitaires</b> fixes, visibles et implantés sur
            une voie ouverte à la circulation. On considère par publicité des
            supports faisant apparaître des éléments textuels ou graphiques
            ayant pour vocation d’informer le public ou d’attirer son attention.
            Il existe trois typologies de supports :
            <br />
          </p>
          <div className={styles.list_container}>
            <ul className={styles.modalList}>
              <li className={styles.li}>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>La publicité</p>
              </li>
              <li className={styles.li}>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>
                  Les enseignes (inscription, forme ou image apposée relative à
                  votre activité)
                </p>
              </li>
              <li className={styles.li}>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>
                  {" "}
                  Les pré-enseignes (inscription, forme ou image indiquant la
                  proximité du lieu de l’activité commerciale)
                </p>
              </li>
            </ul>
          </div>
          <p className={styles.modalText}>
            StepAdvise vous apporte les outils et les moyens (règlementaires,
            digitaux et présence terrain) ainsi qu’un savoir faire pour disposer
            d’une base de données fiable. En effet, nous vous permettons de
            recenser tout le parc publicitaire et toutes les <b> enseignes </b>
            commerciales présents sur votre territoire. L’ensemble de ces
            matériels sera mesuré dans le détail, photographié et géopositionné.
            Ainsi vous serez en capacité d’établir une taxation juste.
          </p>
          <p className={styles.modalText}>
            StepAdvise favorise également les échanges réguliers avec les agents
            territoriaux (formation possible), les administrés et les
            commerçants (organisations de réunions d’informations) pour une
            bonne gestion de ce volet fiscal et économique.
          </p>
          <p className={styles.modalText}>
            Pour davantage de renseignements,{" "}
            <Link className={styles.link} href={"/#contact"}>
              contactez-nous
            </Link>
            .
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Tlpe;
