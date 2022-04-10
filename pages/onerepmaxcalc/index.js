import { useState } from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/OneRepMax.module.css";

const oneRepMax = () => {
  const [Lift, setLift] = useState("0");
  const [Repetitions, setRepetitions] = useState("0");
  const [answer, setAnswer] = useState("");

  const calculate = () => {
    return Number(Lift / (1.0278 - 0.0278 * Repetitions)).toFixed(1);
  };

  const onClick = () => {
    const result = calculate();
    setAnswer(result);
  };

  return (
    <Layout>
      <div className={styles.laskuri}>
        <div className={styles.label}>
          <label htmlFor="Lift">Lift</label>
          <input
            type="number"
            id="Lift"
            value={Lift}
            onChange={(e) => setLift(e.target.value)}
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="Repetitions">Repetitions</label>
          <input
            type="number"
            id="Repetitions"
            value={Repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => onClick()}>Laske</button>
        </div>
        <h2>One rep max: {answer}</h2>
      </div>
    </Layout>
  );
};

export default oneRepMax;
