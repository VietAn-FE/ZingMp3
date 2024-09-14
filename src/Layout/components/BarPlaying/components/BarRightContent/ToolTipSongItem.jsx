import { useRef } from 'react';
import useClickOutside from '../../../../../hook/useClickOutside';
import styles from './BRC.module.scss'
const TooltipSongItem = ({ position, data, callbackClickOutside }) => {
    const styleTT = {
        top: `${position.top}px`,
        left: `${position.left}px`,

    }
    const refEl = useRef();

    const handleClickOutside = useClickOutside(refEl, callbackClickOutside)

    const ListAction = [
        {
            icon: <i className="icon ic-ringtone"></i>,
            label: 'Cài đặt nhạc chờ'
        },
        {
            icon: <i className="icon ic-radio"></i>,
            label: 'Phát nội dung tương tự'
        },
        {
            icon: <i className="icon ic-16-Add"></i>,
            label: 'Thêm vào playlist'
        },
        {
            icon: <i className="icon ic-karaoke"></i>,
            label: 'Phát cùng lời bài hát'
        },
        {
            icon: <i className="icon ic-link"></i>,
            label: 'Sao chép link'
        },
        {
            icon: <i className="icon ic-share"></i>,
            label: 'Chia sẻ'
        },
        {
            icon: <i className="icon ic-delete"></i>,
            label: 'Xóa'
        },
    ]
    return (
        <div className={styles.tts__portal} style={styleTT} >
            <div className={styles.tts__ct} ref={refEl}>
                <div className="menu">
                    <ul className={styles.tts__menu}>
                        <div className="menu-list--submenu">
                            <div className={styles.tts__media}>
                                <div className={styles.tts__mediaLeft}>
                                    <figure className={styles.tts__avt}>
                                        <img src={data.thumbnail} alt={data.title} />
                                    </figure>
                                </div>
                                <div className={styles.tts__mediaContent}>
                                    <a>
                                        <div className={styles.tts__mtitle}>
                                            <span>{data.title}</span>
                                        </div>
                                    </a>
                                    <div className={styles.tts__sstart}>
                                        <div className={styles.tts__ssitem}>
                                            <i className="icon ic-like"></i>
                                            <span>2M</span>
                                        </div>
                                        <div className={styles.tts__ssitem}>
                                            <i className="icon ic-view"></i>
                                            <span>82.3M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                    <ul className={styles.tts__gbt}>
                        <div className={styles.tts__gbtMenu}>
                            <button className={styles.tts__gbtItem}>
                                <i className="icon ic-16-Lyric"></i>
                                <span>Lời bài hát</span>
                            </button>
                            <span className={styles.tts__gbtItem}>
                                <i className="icon ic-denial"></i>
                                <span>Chặn</span>
                            </span>
                        </div>
                    </ul>
                    <ul className={styles.tts__mlist}>
                        {ListAction && ListAction.length &&
                            ListAction.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <button className={styles.tts__mlitem}>
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </button>
                                    </li>
                                )
                            })}


                    </ul>
                    <p className={styles.tts__dis}>Cung cấp bởi {data.distributor}</p>
                </div>
            </div>
            <div className={styles.tts__bg}></div>
        </div>
    )
}

export default TooltipSongItem