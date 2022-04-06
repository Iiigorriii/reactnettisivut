import Link from "next/link";
import { AiOutlineAreaChart, AiFillHome } from "react-icons/ai";

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
  </nav>
);
