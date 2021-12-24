import Head from "next/head";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kiwi Restaurant</title>
        <meta name="description" content="Best Restaurant in Tehran City" />
        <link rel="icon" href="/img/pizza-favicon.png" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
