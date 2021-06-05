import React from "react";
import styles from "../styles/ProductTile.module.css";
import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  variant: string;
  price: number;
}

export const ProductTile = ({ name, description, variant, price }: Product) => {
  return (
    <div className={styles.card}>
      <Link href="/">
        <Image src="" alt="" width={200} height={200} />
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <p className={styles.variant}>{variant}</p>
        <p className={styles.price}>{price}</p>
      </Link>
    </div>
  );
};
