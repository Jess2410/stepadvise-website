import Link from "next/link";
import React, { useState } from "react";
import { navData } from "../../data";
import styles from "./NavbarResponsive.module.css";

export default function NavbarResponsive({ onClose }) {
  //destructure navData
  const { items } = navData;

  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.NavbarResponsive}>
      {items.map((item, i) => {
        return (
          <li
            id='li'
            key={i}
            className={styles.header_navbar_li}
            // onClick={() => setIsOpen(false)}
          >
            <Link
              onClick={onClose}
              href={item.href}
              className={styles.header_navbar_li_a}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
