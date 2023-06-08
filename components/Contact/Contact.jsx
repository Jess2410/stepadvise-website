import React, { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import contact from "../../public/assets/contact.svg";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import { contactData } from "../../data.js";
import Image from "next/image";

export default function Contact() {
  const { title, subtitle } = contactData;

  const [loading, setLoading] = useState(false);

  const form = useRef();

  // useEffect(() => {
  //   AOS.init();
  // }, []);

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
      className={styles.about}
      id='about'
      // data-aos='fade-left'
      // data-aos-duration='1000'
    >
      <div className={styles.services_content}>
        <div className={styles.services_mxw800}>
          <h3 className={styles.services_h3}>
            Contactez-<span>nous</span> <hr />
          </h3>

          <p className={styles.services_p}>
            Une question ? Un conseil ? Contactez-nous pour plus
            d&rsquo;informations.
          </p>
        </div>
        <div className={styles.contentBx}>
          {/* <h2 className={styles.about_h3}>À propos</h2> */}
          <div className={styles.wrapper}>
            <div className={styles.imgBx}>
              <Image
                src={contact}
                width={340}
                height={340}
                className={styles.img}
                alt='pe'
              />
            </div>{" "}
            <div className={styles.contactForm}>
              <form ref={form} onSubmit={sendEmail}>
                <div className={styles.row100}>
                  <div className={styles.inputBx50}>
                    <input
                      type='text'
                      name='user_company'
                      placeholder='Entreprise / Collect.'
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
                    <input
                      type='tel'
                      name='user_phone'
                      placeholder='Téléphone'
                    />
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
                <div>
                  <div className={styles.button_container}>
                    <input
                      className={styles.button}
                      type='submit'
                      value='Envoyer'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section
    //   className={styles.contact}
    //   id='contact'
    //   // data-aos='fade-right'
    //   // data-aos-duration='1000'
    // >
    //   {/* <h2 className={styles.projects_h3}>{title}</h2>
    //   <p>{subtitle}</p> */}
    //   <div className={styles.services_content}>
    //     <div className={styles.services_mxw800}>
    //       <h3 className={styles.services_h3}>
    //         Contactez-<span>nous</span> <hr />
    //       </h3>
    //     </div>
    //     <p className={styles.services_p}>
    //       Une question ? Un conseil ? Contactez-nous pour plus
    //       d&rsquo;informations.
    //     </p>
    //   </div>

    //   <div className={styles.contactForm}>
    //     <form ref={form} onSubmit={sendEmail}>
    //       <div className={styles.row100}>
    //         <div className={styles.inputBx50}>
    //           <input
    //             type='text'
    //             name='user_company'
    //             placeholder='Entreprise / Collect.'
    //           />
    //         </div>
    //         <div className={styles.inputBx50}>
    //           <input type='text' name='user_name' placeholder='Nom' />
    //         </div>
    //       </div>
    //       <div className={styles.row100}>
    //         <div className={styles.inputBx100}>
    //           <input
    //             type='mail'
    //             name='user_email'
    //             placeholder='Email'
    //             required
    //           />
    //         </div>
    //       </div>
    //       <div className={styles.row100}>
    //         <div className={styles.inputBx100}>
    //           <input type='tel' name='user_phone' placeholder='Téléphone' />
    //         </div>
    //       </div>
    //       <div className={styles.row100}>
    //         <div className={styles.inputBx100}>
    //           <textarea
    //             placeholder='Message'
    //             name='message'
    //             required
    //           ></textarea>
    //         </div>
    //       </div>
    //       <div>
    //         <div className={styles.button_container}>
    //           <input className={styles.button} type='submit' value='Envoyer' />
    //         </div>
    //       </div>
    //     </form>
    //     <div>
    //       <Image
    //         src={contact}
    //         width={340}
    //         height={340}
    //         className={styles.img}
    //         alt='pe'
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
