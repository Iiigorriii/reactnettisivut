import React from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/MasterMind.module.css";

const MasterMind = () => {
  return (
    <Layout>
      <div class="content">
        <div class="fullBoard">
          <div class="board"></div>
          <div class="pegs"></div>
        </div>
        <div class="other">
          <div class="code">
            <div class="secretColor" id="secretColor1"></div>
            <div class="secretColor" id="secretColor2"></div>
            <div class="secretColor" id="secretColor3"></div>
            <div class="secretColor" id="secretColor4"></div>
          </div>
          <div class="colorBoard">
            <div class="color" id="blue"></div>
            <div class="color" id="green"></div>
            <div class="color" id="red"></div>
            <div class="color" id="yellow"></div>
            <div class="color" id="orange"></div>
          </div>
          <div class="currentColor"></div>
          <div class="submit">Submit</div>
        </div>
      </div>
    </Layout>
  );
};

export default MasterMind;
