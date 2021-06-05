import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Header.module.css";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div></div>
      <div>
        <Link href="/">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Link>
      </div>
    </header>
  );
};
