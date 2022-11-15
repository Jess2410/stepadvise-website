import React from "react";
import styles from "./Modal_AMO.module.css";
import Image from "next/image";
import Link from "next/link";
import amo2 from "../../public/assets/amo2.jpg";

const Modal_AMO = ({ onClose }) => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.services_iconBx}>
            <h2 className={styles.services_h2}>
              Assistant Maître d&rsquo;Ouvrage (AMO)
            </h2>
            <Image src={amo2} width={480} height={300} alt='amo' />
          </div>
          <p className={styles.modalText}>
            Le choix d’un prestataire en <b>mobilier urbain</b> est pour les
            acteurs locaux un moment stratégique de la première sélection ou au
            moment du renouvellement du contrat de service.
            <br />
            <br />
            De fait, le mobilier urbain constitue l’une des pierres angulaires
            dans la gestion de l’espace public. En effet, il demeure un moyen
            incontournable, utile à la ville comme à ses citoyens, en offrant
            des réponses aux divers besoins actuels de ces derniers :
            <br />
            <br />
            Les problématiques de <b>sécurité</b> et <b>mobilité</b> des
            personnes au sein de structures agréables se doivent de respecter
            <b> l’environnement</b> par le choix des matériaux éco-responsables,
            de l’implantation des supports adaptés à la biodiversité sans
            oublier l’<b>interaction</b> des habitants par l’accès à
            l’information des différents acteurs de la ville (culturels,
            associatifs…) critères d’une ville responsable.
            <br />
            <br />
            Votre prestataire garantit le fonctionnement de votre concession de
            service il prend la responsabilité des engagements financiers
            relatifs au mobilier urbain ainsi qu’à l’entretien et la maintenance
            de ce dernier. Il assure également la gestion et la
            commercialisation des espaces publicitaires afin de pérenniser votre
            convention.
            <br />
            <br />
            StepAdvise vous propose sa méthodologie rigoureuse afin de vous
            accompagner dans le choix du candidat idéal.
            <br />
            <br />
            Votre projet sera séquencé en <b>4 étapes</b> :
          </p>
          <div className={styles.list_container}>
            <ul className={styles.modalList}>
              <li>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>Lister précisément vos attentes</p>
              </li>
              <li>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>Bâtir votre programme en mobilier urbain</p>
              </li>
              <li>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>Echanger et communiquer avec les prestataires du marché</p>
              </li>
              <li>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
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
            <Image
              src='/assets/close.png'
              alt='icon close'
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal_AMO;
