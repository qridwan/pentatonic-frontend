import Image from "next/image";
import styles from "./Nft.module.css";

const Nft = ({ homePageData }) => {
  return (
    <div className={styles.nft}>
      <h1>{homePageData.data.attributes.home[0].nftTitle}</h1>
      <div className={styles.container}>
        <div className={styles.nft_img}>
          <Image
            src={`http://localhost:1337${homePageData.data.attributes.home[0].nftImage.data.attributes.url}`}
            alt=""
            layout="fill"
          />
        </div>
        <div className={styles.content}>
          <p>{homePageData.data.attributes.home[0].nftText1}</p>
          <br />
          <p>{homePageData.data.attributes.home[0].nftText2}</p>
          <br />
          <p>{homePageData.data.attributes.home[0].nftText3}</p>
          <br />
          <p>{homePageData.data.attributes.home[0].nftText4}</p>
        </div>
      </div>
    </div>
  );
};

export default Nft;
