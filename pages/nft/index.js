import { Img } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import Abstract from "../../misc/nftimages/Abstract.jpg";
import styles from "../../styles/Nft.module.css";

const Nft = () => {
  return (
    <Layout>
      <h1>testi</h1>
      <div class="gallery">
        <a target="_blank" href="Abstracts.jpg">
          <Img src="Abstracts.jpg" alt="Abstract" width="600" height="400" />
        </a>
        <div class="desc"></div>
      </div>
    </Layout>
  );
};

export default Nft;
