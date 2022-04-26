import { Heading } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
// import { ChakraProvider } from "@chakra-ui/react";
// import { ImageSlide } from "react-chakra-slide-show";
// import React, { useMemo } from "react";

const Nft = () => {
  // const images = useMemo(() => ["Abstract.jpg", "CryptoEagle.jpg"], []);

  // const captions = useMemo(
  //   () => ["caption for Abstract.jpg", "caption for CryptoEagle.jpg"],
  //   []
  // );

  return (
    <Layout>
      <Heading>NFT</Heading>
      {/* <ChakraProvider>
        <ImageSlide images={images} captions={captions} />
      </ChakraProvider> */}
    </Layout>
  );
};

export default Nft;
