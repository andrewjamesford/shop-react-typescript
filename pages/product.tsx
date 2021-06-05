import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Product.module.css";
import { Layout } from "../components/layout";

export default function Product() {
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product page" />
      </Head>
      <Layout></Layout>
    </>
  );
}
