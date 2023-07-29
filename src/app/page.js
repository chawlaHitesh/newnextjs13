import Image from "next/image";
import styles from "./page.module.css";
import Blogs from "./(pageinnerapi)/blogs";
import { Suspense } from "react";
import TestingDemo from "../../component/tesingDemo";
import Header from "./Header";
import Link from "next/link";
import axios from "axios";
// import Servercmp from "./(pageinnerapi)/Servercmp";
export default async function Home() {
  const a = await fetch("http://httpbin.org/get", {
    cache: "no-store",
  });
  const right = await a.json();
  return (
    <main className={styles.main}>
      {/* <Blogs /> */}
      {/* <Servercmp /> */}
      <h1>{JSON.stringify(right)}</h1>
    </main>
  );
}
