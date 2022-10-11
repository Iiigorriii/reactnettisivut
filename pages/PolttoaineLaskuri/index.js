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
      if (kilometrit < 1) {
        return Kilometrit;
      }
      if (kilometrit === 1) {
        return (kilometrit + (keskikulutus / 100) * litrahinta / maksajat);
      }

      return (
        (calculate((kilometrit + (keskikulutus / 100) * litrahinta / maksajat))  
      ));
    };
  
    return Math.round(
      calculate(
        +kilometrit,
        +keskikulutus,
        +litrahinta,
        +maksajat
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
              value={kilometrit}
              onChange={(e) => setKilometrit(e.target.value)}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="Keskikulutus">Keskikulutus</label>
            <Input
              type="text"
              id="Keskikulutus"
              value={keskikulutus}
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
              value={litrahinta}
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
              value={maksajat}
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
