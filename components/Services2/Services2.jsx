import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Services2.module.css";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import tlpe from "../../public/assets/tlpe.png";
import pe from "../../public/assets/pe.png";
import law from "../../public/assets/law.png";
import amo from "../../public/assets/amo.png";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

// import servicesData
import { servicesData } from "../../data";
import Modal_AMO from "../Modal/Modal_AMO";
import Modal_TLPE from "../Modal/Modal_TLPE";
import Modal_RLP from "../Modal/Modal_RLP";
import Modal_PE from "../Modal/Modal_PE";

function Services2() {
  //   const { services } = servicesData;

  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={styles.services_sec}
      id='services'
      data-aos='fade-right'
      data-aos-duration='3000'
    >
      <div className={styles.services_content}>
        <div className={styles.services_mxw800}>
          <h3 className={styles.services_h3}>Nos Services</h3>
          <p className={styles.services_p}>
            StepAdvise est à vos côtés pour le processus décisionnel sur 4 axes
            stratégiques.
          </p>
        </div>

        <div className={styles.services_items}>
          {/* BLOC 1 */}
          <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='2000'
          >
            <div className={styles.services_iconBx}>
              <Image src={amo} width={70} height={70} alt='amo' />
              <h2 className={styles.services_h2}>AMO</h2>
              <p className={styles.services_description}>Mobilier urbain</p>
              <p className={styles.services_description2}>
                La sélection de votre concessionnaire en mobilier urbain et la
                gestion du renouvellement de votre contrat d’exploitation de
                votre domaine public...
              </p>
              <div className={styles.button_container}>
                <button
                  onClick={() => setIsOpen("bloc1")}
                  className={styles.button}
                >
                  En savoir plus...
                </button>
              </div>
            </div>
            {isOpen == "bloc1" && (
              <Modal_AMO
                onClose={() => setIsOpen(null, console.log(isOpen))}
              ></Modal_AMO>
            )}
          </div>

          {/* BLOC 2 */}
          <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='3000'
            // data-aos-delay='600'
          >
            <div className={styles.services_iconBx}>
              <Image src={tlpe} width={70} height={70} alt='tlpe' />
              <h2 className={styles.services_h2}>TLPE</h2>
              <p className={styles.services_description}>Audit & Gestion</p>
              <p className={styles.services_description2}>
                Le suivi de votre TLPE. StepAdvise vous apporte les outils et
                les moyens (règlementaires, digitaux et présence terrain)...
              </p>
              <div className={styles.button_container}>
                <button
                  className={styles.button}
                  onClick={() => setIsOpen("bloc2")}
                >
                  En savoir plus...
                </button>
              </div>
            </div>
            {isOpen == "bloc2" && (
              <Modal_TLPE onClose={() => setIsOpen(false)}></Modal_TLPE>
            )}
          </div>

          {/* BLOC 3 */}

          <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='3000'
            // data-aos-delay='900'
          >
            <div className={styles.services_iconBx}>
              <Image src={law} width={70} height={70} alt='rlpi' />
              <h2 className={styles.services_h2}>RLP(i)</h2>
              <p className={styles.services_description}>Mise en application</p>
              <p className={styles.services_description2}>
                Le respect de votre règlement local de publicité. StepAdvise
                vous délivre un diagnostic global du parc publicitaire &
                enseigne présent sur votre territoire...
              </p>
              <div className={styles.button_container}>
                <button
                  className={styles.button}
                  onClick={() => setIsOpen("bloc3")}
                >
                  En savoir plus...
                </button>
              </div>
            </div>
            {isOpen == "bloc3" && (
              <Modal_RLP onClose={() => setIsOpen(false)}></Modal_RLP>
            )}
          </div>

          {/* BLOC 4 */}
          <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='3000'
            // data-aos-delay='1200'
          >
            <div className={styles.services_iconBx}>
              <Image src={pe} width={70} height={70} alt='pe' />
              <h2 className={styles.services_h2}>PUBLICITE EXTERIEURE</h2>
              <p className={styles.services_description}>
                Diagnostic & Conseil
              </p>
              <p className={styles.services_description2}>
                La recherche de la solution optimale pour votre communication
                extérieure. Aujourd’hui, la rue et l’espace public sont occupés
                par différents supports...
              </p>
              <div className={styles.button_container}>
                <button
                  className={styles.button}
                  onClick={() => setIsOpen("bloc4")}
                >
                  En savoir plus...
                </button>
              </div>
            </div>
            {isOpen == "bloc4" && (
              <Modal_PE onClose={() => setIsOpen(false)}></Modal_PE>
            )}
          </div>
        </div>
      </div>
      <div className={styles.services_transition}></div>
    </section>
  );
}

export default Services2;
