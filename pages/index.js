import { Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const Home = () => (
  <Layout>
    <Text fontSize={"2xl"}>Linkki nettisivujen GitHubiin:</Text>
    <a
      href="https://github.com/Iiigorriii/reactnettisivut"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </Layout>
);

export default Home;
