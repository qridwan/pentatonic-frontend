import qs from "qs";
import Head from 'next/head'
import Image from "next/image";
import Rarity from "../../components/gallery/Rarity/Rarity";
import styles from "./Gallery.module.css";

const Gallery = ({ data }) => {
  return (
    <>
      <Head>
        <title>Gallery Page - Pentatonic</title>
      </Head>
      <div className={styles.gallery}>
        <div className={styles.gallery_container}>
          <div className={styles.collection_info}>
            <h1 className={styles.collection_heading}>{data.data.attributes.collectionPage[0].collectionTitle}</h1>
            <p className={styles.collection_desc}>
              {data.data.attributes.collectionPage[0].collectionText}
            </p>
          </div>
          <div className={styles.grid_container}>
            {data.data.attributes.collectionPage[0].collectionImages.map((img, index) => (
              <div className={styles.gallery_img_container} key={index}>
                <div className={styles.gallery_img}>
                  <Image src={`http://localhost:1337${img.imageBig.data.attributes.url}`} alt="" layout="fill"
                  />
                </div>
                <div className={styles.gallery_tshirt}>
                  <Image src={`http://localhost:1337${img.imageSmall.data.attributes.url}`} alt="" layout="fill"
                  />
                </div>
                <p className={styles.gallery_img_title}>
                  {img.imageTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Rarity
        rarityImages={data.data.attributes.collectionPage[0].rarityImages}
        rarityTitle={data.data.attributes.collectionPage[0].rarityTitle}
      />
    </>
  );
};



export async function getStaticProps() {
  const query = qs.stringify({
    populate: {
      collectionPage: {
        populate: {
          collectionImages: {
            populate: '*',
          },
          rarityImages: {
            populate: '*',
          }
        },
      }
    }
  }, {
    encodeValuesOnly: true,
  });

  const res = await fetch(`http://localhost:1337/api/collection-page?${query}`);
  const data = await res.json();

  return {
    props: { data },
  };
}


export default Gallery;
