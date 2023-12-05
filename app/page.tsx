import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>EV Charging Station Finder</title>
        <meta
          name="description"
          content="Find the nearest EV charging stations easily and conveniently."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>EV Charging Station Finder</h1>
        <p className={styles.text}>
          Discover the nearest electric vehicle charging stations, check their
          availability, compare prices, and more.
        </p>
        <p className={styles.text}>Get started by signing up or logging in.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Sign Up</button>
          <button className={styles.button}>
            <Link href="/login">Log In</Link>
          </button>
        </div>
      </main>
    </>
  );
}
