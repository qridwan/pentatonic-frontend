import Image from "next/image"
import styles from "./Comunity.module.css";

const Comunity = ({ homePageData }) => {
  return (
    <div className={styles.comunity}>
      <h1>{homePageData.data.attributes.home[0].communityTitle}</h1>
      <div className={styles.container}>
        <div>
          <p>
            {homePageData.data.attributes.home[0].communityText}
          </p>
        </div>
        <div className={styles.socials}>
          {homePageData.data.attributes.home[0].comunityImages.map(image => (
            <div key={image.id}>
              <div className={styles.social_img}>
                <Image src={`http://localhost:1337${image.image.data[0].attributes.url}`} alt="" layout="fill" />
              </div>
              <span>{image.imageTitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comunity;
