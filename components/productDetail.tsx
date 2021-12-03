import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";
import formatCurrency from "../utils/formatCurrency";
interface Props {
  name: string;
  description: string;
  image: string;
  price: number;
}

export const ProductDetail = ({ name, description, image, price }: Props) => {
  const imageLength = 1000;
  return (
    <div className={styles.detail}>
      {!image && <div>Loading</div>}
      {image && (
        <Image
          src={image}
          alt={`Image of ${name} - ${description}`}
          width={imageLength}
          height={imageLength}
          placeholder="blur"
          blurDataURL="/images/shoe.png"
        />
      )}
      <div className={styles.details}>
        <h1 className={styles.name}>{name}</h1>
        <h5 className={styles.price}>{formatCurrency(price)}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
