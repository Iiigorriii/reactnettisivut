import { Heading, Img } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Nft.module.css";
import { Tooltip } from "@chakra-ui/react";

const Nft = () => {
  return (
    <Layout>
      <Heading>NFT</Heading>
      <div className={styles.gallery}>
        <Tooltip
          label="Abstract"
          aria-label="A tooltip"
          closeDelay={500}
          placement="top"
        >
          <Img src="/nftimages/abstract.jpg" alt="Abstract" />
        </Tooltip>

        <Tooltip
          label="CryptoEagle168"
          aria-label="A tooltip"
          closeDelay={500}
          placement="top"
        >
          <Img src="/nftimages/cryptoEagle.jpg" alt="CryptoEagle168" />
        </Tooltip>
      </div>
    </Layout>
  );
};

export default Nft;
