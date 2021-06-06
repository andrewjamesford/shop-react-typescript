import Head from "next/head";
import Image from "next/image";
import styles from "../styles/product.module.css";
import { Layout } from "../../components/layout";
import { ProductDetail } from "../../components/productDetail";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { fetchProduct } from "../../hooks/useProduct";
import { dehydrate } from "react-query/hydration";
import { fetchProducts, useProducts } from "../../hooks/useProducts";

export default function Product() {
  const router = useRouter();
  const { id = "" } = router.query;
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

// export async function getStaticPaths() {
//const queryClient = new QueryClient();
//await queryClient.prefetchQuery(["products"], () => fetchProducts());
// Call an external API endpoint to get posts
// const res = await fetch('https://.../posts')
// const posts = await res.json()
// const { data = null, isLoading = false, isFetching = false } = useProducts();
// // Get the paths we want to pre-render based on posts
// const paths = data.map((product: { id: any }) => ({
//   params: { id: product.id },
// }));
// // We'll pre-render only these paths at build time.
// // { fallback: false } means other routes should 404.
// return { paths, fallback: false };
// }

// export async function getStaticProps() {
// const queryClient = new QueryClient();
// const router = useRouter();
// const { id = "" } = router.query;
// await queryClient.prefetchQuery(["products"], () => fetchProduct(id));
// return {
//   props: {
//     dehydratedState: dehydrate(queryClient),
//   },
// };
// }
