import { Heading } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";

const Ylioppilas = () => (
  <Layout>
    <Heading>Ylioppilas vm2022</Heading>
    <br />
    <img src="/ylioppilasimages/yolakkitesti.jpg" alt="ylioppilaslakkitesti" />
    <br />
    <Heading>Tulokset</Heading>
    <br />
    <h1>Äidinkieli M</h1>
    <h1>Pitkä matematiikka C</h1>
    <h1>Fysiikka C</h1>
    <h1>Kemia C</h1>
    <h1>Englanti b</h1>
  </Layout>
);

export default Ylioppilas;
