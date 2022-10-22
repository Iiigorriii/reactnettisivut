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


    //Matkan polttoainekulut euroina yhdeltän
    const calculate = (kilometrit, keskikulutus, litrahinta, maksajat) => {
      return Number(kilometrit * (keskikulutus / 100) * litrahinta / maksajat).toFixed(2);
    };

  const onClick = () => {
    const result = calculate(
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
      <br/>
      <text>Laske paljonko ajomatka maksaa euroina. Syötä polttoainelaskuriin matka pituus kilometreinä, keskikulutus litroina, polttoaineen litrahinta ja maksajien lukumäärä. </text>
      <br />
      <div className={styles.laskuri}>
        <div className={styles.laskuriRivi}>
          <div className={styles.label}>
            <label htmlFor="Kilometrit">
              <p className={styles.style1}>Matkan pituus kilometreinä</p>
            </label>
            <Input
              type="text"
              id="Kilometrit"
              value={kilometrit}
              onChange={(e) => setKilometrit(e.target.value)}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="Keskikulutus">
            <p className={styles.style1}>Keskikulutus litraa / 100km</p>
              </label>
            <Input
              type="text"
              id="Keskikulutus"f
              value={keskikulutus}
              onChange={(e) => setKeskikulutus(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.laskuriRivi}>
          <div className={styles.label}>
            <label htmlFor="Litrahinta">
            <p className={styles.style1}>Polttoaineen hinta euroa / litra</p>
               </label>
            <Input
              type="text"
              id="Litrahinta"
              value={litrahinta}
              onChange={(e) => setLitrahinta(e.target.value)}
            />
          </div>

          <div className={styles.label}>
            <label htmlFor="Maksajat">
            <p className={styles.style1}>Maksajien lukumäärä</p> 
               
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
          ? "Matkan polttoainekulut yhdeltä: " + answer + " €"
          : ""}
      </Heading>
      {/* <Heading size={"md"}>
        {calculateKok
          ? "Matkan polttoainekulut euroina kokonaisuudessaan: " + calculateKok + " €"
          : ""}
      </Heading>
      <Heading size={"md"}>
        {calculateTot
          ? "Matkan polttoainekulut euroina yhdeltä: " + calculateTot + " €"
          : ""}
      </Heading> */}
    </Layout>
  );
};

export default Polttoainelaskuri;