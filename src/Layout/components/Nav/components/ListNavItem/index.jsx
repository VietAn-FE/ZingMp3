import { NavLink } from 'react-router-dom';
import styles from './LisstNavItem.module.scss'

function ListNavItem({ data }) {
    return (
        <li className={`${styles.item}`}>
            <NavLink className={({ isActive }) => isActive ? styles.isActive : ""} to={data.path}>
                <div className={styles.itemWrap} >
                    <img src={data.icon} alt={data.label} className={styles.icon} />
                    <span className={styles.text}>{data.label}</span>
                    {data.iconLive &&
                        <figure className={styles.tag}><img src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg" alt="" /></figure>
                    }
                    {data.iconHover &&
                        <button className={styles.iconHover} tabIndex="0"><i className={`${styles.iconSvg} ic-20-Play-Outline `}></i></button>
                    }
                </div>
            </NavLink>
        </li>
    )
}

export default ListNavItem;