import Layout from "../components/Layout";
import "../styles/globals.scss";
import Image from "next/dist/client/image";
import youtubeImg from "../public/youtube.png";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image src={youtubeImg} alt="preview" placeholder="blur" />
  </Layout>
);

export default MyApp;
