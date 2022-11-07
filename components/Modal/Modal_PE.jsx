import React from "react";
import styles from "./Modal_TLPE.module.css";
import Image from "next/image";
import pe from "../../public/assets/pe.jpg";
import Link from "next/link";

const Modal_PE = ({ onClose }) => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.services_iconBx}>
            <h2 className={styles.services_h2}>Publicité Extérieure</h2>
            <Image src={pe} width={480} height={300} />
            <h4 className={styles.services_descrption}>
              Recherche d’une solution en communication extérieure
            </h4>
            {/* <img src='../../public/assets/amo-modal.jpg' alt='amo' /> */}
          </div>
          <p className={styles.modalText}></p>
          <p className={styles.modalText}>
            Aujourd’hui, la rue et l’espace public sont occupés par différents
            supports de <b> publicité extérieure </b> (panneau 4X3, sucette
            publicitaire, Abris voyageur, dispositif déroulant, écrans
            digitaux….) et vous ne savez pas quel type de mobilier sélectionner
            pour une communication optimale.
          </p>
          <p className={styles.modalText}>
            StepAdvise, après avoir déterminer avec vous vos attentes en terme
            de visibilité sur la cible recherchée, vous guide pour :
          </p>

          <div className={styles.list_container}>
            <ul className={styles.modalList}>
              <li>
                <Image src='/assets/check.png' width={20} height={20} />
                <p>
                  Déterminer le meilleur support pour communiquer sur votre
                  actualité et votre société
                </p>
              </li>
              <li>
                <Image src='/assets/check.png' width={20} height={20} />
                <p>Diriger vos clients vers votre point de vente</p>
              </li>
              <li>
                <Image src='/assets/check.png' width={20} height={20} />
                <p>
                  Annoncer un évènement : portes ouvertes, promotion
                  exceptionnelle…
                </p>
              </li>
            </ul>
          </div>

          <p className={styles.modalText}>
            D’autre part, StepAdvise est à même d’auditer votre parc
            publicitaire existant et vous délivrer un diagnostic sur
            l’efficience de votre réseau d’affichage.
          </p>
          <p className={styles.modalText}>
            StepAdvise saura être force de proposition pour la recherche d’
            <b>espace publicitaire</b> afin de vous apporter le meilleur
            maillage sur la ville dans le but d&rsquo;optimiser votre « 
            <b>ROI</b> ».
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

export default Modal_PE;
