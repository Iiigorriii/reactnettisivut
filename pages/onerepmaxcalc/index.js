import {
  Button,
  Heading,
  Input,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../../components/Layout";

import styles from "../../styles/OneRepMax.module.css";

const OneRepMax = () => {
  const [Lift, setLift] = useState("");
  const [Repetitions, setRepetitions] = useState("");
  const [answer, setAnswer] = useState("");
  const [valmisLista, setValmisLista] = useState([]);

  const calculate = () => {
    return Number(Lift / (1.0278 - 0.0278 * Repetitions)).toFixed(1);
  };

  const onClick = () => {
    const result = calculate();
    setAnswer(result);

    let percent = 95;
    let reps = 0;

    const valmis = [
      {
        percent: 100,
        liftWeight: Number(result),
        reps: 1,
      },
    ];

    while (percent > 65) {
      const kerroin = Number("0." + percent);
      const tempLift = Math.round(kerroin * result);

      reps = reps + 2;

      valmis.push({
        kerroin,
        percent: percent,
        liftWeight: tempLift,
        reps: reps,
      });

      percent = percent - 5;
    }

    setValmisLista(valmis);
  };

  return (
    <Layout>
      <Heading>One rep max calculator</Heading>
      <br />
      <Text fontSize="md">
        Calculate your one-rep max (1RM) for any lift. Your one-rep max is the
        max weight you can lift for a single repetition for a given exercise.
      </Text>
      <div className={styles.laskuri}>
        <div className={styles.label}>
          <label htmlFor="Lift">
            <p className={styles.style1}>Lift (Kg):</p>
          </label>
          <Input
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
          <Input
            type="number"
            id="Repetitions"
            value={Repetitions}
            onChange={(e) => setRepetitions(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={() => onClick()}>Count</Button>
        </div>
      </div>
      <br />
      <Heading size={"md"}>
        {answer ? "One rep max: " + answer + " Kg" : ""}
      </Heading>
      <br />
      <br />

      {!!valmisLista.length && (
        <TableContainer style={{ maxWidth: "400px" }}>
          <Table>
            <Thead>
              <Tr
                style={{
                  backgroundColor: "rgb(225, 225, 225)",
                }}
              >
                <Th>% of 1RM</Th>
                <Th>Weight</Th>
                <Th>Reps of 1RM</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!!valmisLista.length &&
                valmisLista.map((item, i) => (
                  <Tr
                    key={i}
                    style={{
                      backgroundColor:
                        i % 2 == 0 ? "rgb(245, 245, 245)" : "white",
                    }}
                  >
                    <Td>{item.percent + " %"}</Td>
                    <Td>{item.liftWeight + " kg"}</Td>
                    <Td>{item.reps}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <Text fontSize="2xl">Formula:</Text>
      <Text fontSize="1xl">weight / ( 1.0278 – 0.0278 × reps )</Text>
    </Layout>
  );
};

export default OneRepMax;
