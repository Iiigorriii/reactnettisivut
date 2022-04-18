import React from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/MasterMind.module.css";

const MasterMind = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.fullBoard}>
          <div className={styles.board}></div>
          <div className={styles.begs}></div>
        </div>
        <div className={styles.other}>
          <div className={styles.code}>
            <div className={styles.secretColor} id="secretColor1"></div>
            <div className={styles.secretColor} id="secretColor2"></div>
            <div className={styles.secretColor} id="secretColor3"></div>
            <div className={styles.secretColor} id="secretColor4"></div>
          </div>
          <div className="colorBoard">
            <div className={styles.color} id="blue"></div>
            <div className={styles.color} id="green"></div>
            <div className={styles.color} id="red"></div>
            <div className={styles.color} id="yellow"></div>
            <div className={styles.color} id="orange"></div>
          </div>
          <div className={styles.currentColor}></div>
          <div className={styles.submit}>Submit</div>
        </div>
      </div>
    </Layout>
  );
};

export default MasterMind;
