import React from "react";
import styles from "../styles/productTile.module.css";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  id: string;
}

export const ProductTile = ({
  name,
  description,
  price,
  image,
  id,
}: Product) => {
  const tileLength = 220;
  return (
    <div className={styles.card}>
      <Link href={`/product/${id}`}>
        <Image
          src={image}
          alt={`Image of ${name} - ${description}`}
          width={tileLength}
          height={tileLength}
          className={styles.image}
        />
      </Link>
      <div className={styles.details}>
        <Link href={`/product/${id}`}>
          <h4 className={styles.name}>{name}</h4>
        </Link>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};
