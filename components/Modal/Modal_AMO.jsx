import React from "react";
import styles from "./Modal_AMO.module.css";
import Image from "next/image";
import tlpe from "../../public/assets/tlpe.png";
import pe from "../../public/assets/pe.png";
import law from "../../public/assets/law.png";
import amo from "../../public/assets/amo.png";
import amo2 from "../../public/assets/amo2.jpg";
import Link from "next/link";

const Modal_AMO = ({ onClose }) => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.services_iconBx}>
            <h2 className={styles.services_h2}>
              Assistant Maître d&rsquo;Ouvrage (AMO)
            </h2>
            <Image src={amo2} width={480} height={300} />
          </div>
          <p className={styles.modalText}>
            La sélection de votre <b>concessionnaire en mobilier urbain </b>et
            la gestion du renouvellement de votre contrat d’exploitation de
            votre
            <b> domaine public</b>.
            <br />
            <br />
            Le choix d’un prestataire en mobilier urbain et le renouvellement du
            <b> contrat d’exploitation</b> du mobilier urbain est toujours un
            moment stratégique pour les acteurs locaux. Le mobilier urbain est
            l’une des pierres angulaires dans la gestion de l’espace public,
            motif de bien être et de fierté pour vos citoyens. Cet outil
            favorise les services de la ville durable et éco-responsable. En
            effet, le mobilier urbain se doit de répondre aux problématiques des
            mobilités, agir sur une meilleure interaction de vos habitants tout
            en contribuant à la propreté et au confort des usagers de la rue;
            sans oublier le respect de la biodiversité.La concession de service
            est le fonctionnement dédié où votre prestataire garantie les
            engagements financiers de votre mobilier urbain, assure l’entretien
            et la maintenance du matériel, gère la commercialisation des{" "}
            <b>espaces publicitaires</b> afin de pérenniser votre convention.
            <br />
            <br />
            C’est pourquoi le choix de votre concessionnaire est capital !
            StepAdvise à travers une méthodologie rigoureuse vous accompagne
            dans la sélection du candidat idoine.
            <br />
            <br />
            Votre projet sera séquencé en <b>4 étapes</b> :
          </p>
          <div className={styles.list_container}>
            <ul className={styles.modalList}>
              <li>
                <Image src='/assets/check.png' width={20} height={20} />
                <p>Déterminer précisément vos attentes</p>
              </li>
              <li>
                <Image src='/assets/check.png' width={20} height={20} />
                <p>Bâtir votre programme en mobilier urbain</p>
              </li>
              <li>
                <Image src='/assets/check.png' width={20} height={20} />
                <p>Echanger et communiquer avec les prestataires du marché</p>
              </li>
              <li>
                <Image src='/assets/check.png' width={20} height={20} />
                <p>Organiser votre appel d’offre</p>
              </li>
            </ul>
          </div>
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

export default Modal_AMO;
