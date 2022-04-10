import Link from "next/link";
import { AiOutlineAreaChart, AiFillHome } from "react-icons/ai";
import { CgGym } from "react-icons/cg";

import styles from "./Navbar.module.css";

export const Navbar = () => (
  <nav className={styles.navbar}>
    <Link href="/" passHref>
      <a className={styles.linkki}>
        <AiFillHome /> Koti
      </a>
    </Link>
    <Link href="/sijoituslaskuri">
      <a className={styles.linkki}>
        <AiOutlineAreaChart /> Sijoituslaskuri
      </a>
    </Link>
    <Link href="/porssiaukioloajat">
      <a className={styles.linkki}>
        <AiOutlineAreaChart /> Pörssi aukioloajat
      </a>
    </Link>
    <Link href="/onerepmaxcalc">
      <a className={styles.linkki}>
        <CgGym /> One Rep Max Calculator
      </a>
    </Link>
  </nav>
);
