import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const PizzaCard = () => {
  const router = useRouter();
  return (
    <div
      className={styles.Container}
      onClick={() => router.push(`/products/${Math.random().toFixed(2) * 100}`)}
    >
      <Image src={"/img/pizza.png"} width={500} height={500} alt={""} />
      <h1 className={styles.Title}> RostBif</h1>
      <span className={styles.Price}>19.90$</span>
      <p className={styles.Desc}>
        {" "}
        lorem ipsum dollar sit amet ,lorem ipsum dollar sit amet ,lorem ipsum
        dollar sit amet
      </p>
    </div>
  );
};

export default PizzaCard;
