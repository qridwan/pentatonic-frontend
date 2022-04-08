import Image from "next/image";
import styles from "./Roadmap.module.css";

const Roadmap = ({ homePageData }) => {
  return (
    <div className={styles.roadmap}>
      <h1>{homePageData.data.attributes.home[0].roadmapTitle}</h1>
      <div className={styles.roadmap_image}>
        <Image src={`http://localhost:1337${homePageData.data.attributes.home[0].roadmapImage.data.attributes.url}`} alt="Roadmap" layout="fill" />
      </div>
    </div>
  ); 
};

export default Roadmap;
