import { Fragment } from "react"
import ItemLoading from "./ItemLoading"
import { Link } from "react-router-dom"
import styles from '../../BarPlaying.module.scss'

const BRCNonLogin = () => {
    return (
        <div className={styles.brc__empty}>
            <ItemLoading />
            <ItemLoading />
            <ItemLoading />
            <div className={styles.brc__emptyBox}>
                <p className={styles.text}>Khám phá thêm các bài hát mới của Zing MP3</p>
                <Link className={styles.btn} to="/login">
                    <i className="icon ic-play"></i>
                    <span>Phát nhạc mới phát hành</span>
                </Link>
            </div>
        </div>
    )
}

export default BRCNonLogin