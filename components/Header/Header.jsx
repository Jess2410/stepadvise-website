import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

// import navData
import { navData } from "../../data";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";

export default function Header() {
  //destructure navData
  const { items } = navData;

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [checkWidth, setcheckWidth] = useState(null);
  const [toggleNav, setToggleNav] = useState(false);
  const [showNavbarResponsive, setShowNavbarResponsive] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

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

  const showNavbar = () => {
    setToggleNav(!toggleNav);
    setShowNavbarResponsive(!showNavbarResponsive);
  };

  return (
    <>
      <header id='header' className={styles.header}>
        <a href='#'>
          <Image
            className={styles.header_logo}
            width={200}
            height={40}
            src='/assets/logo.png'
            alt='logo'
          />
        </a>
        <nav>
          <ul
            className={styles.header_navbar}
            data-aos='fade-right'
            data-aos-duration='500'
          >
            {checkWidth > 900 ? (
              items.map((item, i) => {
                return (
                  <li id='li' key={i} className={styles.header_navbar_li}>
                    <Link
                      href={item.href}
                      className={styles.header_navbar_li_a}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })
            ) : !toggleNav ? (
              <>
                <div
                  className={
                    isNavExpanded
                      ? "navigation-menu expanded"
                      : "navigation-menu"
                  }
                >
                  <button onClick={showNavbar} className={"nav-btn"}>
                    <Image
                      height={30}
                      width={30}
                      src='/assets/menu.png'
                      alt='icon'
                    />
                  </button>
                </div>
              </>
            ) : (
              <button onClick={showNavbar} className={"nav-btn nav-close-btn"}>
                <Image
                  height={30}
                  width={30}
                  src='/assets/close.png'
                  alt='icon'
                />
              </button>
            )}
          </ul>
        </nav>
      </header>
      {showNavbarResponsive && <NavbarResponsive />}
    </>
  );
}
