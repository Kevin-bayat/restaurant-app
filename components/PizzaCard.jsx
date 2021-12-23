import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
const PizzaCard = () => {
  return (
    <div className={styles.Container}>
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
