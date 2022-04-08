import styles from './Mint.module.css'

const Mint = () => {
    return (
        <div className={styles.mint}>
            <div className={styles.container}>
                <h2>Enter the Molecularverse</h2>
                <button>MINT</button>
                <h2>0000/X000 Minted</h2>
            </div>
        </div>
    )
}

export default Mint