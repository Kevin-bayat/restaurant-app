import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Item}>
        <div className={styles.PhoneButton}>
          <Image src={"/img/telephone.png"} width={32} height={32} alt={""} />
        </div>
        <div className={styles.Texts}>
          <div className={styles.Text}>Order Now</div>
          <div className={styles.Text}>0937-777-0-700</div>
        </div>
      </div>
      <div className={styles.Item}>
        <ul className={styles.List}>
          <li className={styles.ListItem}>HomePage</li>
          <li className={styles.ListItem}>Products</li>
          <li className={styles.ListItem}>Menu</li>
          <Image src={"/img/logo.png"} height={69} width={160} alt={""} />
          <li className={styles.ListItem}>Events</li>
          <li className={styles.ListItem}>Blogs</li>
          <li className={styles.ListItem}>Contacts</li>
        </ul>
      </div>
      <div className={styles.Item}>
        <div className={styles.Cart}>
          <Image src={"/img/cart.png"} alt={""} width={30} height={30} />
          <div className={styles.Counter}>2 </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
