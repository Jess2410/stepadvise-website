import React, { useState, useEffect } from "react";

import styles from "./Services.module.css";

// importing aos
// import AOS from "aos";
// import "aos/dist/aos.css";

import CardService from "../CardService/CardService";

function Services() {
  //   const { services } = servicesData;

  const [isOpen, setIsOpen] = useState(null);

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
    <section
      className={styles.services_sec}
      id='services'
      // data-aos='fade-right'
      // data-aos-duration='1500'
    >
      <div className={styles.services_content}>
        <div className={styles.services_mxw800}>
          <h3 className={styles.services_h3}>Nos Services</h3>
          <hr />
          <p className={styles.services_p}>
            StepAdvise est à vos côtés pour le processus décisionnel sur 4 axes
            stratégiques.
          </p>
        </div>

        <div className={styles.services_items}>
          <CardService />
          {/* BLOC 1 */}
          {/* <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='0'
          >
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
                gestion du renouvellement de votre contrat d’exploitation de
                votre domaine public...
              </p>

              <p className={styles.services_description}>Mobilier urbain</p>
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
              <Modal_AMO onClose={() => setIsOpen(false)}></Modal_AMO>
            )}
          </div> */}

          {/* BLOC 2 */}
          {/* <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='300'
          >
            <div className={styles.services_iconBx}>
              <div className={styles.services_header}>
                <div className={styles.services_header2}>
                  <Image src={tlpe} width={50} height={50} alt='tlpe' />
                  <h2 className={styles.services_h2}>TLPE</h2>
                </div>
              </div>
              <h3 className={styles.services_card_h3}>Audit & Gestion</h3>
              <p className={styles.services_description2}>
                Le suivi de votre TLPE. StepAdvise vous apporte les outils et
                les moyens (règlementaires, digitaux et présence terrain)...
              </p>
              <div className={styles.button_container}>
                <button
                  className={styles.button}
                  onClick={() => setIsOpen("bloc2")}
                >
                  En savoir +
                </button>
              </div>
            </div>
            {isOpen == "bloc2" && (
              <Modal_TLPE onClose={() => setIsOpen(false)}></Modal_TLPE>
            )}
          </div> */}

          {/* BLOC 3 */}

          {/* <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='600'
         
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
          </div> */}

          {/* BLOC 4 */}
          {/* <div
            className={styles.services_box}
            data-aos='fade-right'
            data-aos-duration='900'
       
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
          </div> */}
        </div>
      </div>
      <div className={styles.services_transition}></div>
    </section>
  );
}

export default Services;
