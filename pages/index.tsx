import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/layout";
import { ProductList } from "../components/productList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
      </Head>
      <Layout>
        <ProductList />
      </Layout>
    </>
  );
}
