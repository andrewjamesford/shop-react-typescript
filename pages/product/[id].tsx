import Head from "next/head";
import Image from "next/image";
import styles from "../styles/product.module.css";
import { Layout } from "../../components/layout";
import { ProductDetail } from "../../components/productDetail";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product page" />
      </Head>
      <Layout>
        <ProductDetail id={id} />
      </Layout>
    </>
  );
}
