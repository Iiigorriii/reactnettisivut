// import { Heading } from "@chakra-ui/react";
// import { Layout } from "../../components/Layout";
// import styles from "../../styles/Ylioppilas.module.css";

// const Ylioppilas = () => (
//   <Layout>
//     <Heading>Ylioppilas vm2022</Heading>
//     <br />
//     <img src="/ylioppilasimages/yolakkitesti.jpg" alt="ylioppilaslakkitesti" />
//     <img src="/ylioppilasimages/yokuva1.jpg" alt="ylioppilaslakkitesti" />
//     <img src="/ylioppilasimages/yokuva2.jpg" alt="ylioppilaslakkitesti" />
//   </Layout>
// );

// export default Ylioppilas;

import { Heading } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Ylioppilas.module.css";
import { Tooltip } from "@chakra-ui/react";

const images = [
  {
    url: "/ylioppilaskuvat/ylioppilas1.jpeg",
    text: "KITOS",
  },
  {
    url: "/ylioppilaskuvat/ylioppilas3.jpeg",
    text: "KITOS",
  },
  {
    url: "/ylioppilaskuvat/ylioppilas2.jpeg",
    text: "KITOS",
  },
];

const videos = [
  // {
  //   url: "https://public.nftstatic.com/static/nft/res/08c761d6c95a4e2bb32d18bed4e1d1b1.mp4",
  //   text: "Satoshi Duck",
  // },
];

const Ylioppilas = ({ video, src, alt }) => (
  <div>
    <Tooltip label={alt} closeDelay={800} placement="top">
      {video ? (
        <video
          // controls
          autoPlay
          loop
          muted
          src={src}
          alt={alt}
          className={styles.nft}
        />
      ) : (
        <img src={src} alt={alt} className={styles.nft} />
      )}
    </Tooltip>
  </div>
);
const YlioppilasPage = () => {
  return (
    <Layout>
      <Heading>Ylioppilas</Heading>
      <br />
      <div className={styles.gallery}>
        {images.map(({ url, text }, index) => (
          <Ylioppilas key={index} src={url} alt={text} />
        ))}

        {videos.map(({ url, text }, index) => (
          <Ylioppilas key={index} src={url} alt={text} video />
        ))}
      </div>
    </Layout>
  );
};
export default YlioppilasPage;
