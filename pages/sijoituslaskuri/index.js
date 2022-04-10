import { Button, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/Sijoituslaskuri.module.css";

const Sijoituslaskuri = () => {
  const calculateTotal = (
    startInvestment,
    monthlyInvestment,
    years,
    interest
  ) => {
    const calculate = (startInvestment, montlyInvestment, years, interest) => {
      if (years < 1) {
        return startInvestment;
      }
      if (years === 1) {
        return (startInvestment + montlyInvestment * 12) * interest;
      }

      return (
        (calculate(startInvestment, montlyInvestment, years - 1, interest) +
          montlyInvestment * 12) *
        interest
      );
    };

    return Math.round(
      calculate(
        +startInvestment,
        +monthlyInvestment,
        +years,
        1 + interest / 100
      )
    );
  };
  const [startInvestment, setStartInvestment] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [years, setYears] = useState(0);
  const [interest, setInterest] = useState(0);
  const [answer, setAnswer] = useState("");

  const onClick = () => {
    const result = calculateTotal(
      startInvestment,
      monthlyInvestment,
      years,
      interest
    );
    setAnswer(result);
  };

  return (
    <Layout>
      <div className={styles.laskuri}>
        <div className={styles.laskuriRivi}>
          <div className={styles.label}>
            <label htmlFor="Alkupääoma">Alkupääoma</label>
            <Input
              type="text"
              id="Alkupääoma"
              value={startInvestment}
              onChange={(e) => setStartInvestment(e.target.value)}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="Kuukausisäästösumma">Kuukausisäästösumma</label>
            <Input
              type="text"
              id="Kuukausisäästösumma"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.laskuriRivi}>
          <div className={styles.label}>
            <label htmlFor="Sijoitusaika">Sijoitusaika (Vuosina)</label>
            <Input
              type="text"
              id="Sijoitusaika"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>

          <div className={styles.label}>
            <label htmlFor="Vuotuinen tuotto-odotus">
              Vuotuinen tuotto-odotus
            </label>
            <Input
              type="text"
              id="Vuotuinen tuotto-odotus"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={() => onClick()}>Laske</Button>
      </div>
      <br />
      <Heading size={"md"}>
        {answer
          ? "Sijoituksen arvo sijoitusajan päättyessä: " + answer + " €"
          : ""}
      </Heading>
    </Layout>
  );
};

export default Sijoituslaskuri;
