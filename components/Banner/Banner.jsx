import React, { useEffect } from "react";
import styles from "./Banner.module.css";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

// import navData
import { bannerData } from "../../data";

export default function Banner() {
  const { title, span, subtitle } = bannerData;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.banner} id='home'>
      <div className={styles.banner_text}>
        <h2
          className={styles.banner_h2}
          data-aos='fade-right'
          data-aos-duration='3000'
        >
          {title} <br />
          <span className={styles.banner_h2_span}>{span}</span>
        </h2>
        <h3
          className={styles.banner_h3}
          data-aos='fade-left'
          data-aos-duration='3000'
        >
          {subtitle}
        </h3>
      </div>
    </section>
  );
}
