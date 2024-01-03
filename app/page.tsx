import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import styles from "@/app/ui/home.module.css";

//This comment is added to test the git commit

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
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          EV Charging Station Finder
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Discover the nearest electric vehicle charging stations, check their
          availability, compare prices, and more.
        </p>
        <div className={styles.buttonContainer}>
          <Button>Sign Up</Button>
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </div>
        {/* <h1 className={styles.title}>EV Charging Station Finder</h1>
        <p className={styles.text}>
          
        </p>
        <p className={styles.text}>Get started by signing up or logging in.</p>
         */}
      </main>
    </>
  );
}
