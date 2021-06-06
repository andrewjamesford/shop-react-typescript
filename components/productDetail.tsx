import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";

interface Props {
  id: string | string[] | undefined;
  name: string;
  description: string;
  image: string;
  price: string;
}

export const ProductDetail = ({
  id,
  name,
  description,
  image,
  price,
}: Props) => {
  const imageLength = 1000;
  return (
    <div className={styles.detail}>
      {image && (
        <Image
          src={image}
          alt={`Image of ${name} - ${description}`}
          width={imageLength}
          height={imageLength}
        />
      )}
      <div className={styles.details}>
        <h1 className={styles.name}>{name}</h1>
        <h5 className={styles.price}>${price}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
