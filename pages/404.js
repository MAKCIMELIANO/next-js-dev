import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import Heading from "../components/Heading";
import style from "../styles/404.module.scss";
import Head from "next/dist/shared/lib/head";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <Heading tag="h2" text="Что-то пошло не так" />
    </div>
  );
};

export default Error;
