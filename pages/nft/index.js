import { Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Nft.module.css";
import { Tooltip } from "@chakra-ui/react";

const Image = ({ children }) => <div>{children}</div>;

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
          <Image>
            <img src="/nftimages/abstract.jpg" alt="Abstract" />
          </Image>
        </Tooltip>

        <Tooltip
          label="CryptoEagle168"
          aria-label="A tooltip"
          closeDelay={500}
          placement="top"
        >
          <Image>
            <img src="/nftimages/cryptoEagle.jpg" alt="CryptoEagle168" />
          </Image>
        </Tooltip>
      </div>
    </Layout>
  );
};

export default Nft;
