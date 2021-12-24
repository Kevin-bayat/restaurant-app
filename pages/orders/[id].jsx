import styles from "../../styles/orders.module.css";
import Image from "next/image";

const Orders = () => {
  const status = 0;
  const statusClassHandler = (index) => {
    if (index - status < 1) return styles.Done;
    if (index - status === 1) return styles.InProgress;
    if (index - status > 1) return styles.UnDone;
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <div className={styles.Row}>
          <table className={styles.Table}>
            <tr className={styles.TrTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.Tr}>
              <td className={styles.Id}>786924222</td>
              <td>
                <span className={styles.Name}>Kevin Bayat</span>
              </td>
              <td>
                <span className={styles.Address}>NewYork City</span>
              </td>
              <td>
                <span className={styles.Total}>$59.7</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.Row}>
          <div className={statusClassHandler(0)}>
            <Image src={"/img/paid.png"} alt={""} width={30} height={30} />
            <span>Payment</span>
            <div className={styles.CheckedIcon}>
              <Image src={"/img/checked.png"} alt={""} width={20} height={20} />
            </div>
          </div>
          <div className={statusClassHandler(1)}>
            <Image src={"/img/bake.png"} alt={""} width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.CheckedIcon}>
              <Image src={"/img/checked.png"} alt={""} width={20} height={20} />
            </div>
          </div>
          <div className={statusClassHandler(2)}>
            <Image src={"/img/bike.png"} alt={""} width={30} height={30} />
            <span>On The way</span>
            <div className={styles.CheckedIcon}>
              <Image src={"/img/checked.png"} alt={""} width={20} height={20} />
            </div>
          </div>
          <div className={statusClassHandler(3)}>
            <Image src={"/img/delivered.png"} alt={""} width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.CheckedIcon}>
              <Image src={"/img/checked.png"} alt={""} width={20} height={20} />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.Button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};
export default Orders;
