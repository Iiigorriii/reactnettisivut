import { Heading } from "@chakra-ui/react";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.mainheader}>
    <Heading style={{ padding: "1rem" }}>VeikkaP</Heading>
  </header>
);
