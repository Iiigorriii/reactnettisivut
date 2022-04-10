import { useState } from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/OneRepMax.module.css";

const OneRepMax = () => {
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
      <p>
        Calculate your one-rep max (1RM) for any lift. Your one-rep max is the
        max weight you can lift for a single repetition for a given exercise.
      </p>
      <div className={styles.laskuri}>
        <div className={styles.label}>
          <label htmlFor="Lift">
            <p className={styles.style1}>Lift:</p>
          </label>
          <input
            type="number"
            id="Lift"
            value={Lift}
            onChange={(e) => setLift(e.target.value)}
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="Repetitions">
            <p className={styles.style1}>Repetitions:</p>
          </label>
          <input
            type="number"
            id="Repetitions"
            value={Repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => onClick()}>Count</button>
        </div>
        <h2>{answer ? "One rep max: " + answer : ""}</h2>
      </div>
    </Layout>
  );
};

export default OneRepMax;
