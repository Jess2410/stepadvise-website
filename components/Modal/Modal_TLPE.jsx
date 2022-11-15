import React, { useEffect, useRef } from "react";
import styles from "./Modal_TLPE.module.css";
import Image from "next/image";
import tlpe from "../../public/assets/tlpe.png";
import tlpe2 from "../../public/assets/tlpe2.jpg";
import pe from "../../public/assets/pe.png";
import law from "../../public/assets/law.png";
import amo from "../../public/assets/amo.png";
import Link from "next/link";

const Modal_TLPE = ({ onClose }) => {
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
            <h2 className={styles.services_h2}>TLPE : Audit & Gestion </h2>
            <Image
              src={tlpe2}
              width={370}
              height={190}
              alt='tlpe'
              layout='responsive'
              className={styles.img}
            />
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
              <li>
                <Image
                  src='/assets/check.png'
                  width={20}
                  height={20}
                  alt='icon check'
                />
                <p>La publicité</p>
              </li>
              <li>
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
              <li>
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

export default Modal_TLPE;
