import React, { useEffect, useRef } from "react";
import styles from "./Modal_TLPE.module.css";
import Image from "next/image";
import pe from "../../public/assets/pe.jpg";
import Link from "next/link";

const Modal_PE = ({ onClose }) => {
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
            <h2 className={styles.services_h2}>Publicité Extérieure</h2>
            <Image
              src={pe}
              width={270}
              height={190}
              alt='pre-enseigne'
              layout='responsive'
              className={styles.img}
            />
            <h4 className={styles.services_descrption}>
              Recherche d’une solution en communication extérieure
            </h4>
            {/* <img src='../../public/assets/amo-modal.jpg' alt='amo' /> */}
          </div>
          <p className={styles.modalText}></p>
          <p className={styles.modalText}>
            Aujourd’hui, l’espace public et la rue sont occupés par multiples
            supports de <b> publicité extérieure </b> (panneaux 4X3, sucettes
            publicitaires, Abris voyageurs, dispositifs déroulants, écrans
            digitaux….) et vous hésitez sur le type de mobilier à sélectionner
            pour une communication optimale.
          </p>
          <p className={styles.modalText}>
            StepAdvise, après avoir déterminer avec vous vos attentes en terme
            de visibilité sur la cible recherchée, vous guide pour :
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
                <p>
                  Choisir le meilleur support de communication sur votre
                  actualité et votre société
                </p>
              </li>
              <li>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>Diriger vos clients vers votre point de vente</p>
              </li>
              <li>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>
                  Annoncer l&rsquo;évènementiel : portes ouvertes, promotion
                  exceptionnelle…
                </p>
              </li>
            </ul>
          </div>

          <p className={styles.modalText}>
            StepAdvise, informée de vos attentes sur la cible recherchée,
            analyse votre parc publicitaire existant et vous délivre un
            diagnostic sur l’efficience de votre réseau d’affichage.
          </p>
          <p className={styles.modalText}>
            StepAdvise est force de proposition pour la recherche d’
            <b>espace publicitaire</b> et vous apporte le meilleur maillage sur
            la ville dans le but d&rsquo;optimiser votre « 
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
