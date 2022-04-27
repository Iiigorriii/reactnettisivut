import { Heading, Img } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Nft.module.css";

const Nft = () => {
  return (
    <Layout>
      <Heading>NFT</Heading>
      <div className="gallery">
        <Img
          src="/nftimages/abstract.jpg"
          alt="Abstract"
          width="600"
          height="400"
        />
        <div className="desc"></div>
      </div>
      <div className="gallery">
        <Img
          src="/nftimages/cryptoEagle.jpg"
          alt="CryptoEagle168"
          width="600"
          height="400"
        />
        <div className="desc"></div>
      </div>
    </Layout>
  );
};

export default Nft;
