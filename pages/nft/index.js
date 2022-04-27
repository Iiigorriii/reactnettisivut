import { Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Nft.module.css";
import { Tooltip } from "@chakra-ui/react";

const Image = ({ src, alt }) => (
  <div>
    <Tooltip label={alt} closeDelay={500} placement="top">
      <img src={src} alt={alt} />
    </Tooltip>
  </div>
);

const Nft = () => {
  return (
    <Layout>
      <Heading>NFT</Heading>
      <div className={styles.gallery}>
        <Image src="/nftimages/abstract.jpg" alt="Abstract" />
        <Image src="/nftimages/cryptoEagle.jpg" alt="CryptoEagle168" />
      </div>
    </Layout>
  );
};

export default Nft;
