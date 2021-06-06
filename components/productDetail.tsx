import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";

interface Props {
  id: string | string[] | undefined;
}

export const ProductDetail = ({ id }: Props) => {
  return (
    <div>
      {/* <Image
        src={image}
        alt={`Image of ${name} - ${description}`}
        width={tileLength}
        height={tileLength}
      /> */}
    </div>
  );
};
