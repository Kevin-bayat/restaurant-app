import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.Container} id={"products"}>
      <h1 className={styles.Title}>Best Pizza Restaurant in Tehran</h1>

      <p className={styles.Desc}>
        lorem ipsum dollar sit amet , lorem ipsum dollar sit amet ,lorem ipsum
        dollar sit amet ,lorem ipsum dollar sit amet ,lorem ipsum dollar sit
        amet , lorem ipsum dollar sit amet , lorem ipsum dollar sit amet ,lorem
        ipsum dollar sit amet ,lorem ipsum dollar sit amet
      </p>
      <div className={styles.Wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};
export default PizzaList;
