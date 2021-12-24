import styles from "../styles/cart.module.css";
import Image from "next/image";

const cart = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <table className={styles.Table}>
          <tr className={styles.TrTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th> Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.Tr}>
            <td>
              <div className={styles.ImgContainer}>
                <Image
                  src={"/img/pizza.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </div>
            </td>
            <td className={styles.Name}>RostBif</td>
            <td>
              <span className={styles.Extras}>Double Ingredients , Cheese</span>
            </td>
            <td>
              <span className={styles.Price}>$19.9</span>
            </td>
            <td>
              <span className={styles.Quantity}>3</span>
            </td>
            <td>
              <span className={styles.Total}>
                <span className={styles.TotalPrice}>$59.7</span>
              </span>
            </td>
          </tr>
          <tr className={styles.Tr}>
            <td>
              <div className={styles.ImgContainer}>
                <Image
                  src={"/img/pizza.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </div>
            </td>
            <td className={styles.Name}>RostBif</td>
            <td>
              <span className={styles.Extras}>Double Ingredients , Cheese</span>
            </td>
            <td>
              <span className={styles.Price}>$19.9</span>
            </td>
            <td>
              <span className={styles.Quantity}>3</span>
            </td>
            <td>
              <span className={styles.Total}>
                <span className={styles.TotalPrice}>$59.7</span>
              </span>
            </td>
          </tr>
          <tr className={styles.Tr}>
            <td>
              <div className={styles.ImgContainer}>
                <Image
                  src={"/img/pizza.png"}
                  alt={""}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </div>
            </td>
            <td className={styles.Name}>RostBif</td>
            <td>
              <span className={styles.Extras}>Double Ingredients , Cheese</span>
            </td>
            <td>
              <span className={styles.Price}>$19.9</span>
            </td>
            <td>
              <span className={styles.Quantity}>3</span>
            </td>
            <td>
              <span className={styles.Total}>
                <span className={styles.TotalPrice}>$59.7</span>
              </span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.Right}>
        <div className={styles.Wrapper}>
          <h2 className={styles.Title}>CART TOTAL</h2>
          <div className={styles.TotalText}>
            <b className={styles.TotalTextTitle}>SubTotal:</b>$59.9
          </div>
          <div className={styles.TotalText}>
            <b className={styles.TotalTextTitle}>Discount:</b>0
          </div>
          <div className={styles.TotalText}>
            <b className={styles.TotalTextTitle}>Total:</b>$59.9
          </div>
          <button className={styles.Button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};
export default cart;
