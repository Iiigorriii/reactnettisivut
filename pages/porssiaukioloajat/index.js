import { Layout } from "../../components/Layout";
import { porssilista } from "../../misc/porssilista";
import {
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
} from "@chakra-ui/react";

const Porssiaukioloajat = () => {
  const valmiit = [];

  for (const day of porssilista) {
    const aukioloAlku = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      day.aukioloAlkuTunnit,
      day.aukioloAlkuMinuutit
    );
    const aukioloLoppu = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      day.aukioloLoppuTunnit,
      day.aukioloLoppuMinuutit
    );

    const now = new Date();

    const valmisDay = {
      name: day.name,
      isAuki: now >= aukioloAlku && now <= aukioloLoppu,
    };

    let auki = day.aukioloAlkuTunnit + ":";

    if (!day.aukioloAlkuMinuutit) {
      auki += "00";
    } else {
      auki += day.aukioloAlkuMinuutit;
    }

    let kiinni = day.aukioloLoppuTunnit + ":";

    if (!day.aukioloLoppuMinuutit) {
      kiinni += "00";
    } else {
      kiinni += day.aukioloLoppuMinuutit;
    }

    valmisDay.auki = auki;
    valmisDay.kiinni = kiinni;
    valmiit.push(valmisDay);
  }

  return (
    <Layout>
      <TableContainer style={{ maxWidth: "600px" }}>
        <Table>
          <Thead>
            <Tr
              style={{
                backgroundColor: "rgb(225, 225, 225)",
              }}
            >
              <Th>Markkina</Th>
              <Th>Auki</Th>
              <Th>Kiinni</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {valmiit.map((valmis, i) => (
              <Tr
                key={i}
                style={{
                  backgroundColor: i % 2 == 0 ? "rgb(245, 245, 245)" : "white",
                }}
              >
                <Td>{valmis.name}</Td>
                <Td>{valmis.auki}</Td>
                <Td>{valmis.kiinni}</Td>
                <Td>
                  {valmis.isAuki ? (
                    <Badge variant="subtle" colorScheme="green">
                      Open
                    </Badge>
                  ) : (
                    <Badge variant="subtle" colorScheme="red">
                      Closed
                    </Badge>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Porssiaukioloajat;
