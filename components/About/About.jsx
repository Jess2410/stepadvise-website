import React, { useEffect } from "react";
import styles from "./About.module.css";
import Image from "next/image";

// importing aos
// import AOS from "aos";
// import "aos/dist/aos.css";

//import aboutData
import { aboutData } from "../../data";

export default function About() {
  const { title, description1, description2 } = aboutData;

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <section
      className={styles.about}
      id='about'
      // data-aos='fade-left'
      // data-aos-duration='1000'
    >
      <div className={styles.contentBx}>
        {/* <h2 className={styles.about_h3}>À propos</h2> */}
        <div className={styles.wrapper}>
          <div className={styles.imgBx}>
            <Image
              src={"/assets/cédric.jpg"}
              width={300}
              height={400}
              className={styles.img}
              // layout='responsive'
              alt='Cédric Nédéléc'
            />
          </div>{" "}
          <p className={styles.text}>
            <span
              style={{
                textAlign: "center",
                fontFamily: '"Montserrat", sans-serif',
                letterSpacing: "0.5px",
                fontSize: "1.25rem",
                fontWeight: 500,
              }}
            >
              Cédric NÉDÉLEC
            </span>
            <br />
            Fort de mon activité professionnelle de plus de 20 ans dans la
            communication extérieure, j’ai créé StepAdvise spécialisée dans le
            conseil à la gestion du mobilier urbain, le respect de la
            réglementation locale de la publicité, la gestion de la TLPE et
            l’audit publicitaire. En effet, mon expérience auprès de nombreuses
            collectivités territoriales (Ile de France, Grand-Ouest et Sud de la
            France) associée à mon expertise sur les sujets des appels d’offres
            de mobiliers urbains, des RLPi ou de la TLPE seront des atouts
            indéniables mis à votre service pour répondre à vos attentes.
            <br />
            La compétence de StepAdvise sur le milieu de l’Outdoor et de ses
            acteurs sera un avantage dans votre volonté de développer votre
            notoriété via ce canal publicitaire. StepAdvise s’appuie sur un
            réfèrent juridique spécialisé dans le droit des contrats publics et
            dispose de solutions digitales adaptées à la gestion des
            collectivités. C’est pourquoi, actif sur tout le territoire,
            StepAdvise vous propose son savoir faire afin de faciliter votre
            processus décisionnel.
          </p>
        </div>
      </div>
    </section>
  );
}

// <section className={styles.about_section} id='about'>
//   <div className={styles.about_box}></div>
//   <div className={styles.about_description}>
//     <div className={styles.about_box}>
//       <div className={styles.about_iconBx}>
//         {/* <Image src='/assets/cédric.jpg' width={270} height={295} /> */}
//         <img src='/assets/cédric.jpg' alt='Cédric Nédélec' />
//       </div>
//     </div>

//     <p className={styles.about_p}>
//       Fort de mon activité professionnelle de plus de 20 ans dans la
//       communication extérieure, j’ai créé StepAdvise spécialisée dans le
//       conseil à la gestion du mobilier urbain, le respect de la
//       réglementation locale de la publicité, la gestion de la TLPE et
//       l’audit publicitaire. En effet, mon expérience auprès de nombreuses
//       collectivités territoriales (Ile de France, Grand-Ouest et Sud de la
//       France) associée à mon expertise sur les sujets des appels d’offres de
//       mobilier urbains, des RLPi ou de la TLPE seront des atouts indéniables
//       mis à votre service pour répondre à vos attentes.
//     </p>
//     <p className={styles.about_p}>
//       La compétence de StepAdvise sur le milieu de l’Outdoor et de ses
//       acteurs sera un avantage dans votre volonté de développer votre
//       notoriété via ce canal publicitaire. StepAdvise s’appuie sur un
//       réfèrent juridique spécialisé dans le droit des contrats publics et
//       dispose de solutions digitales adaptées à la gestion des
//       collectivités. C’est pourquoi, actif sur tout le territoire,
//       StepAdvise vous propose son savoir faire afin de faciliter votre
//       processus décisionnel.
//     </p>
//   </div>
//   {/* </div> */}
// </section>
