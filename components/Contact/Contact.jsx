import React, { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import { contactData } from "../../data.js";

export default function Contact() {
  const { title, subtitle } = contactData;

  const [loading, setLoading] = useState(false);

  const form = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const loader = toast.loading("Veuillez patienter...");
    emailjs
      .sendForm(
        "service_2f63n1h",
        "template_6wst3nx",
        form.current,
        "h-OICZfgsc8y_3pNz"
      )
      .then(
        (result) => {
          // SUCCESS console.log(result.text);
          toast.update(loader, {
            render: "Message envoyé avec succès !",
            type: "success",
            autoClose: 3000,
            isLoading: false,
          });
        },
        (error) => {
          // ERROR console.log(error.text);
          toast.update(loader, {
            render: "Une erreur est survenue !",
            type: "error",
            autoClose: 3000,
            isLoading: false,
          });
        }
      );
    e.target.reset();
  };

  return (
    <section
      className={styles.contact}
      id='contact'
      data-aos='fade-right'
      data-aos-duration='500'
    >
      <h2 className={styles.projects_h3}>{title}</h2>
      <p>{subtitle}</p>

      <div className={styles.contactForm}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.row100}>
            <div className={styles.inputBx50}>
              <input
                type='text'
                name='user_company'
                placeholder='Entreprise / Collectivité'
              />
            </div>
            <div className={styles.inputBx50}>
              <input type='text' name='user_name' placeholder='Nom' />
            </div>
          </div>
          <div className={styles.row100}>
            <div className={styles.inputBx100}>
              <input
                type='mail'
                name='user_email'
                placeholder='Email'
                required
              />
            </div>
          </div>
          <div className={styles.row100}>
            <div className={styles.inputBx100}>
              <input type='tel' name='user_phone' placeholder='Téléphone' />
            </div>
          </div>
          <div className={styles.row100}>
            <div className={styles.inputBx100}>
              <textarea
                placeholder='Message'
                name='message'
                required
              ></textarea>
            </div>
          </div>
          <div className={styles.row100}>
            <div className={styles.inputBx100}>
              <input type='submit' value='Envoyer' />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
