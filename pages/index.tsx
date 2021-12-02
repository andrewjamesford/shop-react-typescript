import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/layout";
// import { QueryClient } from "react-query";
// import { dehydrate } from "react-query/hydration";
import { fetchProducts } from "../hooks/useProducts";
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

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["products"], () => fetchProducts());

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
