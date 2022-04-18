import { Layout } from "../../components/Layout";
import React from "react";
import styles from "../../styles/HangMan.module.css";

const Hangman = () => {
  return (
    <Layout>
      <h1 className={styles.h1}>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </Layout>
  );
};

export default Hangman;
