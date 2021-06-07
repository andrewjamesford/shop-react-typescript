import React from "react";
import ReactLoading from "react-loading";
import styles from "../styles/loader.module.css";

export const Loader = () => {
  const length = 40;
  return (
    <div className={styles.loader}>
      <ReactLoading
        type={"bars"}
        color={"#111"}
        height={length}
        width={length}
      />
    </div>
  );
};
