import style from "../styles/Home.module.scss";
import Heading from "../components/Heading";
import Head from "next/dist/shared/lib/head";

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Hello Julia" />
    </div>
  );
};

export default Home;
