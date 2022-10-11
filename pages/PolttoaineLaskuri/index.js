import { Button, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/PolttoaineLaskuri.module.css";

const Polttoainelaskuri = () => {
  const calculateTotal = (
    kilometrit,
    keskikulutus,
    litrahinta,
    maksajat
  ) => {
    const calculate = (kilometrit, keskikulutus, litrahinta, maksajat) => {
    return Math.round(
      calculate(
        +startInvestment,
        +monthlyInvestment,
        +years,
        1 + interest / 100
      )
    );
  };
  const [kilometrit, setKilometrit] = useState();
  const [keskikulutus, setKeskikulutus] = useState();
  const [litrahinta, setLitrahinta] = useState();
  const [maksajat, setMaksajat] = useState();
  const [answer, setAnswer] = useState("");

  const onClick = () => {
    const result = calculateTotal(
      kilometrit,
      keskikulutus,
      litrahinta,
      maksajat
    );
    setAnswer(result);
  };

  return (
    <Layout>
      <Heading>Polttoainelaskuri</Heading>
      <br />
      <div className={styles.laskuri}>
        <div className={styles.laskuriRivi}>
          <div className={styles.label}>
            <label htmlFor="Kilometrit">Kilometrit</label>
            <Input
              type="text"
              id="Kilometrit"
              value={Kilometrit}
              onChange={(e) => setKilometrit(e.target.value)}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="Keskikulutus">Keskikulutus</label>
            <Input
              type="text"
              id="Keskikulutus"
              value={Keskikulutus}
              onChange={(e) => setKeskikulutus(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.laskuriRivi}>
          <div className={styles.label}>
            <label htmlFor="Litrahinta">litrahinta</label>
            <Input
              type="text"
              id="Litrahinta"
              value={Litrahinta}
              onChange={(e) => setLitrahinta(e.target.value)}
            />
          </div>

          <div className={styles.label}>
            <label htmlFor="Maksajat">
              Maksajat 
            </label>
            <Input
              type="text"
              id="Maksajat"
              value={Maksajat}
              onChange={(e) => setMaksajat(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={() => onClick()}>Laske</Button>
      </div>
      <br />
      <Heading size={"md"}>
        {answer
          ? "Matkan polttoainekulut euroina: " + answer + " €"
          : ""}
      </Heading>
    </Layout>
  );
};

export default Polttoainelaskuri;
