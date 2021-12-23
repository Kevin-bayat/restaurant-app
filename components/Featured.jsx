import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
const Featured = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const images = [
    "/img/featured.jpg",
    "/img/featured1.jpg",
    "/img/featured2.jpg",
  ];
  const sliderHandler = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    } else {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.Container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => sliderHandler("l")}
      >
        <Image
          src={"/img/arrowl.png"}
          layout={"fill"}
          alt={""}
          objectFit={"contain"}
        />
      </div>
      <div
        className={styles.Wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images?.map((img, i) => (
          <div className={styles.ImageContainer} key={i}>
            <Image src={img} alt={""} layout={"fill"} objectFit={"contain"} />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => sliderHandler("r")}
      >
        <Image
          src={"/img/arrowr.png"}
          layout={"fill"}
          alt={""}
          objectFit={"contain"}
        />
      </div>
    </div>
  );
};
export default Featured;
