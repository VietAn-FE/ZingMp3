import styles from './BRC.module.scss'
function ItemLoading() {

    return (
        <div className={styles.iLd__item}>
            <div className={styles.iLd__image}></div>
            <div className={styles.iLd__content}>
                <div className={styles.iLd__text}></div>
                <div className={styles.iLd__des}></div>
            </div>

        </div>
    )
}

export default ItemLoading