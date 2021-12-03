import Head from "next/head";
import styles from "../styles/Checkout.module.css";
import { Layout } from "../components/layout";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout page" />
      </Head>
      <Layout></Layout>
    </>
  );
}
