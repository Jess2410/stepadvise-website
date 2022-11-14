import React, { useState } from "react";
import Image from "next/image";
import styles from "./Services.module.css";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";

// import servicesData
import { servicesData } from "../../data";

function Services() {
  const { services } = servicesData;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.services_sec} id='services'>
      <div className={styles.services_content}>
        <div className={styles.services_mxw800}>
          <h3 className={styles.services_h3}>Nos Services</h3>
          <p className={styles.services_p}>
            StepAdvise est à vos côtés pour le processus décisionnel sur 4 axes
            stratégiques.
          </p>
        </div>
        <div className={styles.services_items}>
          {services.map((item, i) => {
            return (
              <div
                onClick={() => setIsOpen(!isOpen)}
                className={styles.services_box}
                key={i}
              >
                <div className={styles.services_iconBx}>
                  <Image
                    src={item.src}
                    width={70}
                    height={70}
                    alt={item.name}
                  />
                  <h2 className={styles.services_h2}>{item.name}</h2>
                  <p className={styles.services_descrption}>
                    {item.description}
                  </p>
                </div>
                {isOpen && (
                  <Modal item={item} onClose={() => setShowModal(false)}>
                    <p className={styles.services_descrption}>
                      {item.description}
                    </p>
                  </Modal>
                  //   message={message}
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.services_transition}></div>
    </section>
  );
}

export default Services;
