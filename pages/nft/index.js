import { Heading } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Nft.module.css";
import { Tooltip } from "@chakra-ui/react";

const images = [
  {
    url: "/nftimages/abstract.jpg",
    text: "Abstract",
  },
  {
    url: "/nftimages/cryptoEagle.jpg",
    text: "CryptoEagle168",
  },
  {
    url: "/nftimages/treeApples.jpg",
    text: "Three apples. Edition 05",
  },
];

const videos = [
  {
    url: "https://public.nftstatic.com/static/nft/res/08c761d6c95a4e2bb32d18bed4e1d1b1.mp4",
    text: "Satoshi Duck",
  },
  {
    url: "https://public.nftstatic.com/static/nft/res/b5aca75f909b46c3b45053ba4ed5a9ce.mp4",
    text: "City Duck",
  },
  {
    url: "https://public.nftstatic.com/static/nft/res/2892eee0726842b6af17307d7d5b5f7b.mp4",
    text: "Grass Duck",
  },
  {
    url: "https://openseauserdata.com/files/3462a63a03d3cc8ac0f9adc63436c439.mp4",
    text: "Kleoverse Genesis #39",
  },
];

const Nft = ({ video, src, alt }) => (
  <div>
    <Tooltip label={alt} closeDelay={800} placement="top">
      {video ? (
        <video controls autoPlay src={src} alt={alt} className={styles.nft} />
      ) : (
        <img src={src} alt={alt} className={styles.nft} />
      )}
    </Tooltip>
  </div>
);

const NftPage = () => {
  return (
    <Layout>
      <Heading>NFT COLLECTION</Heading>

      <div className={styles.gallery}>
        {/* 
        {images.map((url, text) => (
          <Nft src={url} alt={text} />
        ))}
      </div>
      <div className={styles.gallery}>
        {videos.map((url, text) => (
          <Nft src={url} alt={text} />
        ))} */}

        <img src="/nftimages/abstract.jpg" alt="Abstract" />
        <img src="/nftimages/cryptoEagle.jpg" alt="CryptoEagle168" />
        <img src="/nftimages/treeApples.jpg" alt="Three apples. Edition 05" />

        <video
          src="https://public.nftstatic.com/static/nft/res/08c761d6c95a4e2bb32d18bed4e1d1b1.mp4"
          alt="Satoshi Duck"
          controls
          autoPlay
        />
        <video
          src="https://public.nftstatic.com/static/nft/res/b5aca75f909b46c3b45053ba4ed5a9ce.mp4"
          alt="City Duck"
          controls
          autoPlay
        />
        <video
          src="https://public.nftstatic.com/static/nft/res/2892eee0726842b6af17307d7d5b5f7b.mp4"
          alt="Grass Duck"
          controls
          autoPlay
        />
        <video
          src="https://openseauserdata.com/files/3462a63a03d3cc8ac0f9adc63436c439.mp4"
          alt="Kleoverse Genesis #39"
          controls
          autoPlay
        />
      </div>
    </Layout>
  );
};

export default NftPage;
