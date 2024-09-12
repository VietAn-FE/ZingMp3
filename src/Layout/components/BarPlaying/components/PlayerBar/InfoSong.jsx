import { memo, useState } from 'react'
import styles from './BP.module.scss'
import { createPortal } from 'react-dom'
import TooltipSongItem from '../BarRightContent/ToolTipSongItem'
const InfoSong = ({ data }) => {
    const [showTT, setShowTT] = useState(false)
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    })

    const handleShowTooltip = (event) => {
        const itemRect = event.target.getBoundingClientRect();
        let post = {
            top: itemRect.top - 425,
            left: itemRect.left
        }
        setPosition(post)
        setShowTT(true);
    }
    return (
        <div className={styles.pb__left}>
            <div className={styles.pb__litem}>
                <div className={styles.pb__lmedia}>
                    <div className={styles.pb__lmleft}>
                        <a className="" href="/">
                            <figure className={styles.pb__avt}>
                                <img src={data?.thumbnail} alt="" />
                            </figure>
                        </a>
                    </div>
                    <div className={styles.pb__lmcontent}>
                        <a className={styles.pb__lmtitle} href={data?.link}>
                            <span className="item-title title">{data?.title}</span>
                        </a>
                        <a className={styles.pb__lmghost} href={data?.artists[0]}>{data?.artistsNames}</a>
                    </div>
                    <div className={styles.pb__lmright}>
                        <div className={styles.pb__lmflex}>
                            <div className={styles.pb__lmitem}>
                                <i className="icon ic-like"></i>
                            </div>
                            <div className={styles.pb__lmitem} onClick={handleShowTooltip}>
                                <i className="icon ic-more"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showTT && createPortal(
                <TooltipSongItem position={position} data={data} setIdItemShowTT={setShowTT} />,
                document.body
            )}
        </div>
    )
}

export default memo(InfoSong)