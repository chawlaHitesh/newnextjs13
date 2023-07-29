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
  const a = await fetch(
    "http://110.227.212.21:3016/api/v1/user/cms?slug=termsandconditions"
  );
  return (
    <main className={styles.main}>
      {/* <Blogs /> */}
      {/* <Servercmp /> */}
      <h1>hellooooooooooooooooo</h1>
    </main>
  );
}
