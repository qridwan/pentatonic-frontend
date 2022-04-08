import qs from "qs"
import Head from 'next/head'
import Main from "../components/home/Main/Main";
import Comunity from "../components/home/Comunity/Comunity";
import styles from "./index.module.css";
import Moleculeverse from "../components/home/Moleculeverse/Moleculeverse";
import Story from "../components/home/Story/Story";
import Nft from "../components/home/Nft/Nft";
import Roadmap from "../components/home/Roadmap/Roadmap";


const Homepage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Home Page - Pentatonic</title>
      </Head>
      {/* <div className={styles.home}>
        <Main homePageData={data} />
      </div>
      <Moleculeverse homePageData={data} />
      <Story homePageData={data} /> */}
      {/* <Nft homePageData={data} /> */}
      {/* <Comunity homePageData={data} /> */}
      {/* <Roadmap homePageData={data} /> */}
    </>
  );
};

// export async function getStaticProps() {
//   const query = qs.stringify({
//     populate: {
//       home: {
//         populate: {
//           comunityImages: {
//             populate: '*',
//           },
//           moleculeverseImageLeft: {
//             populate: '*',
//           },
//           moleculeverseImageRight: {
//             populate: '*',
//           },
//           nftImage: {
//             populate: "*"
//           },
//           storyImage: {
//             populate: "*"
//           },
//           roadmapImage: {
//             populate: "*"
//           }
//         },
//       }
//     }
//   }, {
//     encodeValuesOnly: true,
//   });

//   const res = await fetch(
//     `http://localhost:1337/api/home/?${query}`
//   )

//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }

export default Homepage;
