import React from "react";
import Head from "next/head";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import styles from "../styles/layout.module.css";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};
