import React from "react";
import styles from "../styles/productTile.module.css";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  variant: string;
  price: number;
  image: string;
}

export const ProductTile = ({
  name,
  description,
  variant,
  price,
  image,
}: Product) => {
  const tileLength = 220;
  return (
    <div className={styles.card}>
      <Link href="/">
        <Image src={image} alt="" width={tileLength} height={tileLength} />
      </Link>
      <Link href="/">
        <h4 className={styles.name}>{name}</h4>
      </Link>
      <p className={styles.description}>{description}</p>
      <p className={styles.variant}>{variant}</p>
      <p className={styles.price}>${price}</p>
    </div>
  );
};
