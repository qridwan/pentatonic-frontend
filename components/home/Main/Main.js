import styles from './main.module.css'

const main = ({ homePageData }) => {
    return (
        <div className={styles.main}>
            <h1>{homePageData.data.attributes.home[0].mainTitle}</h1>
            <p>{homePageData.data.attributes.home[0].mainText1}</p>
            <p>{homePageData.data.attributes.home[0].mainText2}</p>
            <button>{homePageData.data.attributes.home[0].mainButtonText}</button>
        </div>
    )
}

export default main