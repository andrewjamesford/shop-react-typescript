import React, { useState } from "react";
import { fetchProducts, useProducts } from "../hooks/useProducts";
import styles from "../styles/productList.module.css";
import { Loader } from "./loader";
import { ProductTile } from "./productTile";

export const ProductList = () => {
  const [productCount, setProductCount] = useState(10);
  const { data = null, isLoading = false, isFetching = false } = useProducts();

  if (isLoading || isFetching) return <Loader />;

  return (
    <>
      <div className={styles.list}>
        {data?.map((product: any) => {
          const { name, id, description = "", variant, price, image } = product;
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
    </>
  );
};
