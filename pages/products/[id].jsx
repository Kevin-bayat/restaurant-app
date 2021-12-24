import styles from "../../styles/Products.module.css";
import Image from "next/image";
import { useState } from "react";

const Products = () => {
  const [size, setSize] = useState(0);
  const products = {
    img: "/img/pizza.png",
    title: "RostBif",
    price: [19.9, 29.9, 39.9],
    description:
      "lorem ipsum dollar sit amet ,lorem ipsum dollar sit amet ,lorem ipsum dollar sit amet",
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <div className={styles.ImgContainer}>
          <Image
            src={products.img}
            alt={""}
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
      </div>
      <div className={styles.Right}>
        <h2 className={styles.Title}>{products.title}</h2>
        <span className={styles.Price}>${products.price[size]}</span>
        <p className={styles.Desc}>{products.description}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.Sizes}>
          <div className={styles.Size} onClick={() => setSize(0)}>
            <span className={styles.Number}>Small</span>
            <Image src={"/img/size.png"} layout={"fill"} alt={""} />
          </div>
          <div className={styles.Size} onClick={() => setSize(1)}>
            <span className={styles.Number}>Medium</span>
            <Image src={"/img/size.png"} layout={"fill"} alt={""} />
          </div>
          <div className={styles.Size} onClick={() => setSize(2)}>
            <span className={styles.Number}>Large</span>
            <Image src={"/img/size.png"} layout={"fill"} alt={""} />
          </div>
        </div>
        <h3 className={styles.choose}>Please Choose Your Ingredients</h3>
        <div className={styles.Ingredients}>
          <div className={styles.Option}>
            <input
              type={"checkbox"}
              id={"double"}
              name={"double"}
              className={styles.Checkbox}
            />
            <label htmlFor={"double"}>Double Ingredient</label>
          </div>
          <div className={styles.Option}>
            <input
              type={"checkbox"}
              id={"cheese"}
              name={"cheese"}
              className={styles.Checkbox}
            />
            <label htmlFor={"cheese"}>Extra Cheese</label>
          </div>
          <div className={styles.Option}>
            <input
              type={"checkbox"}
              id={"spicy"}
              name={"spicy"}
              className={styles.Checkbox}
            />
            <label htmlFor={"spicy"}>Spicy Sauce</label>
          </div>
        </div>
        <div className={styles.Add}>
          <input
            type={"number"}
            className={styles.Quantity}
            id={"number"}
            defaultValue={1}
          />
          <button className={styles.Button}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Products;
