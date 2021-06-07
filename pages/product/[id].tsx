import Head from "next/head";
import styles from "../styles/product.module.css";
import { Layout } from "../../components/layout";
import { ProductDetail } from "../../components/productDetail";
import { useRouter } from "next/router";
import { fetchProduct, useProduct } from "../../hooks/useProduct";
import { fetchProducts } from "../../hooks/useProducts";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Loader } from "../../components/loader";

export default function Product() {
  const router = useRouter();
  const { id = "" } = router.query;
  const { data, isLoading, isFetching } = useProduct(id);

  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product page" />
      </Head>
      <Layout>
        {(isLoading || isFetching) && <Loader />}
        {data?.map((product: any) => {
          const { name, id, description = "", price, image } = product;
          return (
            <ProductDetail
              key={id}
              name={name}
              description={description}
              image={image}
              price={price}
            />
          );
        })}
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const products = await fetchProducts();

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product: { id: any }) => ({
    params: { id: product.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const id = context.params?.id;
  const product = await fetchProduct(id);
  // Pass post data to the page via props
  return { props: { product: product } };
};
