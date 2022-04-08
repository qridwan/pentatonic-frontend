import React from "react";
import Image from "next/image";
import styles from "./Rarity.module.css";

const Rarity = ({ rarityImages, rarityTitle }) => {
  return (
    <div className={styles.rarity_section}>
      <h1 className={styles.rarity_score}>{rarityTitle}</h1>
      <div className={styles.rarity_container}>
        {rarityImages.map((img, index) => (
          <div className={styles.rariry_img_box} key={index}>
            <div className={styles.rarity_img}>
              <Image src={`http://localhost:1337${img.rarityImage.data.attributes.url}`} alt="" layout="fill" />
            </div>
            <p className={styles.rarity_img_title}>
              {img.rarityText1}
              <br />
              {img.rarityText2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rarity;
