import React, { useEffect } from "react";
import styles from "./Footer.module.css";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer
      className={styles.footer}
      data-aos='fade-bottom'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration='3000'
    >
      <p>
        <a className={styles.copyright} href='#'>
          Design & Developed by Jess.
        </a>
      </p>
    </footer>
  );
}
