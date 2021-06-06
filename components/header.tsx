import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import styles from "../styles/header.module.css";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/shoe.svg"
              alt="Shoe Shop Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.iconNav}>
          <nav>
            <ShoppingCartIcon className={styles.cartIcon} />
            <SearchIcon className={styles.searchIcon} />
            <MenuIcon className={styles.menuIcon} />
          </nav>
        </div>
      </div>
    </header>
  );
};
