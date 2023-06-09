import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./CardService.module.css";
import tlpe from "../../public/assets/tlpe.svg";
import pe from "../../public/assets/pub.svg";
import law from "../../public/assets/law.svg";
import amo from "../../public/assets/amo.svg";
import Link from "next/link";

export default function CardService() {
  // const [isOpen, setIsOpen] = useState(null);
  const [checkWidth, setcheckWidth] = useState(null);

  const checkWidthFunc = () => {
    setcheckWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setcheckWidth(window.innerWidth);
      window.addEventListener("resize", checkWidthFunc);
    }
    return () => {
      window.removeEventListener("resize", checkWidthFunc);
    };
  }, []);

  return (
    <div
      className={styles.services_items}
      data-aos='fade-right'
      data-aos-duration='1000'
    >
      {/* BLOC 1 */}
      <div className={styles.services_box}>
        <div className={styles.services_box2}>
          <h3 className={styles.services_card_h3}>AMO</h3>
          <h3 className={styles.services_h2}>Mobilier urbain</h3>
        </div>

        <div className={styles.services_iconBx}>
          <div className={styles.services_header}>
            {checkWidth > 768 ? (
              <div className={styles.services_header2}>
                <Image src={amo} width={40} height={40} alt='amo' />
              </div>
            ) : (
              ""
            )}
          </div>
          <p className={styles.services_description2}>
            La sélection de votre concessionnaire en mobilier urbain et la
            gestion du renouvellement de votre contrat d’exploitation de votre
            domaine public...
          </p>
          <div className={styles.button_container}>
            <Link
              href='/amo'
              // onClick={() => setIsOpen("bloc1")}
              className={styles.button}
            >
              En savoir +
            </Link>
          </div>
        </div>
        {/* {isOpen == "bloc1" && (
          <Modal_AMO onClose={() => setIsOpen(false)}></Modal_AMO>
        )} */}
      </div>

      {/* BLOC 2 */}
      <div
        className={styles.services_box}
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <div className={styles.services_box2}>
          <h3 className={styles.services_card_h3}>TLPE</h3>
          <h3 className={styles.services_h2}>Audit & Gestion</h3>
        </div>

        <div className={styles.services_iconBx}>
          <div className={styles.services_header}>
            {checkWidth > 768 ? (
              <div className={styles.services_header2}>
                <Image src={tlpe} width={40} height={40} alt='tlpe' />
              </div>
            ) : (
              ""
            )}
          </div>
          <p className={styles.services_description2}>
            Le suivi de votre TLPE. StepAdvise vous apporte les outils et les
            moyens (règlementaires, digitaux et présence terrain)...
          </p>
          <div className={styles.button_container}>
            <Link
              href='/tlpe'
              // onClick={() => setIsOpen("bloc1")}
              className={styles.button}
            >
              En savoir +
            </Link>
          </div>
        </div>
        {/* {isOpen == "bloc2" && (
          <Modal_TLPE onClose={() => setIsOpen(false)}></Modal_TLPE>
        )} */}
      </div>
      {/* BLOC 3 */}
      <div
        className={styles.services_box}
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <div className={styles.services_box2}>
          <h3 className={styles.services_card_h3}>RLP(i)</h3>
          <h3 className={styles.services_h2}>Mise en application</h3>
        </div>

        <div className={styles.services_iconBx}>
          <div className={styles.services_header}>
            {checkWidth > 768 ? (
              <div className={styles.services_header2}>
                <Image src={law} width={40} height={40} alt='rlpi' />
              </div>
            ) : (
              ""
            )}
          </div>
          <p className={styles.services_description2}>
            Le respect de votre règlement local de publicité. StepAdvise vous
            délivre un diagnostic global du parc publicitaire & enseigne présent
            sur votre territoire...
          </p>
          <div className={styles.button_container}>
            <Link
              href='/rlpi'
              // onClick={() => setIsOpen("bloc1")}
              className={styles.button}
            >
              En savoir +
            </Link>
          </div>
        </div>

        {/* <Modal_RLP onClose={() => setIsOpen(false)}></Modal_RLP> */}
      </div>
      {/* BLOC 4 */}
      <div
        className={styles.services_box}
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <div className={styles.services_box2}>
          <h3 className={styles.services_card_h3}>PUBLICITE EXTERIEURE</h3>
          <h3 className={styles.services_h2}>Diagnostic & Conseil</h3>
        </div>

        <div className={styles.services_iconBx}>
          <div className={styles.services_header}>
            {checkWidth > 768 ? (
              <div className={styles.services_header2}>
                <Image src={pe} width={40} height={40} alt='pe' />
              </div>
            ) : (
              ""
            )}
          </div>
          <p className={styles.services_description2}>
            La recherche de la solution optimale pour votre communication
            extérieure. Aujourd’hui, la rue et l’espace public sont occupés par
            différents supports...
          </p>
          <div className={styles.button_container}>
            <Link
              href='/pe'
              // onClick={() => setIsOpen("bloc1")}
              className={styles.button}
            >
              En savoir +
            </Link>
          </div>
        </div>
        {/* {isOpen == "bloc4" && (
          <Modal_PE onClose={() => setIsOpen(false)}></Modal_PE>
        )} */}
      </div>
    </div>
  );
}
