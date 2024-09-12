import styles from './ListNavSongUser.module.scss'

function ListNavSongUser({ data }) {
    return (
        <li className={styles.item}>
            <a className={styles.itemWrap} href="/mymusic/song/favorite">
                    <img src={data.icon} alt={data.label} className={styles.icon} />
                <span className={styles.text}>{data.label}</span>
                {data.iconHover &&
                    <button className={styles.iconHover} tabIndex="0"><i className={`${styles.iconSvg} ic-20-Play-Outline `}></i></button>
                }
            </a>
        </li>
    )
}

export default ListNavSongUser;