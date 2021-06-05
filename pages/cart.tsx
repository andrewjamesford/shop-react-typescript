import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Checkout.module.css";
import { Layout } from "../components/layout";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Your Shopping cart" />
      </Head>
      <Layout></Layout>
    </>
  );
}
