import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./pe.module.css";

function Pe() {
  return (
    <div>
      <div className={styles.modalBg}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.services_iconBx}>
              <h2 className={styles.services_h2}>Publicité Extérieure</h2>
              <hr />
              <br />
              <div className={styles.services_img}></div>
              <h3 className={styles.services_h3}>
                Recherche d’une solution en communication extérieure
              </h3>
            </div>
            <p className={styles.modalText}>
              Aujourd’hui, l’espace public et la rue sont occupés par de
              multiples supports de <b> publicité extérieure </b> (panneaux 4X3,
              sucettes publicitaires, Abris voyageurs, dispositifs déroulants,
              écrans digitaux….) et vous hésitez sur le type de mobilier à
              sélectionner pour une communication optimale.
            </p>
            <p className={styles.modalText}>
              StepAdvise, après avoir déterminer avec vous vos attentes en terme
              de visibilité sur la cible recherchée, vous guide pour :
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
                  <p>
                    Choisir le meilleur support de communication sur votre
                    actualité et votre société
                  </p>
                </li>
                <li className={styles.li}>
                  <Image
                    src='/assets/check.png'
                    width={20}
                    height={20}
                    alt='icon check'
                  />
                  <p>Diriger vos clients vers votre point de vente</p>
                </li>
                <li className={styles.li}>
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
              <b>espace publicitaire</b> et vous apporte le meilleur maillage
              sur la ville dans le but d&rsquo;optimiser votre « 
              <b>ROI</b> ».
              <br />
              <br />
              Pour davantage de renseignements,{" "}
              <Link className={styles.link} href={"/#contact"}>
                contactez-nous
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pe;
