import { Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const Home = () => (
  <Layout>
    <a
      href="https://github.com/Iiigorriii/reactnettisivut"
      target="_blank"
      rel="noreferrer"
    >
      GitHub link 
    </a>
    <h1>This site has been visited <span id="visits"></span> times.</h1>
  </Layout>
);

export default Home;
