import React from "react";
import styles from "./Modal_AMO.module.css";
import Image from "next/image";
import tlpe from "../../public/assets/tlpe.png";
import pe from "../../public/assets/pe.png";
import law from "../../public/assets/law.png";
import amo from "../../public/assets/amo.png";
import amo2 from "../../public/assets/amo_modal.jpg";
import Link from "next/link";

const Modal_AMO = ({ onClose }) => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.services_iconBx}>
            <Image src={amo} width={70} height={70} />
            <h2 className={styles.services_h2}>
              Assistant Maître d&rsquo;Ouvrage (AMO)
            </h2>
            <p className={styles.services_descrption}>Mobilier urbain</p>
            <Image src={amo2} width={280} height={200} />
          </div>
          <p className={styles.modalText}>
            La sélection de votre concessionnaire en mobilier urbain et la
            gestion du renouvellement de votre contrat d’exploitation de votre
            domaine public
          </p>
          <p className={styles.modalText}>
            Le choix d’un prestataire en mobilier urbain et le renouvellement du
            contrat d’exploitation du mobilier urbain est toujours un moment
            stratégique pour les acteurs locaux. Le mobilier urbain est l’une
            des pierres angulaires dans la gestion de l’espace public, motif de
            bien être et de fierté pour vos citoyens. Cet outil favorise les
            services de la ville durable et éco-responsable. En effet, le
            mobilier urbain se doit de répondre aux problématiques des
            mobilités, agir sur une meilleure interaction de vos habitants tout
            en contribuant à la propreté et au confort des usagers de la rue;
            sans oublier le respect de la biodiversité.La concession de service
            est le fonctionnement dédié où votre prestataire garantie les
            engagements financiers de votre mobilier urbain, assure l’entretien
            et la maintenance du matériel, gère la commercialisation des espaces
            publicitaires afin de pérenniser votre convention.
          </p>
          <p className={styles.modalText}>
            C’est pourquoi le choix de votre concessionnaire est capital !
            StepAdvise à travers une méthodologie rigoureuse vous accompagne
            dans la sélection du candidat idoine.
          </p>
          <div className={styles.list_container}>
            <p className={styles.modalText}>
              Votre projet sera séquencé en 4 étapes:
            </p>
            <ol className={styles.modalList}>
              <li>Déterminer précisément vos attentes</li>
              <li>Bâtir votre programme en mobilier urbain</li>
              <li>Echanger et communiquer avec les prestataires du marché</li>
              <li>Organiser votre appel d’offre</li>
            </ol>
          </div>
          <p className={styles.info}>
            Pour davantage de renseignements, contactez-moi en cliquant « {""}
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

export default Modal_AMO;
