import { Button, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/PolttoaineLaskuri.module.css";

const Polttoainelaskuri = () => {
  const [kilometrit, setKilometrit] = useState("");
  const [keskikulutus, setKeskikulutus] = useState("");
  const [litrahinta, setLitrahinta] = useState("");
  const [maksajat, setMaksajat] = useState("");
  const [answer, setAnswer] = useState("");

  const [calculateKok, setCalculateKok] = useState();
  const [calculateTot, setcalculateTot] = useState();

  // //Matkan polttoainekulut euroina kokonaisuudessaan
  // const calculateKok = (kilometrit, keskikulutus, litrahinta, maksajat) => {
  //   return Number(kilometrit * (keskikulutus / 100) * litrahinta).toFixed(1);
  // };

  //   //Matkan polttoainekulut euroina yhdeltän
  //   const calculateYhd = (kilometrit, keskikulutus, litrahinta, maksajat) => {
  //     return Number(kilometrit * (keskikulutus / 100) * litrahinta / maksajat).toFixed(1);
  //   };

  // const onClick = () => {
  //   const result = calculate();
  //   setAnswer(result);
  // };

  function calculate() {
    //Matkan polttoainekulut euroina kokonaisuudessaan
    const calculateKok = kilometrit * (keskikulutus / 100) * litrahinta
  
    //Matkan polttoainekulut euroina yhdeltän
    const calculateYhd = kilometrit * (keskikulutus / 100) * litrahinta / maksajat
  };

    const onClick = () => {
    const result = calculate(
    calculateTot,
    calculateKok
    );
    setAnswer(result)
  };


  return (
    <Layout>
      <Heading>Polttoainelaskuri</Heading>
      <br />
      <div className={styles.laskuri}>
        <div className={styles.laskuriRivi}>
          <div className={styles.label}>
            <label htmlFor="Kilometrit">Ajettu matka kilometreinä</label>
            <Input
              type="text"
              id="Kilometrit"
              value={kilometrit}
              onChange={(e) => setKilometrit(e.target.value)}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="Keskikulutus">Keskikulutus litraa / 100km</label>
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
            <label htmlFor="Litrahinta">Polttoaineen hinta euroa / litra </label>
            <Input
              type="text"
              id="Litrahinta"
              value={litrahinta}
              onChange={(e) => setLitrahinta(e.target.value)}
            />
          </div>

          <div className={styles.label}>
            <label htmlFor="Maksajat">
              Maksajien lukumäärä 
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
        {calculateKok
          ? "Matkan polttoainekulut euroina kokonaisuudessaan: " + calculateKok + " €"
          : ""}
      </Heading>
      <Heading size={"md"}>
        {calculateTot
          ? "Matkan polttoainekulut euroina yhdeltä: " + calculateTot + " €"
          : ""}
      </Heading>
    </Layout>
  );
};

export default Polttoainelaskuri;
