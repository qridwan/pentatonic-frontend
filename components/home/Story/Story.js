import Image from "next/image";
import styles from "./Story.module.css";

const Story = ({ homePageData }) => {
  return (
    <div className={styles.story}>
      <h1>{homePageData.data.attributes.home[0].storyTitle}</h1>
      <div className={styles.container}>
        <div>
          <p>{homePageData.data.attributes.home[0].storyText1}</p>
          <br />
          <p>{homePageData.data.attributes.home[0].storyText2}</p>
        </div>
        <div className={styles.story_img}>
          <Image src={`http://localhost:1337${homePageData.data.attributes.home[0].storyImage.data.attributes.url}`} alt="" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Story;
