import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Item}>
        <Image src={"/img/bg.png"} layout={"fill"} alt={""} />
      </div>
      <div className={styles.Item}>
        <div className={styles.Card}>
          <h2 className={styles.Motto}>We Are Kiwi Pizza.</h2>
        </div>
        <div className={styles.Card}>
          <h1 className={styles.Title}>Find Our Restaurant</h1>
          <p className={styles.Text}>
            1654 R. don road #304.
            <br />
            New York
            <br />
            (021)8888-8888
          </p>
          <p className={styles.Text}>
            1654 R. don road #304.
            <br />
            Roma
            <br />
            (021)8888-8888
          </p>
          <p className={styles.Text}>
            1654 R. don road #304.
            <br />
            Tehran
            <br />
            (021)8888-8888
          </p>
        </div>
        <div className={styles.Card}>
          <h1 className={styles.Title}>Working Hours</h1>
          <p className={styles.Text}>
            Monday Until Friday
            <br />
            9:00- 22:00
          </p>
          <p className={styles.Text}>
            Saturday - Sunday
            <br />
            12:00 - 24
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
