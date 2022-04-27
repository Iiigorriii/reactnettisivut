import { Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Nft.module.css";
import { Tooltip } from "@chakra-ui/react";

const Nft = ({ src, alt }) => (
  <div>
    <Tooltip label={alt} closeDelay={800} placement="top">
      <img src={src} alt={alt} />
    </Tooltip>
  </div>
);

const NftPage = () => {
  return (
    <Layout>
      <Heading>NFT</Heading>
      <div className={styles.gallery}>
        <Nft src="/nftimages/abstract.jpg" alt="Abstract" />
        <Nft src="/nftimages/cryptoEagle.jpg" alt="CryptoEagle168" />
      </div>
    </Layout>
  );
};

export default NftPage;
