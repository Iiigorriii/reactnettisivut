import { Layout } from "../../components/Layout";
import React from "react";
import styles from "../../styles/HangMan.module.css";
import Figure from "../../components/Hangman/Figure";

const Hangman = () => {
  return (
    <Layout>
      <h1 className={styles.h1}>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <div className="gameContainer">
        <Figure />
      </div>
    </Layout>
  );
};

export default Hangman;
