import { Header } from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import Head from "next/head";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => (
  <>
    <Head>
      <title>VeikkaP</title>
    </Head>

    <Header />
    <Navbar />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
);
