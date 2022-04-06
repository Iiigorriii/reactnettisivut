import { Header } from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import Head from "next/head";

export const Layout = ({ children }) => (
  <>
    <Head>
      <title>VeikkaP</title>
    </Head>

    <Header />
    <Navbar />
    <main>{children}</main>
  </>
);
