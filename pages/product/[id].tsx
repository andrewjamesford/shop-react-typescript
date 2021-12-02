import React from "react";
import Head from "next/head";
import { Layout } from "../../components/layout";
import { ProductDetail } from "../../components/productDetail";
import { useRouter } from "next/router";
import { Loader } from "../../components/loader";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { id = "" } = router.query;
  const { data, error } = useSWR(`/api/product/${id}`);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  const { name, description = "", prices, images } = data;
  const image = images[0] ? images[0] : "/cap.jpg";
  const price = prices ? prices[0].unit_amount : 0;

  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product page" />
      </Head>
      <Layout>
        <ProductDetail
          name={name}
          description={description}
          image={image}
          price={price}
        />
      </Layout>
    </>
  );
}
