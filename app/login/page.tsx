import Head from "next/head";
import styles from "@/app/ui/login.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Log In</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Log In</h1>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email:
            <input type="email" id="email" className={styles.input} required />
          </label>
          <label htmlFor="password" className={styles.label}>
            Password:
            <input
              type="password"
              id="password"
              className={styles.input}
              required
            />
          </label>
          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>
        <Link href="/" className={styles.link}>
          Back to home
        </Link>
      </main>
    </>
  );
}
