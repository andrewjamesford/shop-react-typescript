import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
      </Head>
      <Layout>
        <div className={styles.cards}></div>
      </Layout>
    </>
  );
}
