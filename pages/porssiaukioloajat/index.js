import { Layout } from "../../components/Layout";
import { porssilista } from "../../misc/porssilista";

import styles from "../../styles/Porssiaukioloajat.module.css";

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
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Pörssi</th>
            <th>Auki</th>
            <th>Kiinni</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {valmiit.map((valmis, i) => (
            <tr key={i} className={styles.tr}>
              <td className={styles.td}>{valmis.name}</td>
              <td className={styles.td}>{valmis.auki}</td>
              <td className={styles.td}>{valmis.kiinni}</td>
              <td className={`${styles.td} ${valmis.isAuki ? styles.auki : styles.kiinni}`}>
                {valmis.isAuki ? "Auki" : "Kiinni"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Porssiaukioloajat;
