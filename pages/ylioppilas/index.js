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
    text: "Kiitos",
  },
  {
    url: "/ylioppilaskuvat/ylioppilas3.jpeg",
    text: "Kiitos",
  },
];

const videos = [
  {
    url: "/ylioppilaskuvat/gif1.gif",
    text: "Kiitos",
  },
  {
    url: "/ylioppilaskuvat/gif2.gif",
    text: "Kiitos",
  },
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
      <Heading>Ylioppilas 2022</Heading>
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
