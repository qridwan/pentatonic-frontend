import Image from "next/image";
import styles from "./Moleculeverse.module.css";

const Moleculeverse = ({ homePageData }) => {
  return (
    <div className={styles.moleculeverse}>
      <h1>{homePageData.data.attributes.home[0].moleculeverseTitle}</h1>
      <div className={styles.container}>
        <div className={styles.left_col}>
          <div className={styles.tshirt}>
            <Image
              src={`http://localhost:1337${homePageData.data.attributes.home[0].moleculeverseImageLeft.data[1].attributes.url}`}
              alt="t-shirt"
              layout="fill"
            />
          </div>
          <div className={styles.play_btn}>
            <Image src={`http://localhost:1337${homePageData.data.attributes.home[0].moleculeverseImageLeft.data[0].attributes.url}`} alt="" layout="fill" />
          </div>
        </div>
        <div className={styles.right_col}>
          {homePageData.data.attributes.home[0].moleculeverseImageRight.data.map(img => (
            <div key={img.id} className={styles.right_col_img}>
              <Image src={`http://localhost:1337${img.attributes.url}`} alt="pic" layout="fill" />
            </div>
          ))}
        </div>
      </div>
      <button>{homePageData.data.attributes.home[0].moleculeverseButtonText}</button>
    </div>
  );
};

export default Moleculeverse;
