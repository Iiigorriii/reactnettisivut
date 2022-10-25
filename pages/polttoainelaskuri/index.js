import { Button, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/PolttoaineLaskuri.module.css";

const Polttoainelaskuri = () => {
  const [kilometrit, setKilometrit] = useState("");
  const [keskikulutus, setKeskikulutus] = useState("");
  const [litrahinta, setLitrahinta] = useState("");
  const [maksajat, setMaksajat] = useState("");
  const [answerPerPerson, setAnswerPerPerson] = useState("");
  const [answerTotal, setAnswerTotal] = useState("");


  // //Matkan polttoainekulut euroina kokonaisuudessaan
  const calculateTotal = (kilometrit, keskikulutus, litrahintat) => {
    return Number(kilometrit * (keskikulutus / 100) * litrahinta).toFixed(2);
  };

    //Matkan polttoainekulut euroina yhdeltän
    const calculatePerPerson = (kilometrit, keskikulutus, litrahinta, maksajat) => {
      return Number(kilometrit * (keskikulutus / 100) * litrahinta / maksajat).toFixed(2);
    };

  const onClick = () => {
    const resultTotal = calculateTotal(
      kilometrit,
      keskikulutus,
      litrahinta
  );

    if (maksajat > 1) {
      const resultPerPerson = calculatePerPerson(
        kilometrit,
        keskikulutus,
        litrahinta,
        maksajat
      );
      setAnswerPerPerson(resultPerPerson);
    } else {
    }
    
    // setAnswerTotal(resultTotal);
    setAnswerTotal(resultTotal);
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
        {answerPerPerson 
          ? "Matkan polttoainekulut henkilöltä: " + answerPerPerson + " €"
          : ""}
      </Heading>
      <Heading size={"md"}>
        {answerTotal 
          ? "Matkan polttoainekulut euroina kokonaisuudessaan: " + answerTotal + " €"
          : ""}
      </Heading>
      
    </Layout>
  );
};

export default Polttoainelaskuri;