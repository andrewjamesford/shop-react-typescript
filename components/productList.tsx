import React, { useState } from "react";
import useSWR from "swr";
import styles from "../styles/productList.module.css";
import { Loader } from "./loader";
import { ProductTile } from "./productTile";

export const ProductList = () => {
  const { data, error } = useSWR("/api/products");
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <div className={styles.list}>
      {data?.map((product: any) => {
        const { name = "", id, description = "", prices, images } = product;
        const image = images[0] ? images[0] : "/cap.jpg";
        const price = prices ? prices[0].unit_amount : 0;
        return (
          <ProductTile
            key={id}
            name={name}
            description={description}
            price={price}
            image={image}
            id={id}
          />
        );
      })}
    </div>
  );
};
