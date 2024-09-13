import { useContext, useRef, useState, memo } from 'react';
import { ListMp3, ListTypeTabBarRight, typeItemSong } from '../../../../../constants/constants'
import styles from './BRC.module.scss'
import { createPortal } from 'react-dom';
import TooltipSongItem from './ToolTipSongItem';
import { TabSongContext } from '../..';
const ItemPlayList = ({ data, tabActive, typeItem, idItemShowTT, setIdItemShowTT }) => {

    const dataBarContent = useContext(TabSongContext);

    const [position, setPosition] = useState({
        top: 0,
        left: 0
    })

    const sizeTT = {
        height: 430,
        width: 280
    };

    const handleActiveItemPlaying = () => {
        if (typeItem == typeItemSong.ITEM_NORMAL) {
            handleAddPlayListSong();
        }
        let dataSongAdd = {...data, mp3:ListMp3[Math.floor(Math.random() * 4)].path}
        dataBarContent.dataSongIsPlaying?.setStateSession(dataSongAdd);
    }

    const handleShowTooltip = (event) => {
        if (idItemShowTT) {
            setPosition({
                top: 0,
                left: 0
            })
            setIdItemShowTT();
            return;
        }
        const itemRect = event.target.getBoundingClientRect();
        let post = {
            top: itemRect.top + sizeTT.height < window.innerHeight ? itemRect.top : itemRect.top - sizeTT.height < 0 ? 10 : itemRect.top - sizeTT.height,
            left: itemRect.left - sizeTT.width
        }
        setPosition(post)
        setIdItemShowTT(data.radioId);
    }

    const callbackClickOutside = () => {
        setPosition({
            top: 0,
            left: 0
        })
        setIdItemShowTT();
    }

    const handleAddPlayListSong = () => {
        let dataOld = dataBarContent.dataSongPlayList.stateSesstion ? dataBarContent.dataSongPlayList.stateSesstion : [];
        let dataSongAdd = {...data, mp3:ListMp3[Math.floor(Math.random() * 4)].path}
        dataBarContent.dataSongPlayList.setStateSession([...dataOld, dataSongAdd]);
    }

    return (
        <>

            <div className={styles.ipl__wrapper} >
                <div className={styles.ipl__media}>
                    <div className={styles.ipl__left}>
                        <div className={styles.ipl__thumb}>
                            <figure className={styles.ipl__fig} title={data.title}>
                                <img src={data.thumbnail} alt="" />
                            </figure>
                            <div className={styles.ipl__action}>
                                <div className="zm-btn action-play  button" onClick={handleActiveItemPlaying}>
                                    <i className={`${styles.iplicon} icon action-play ic-play `}></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ipl__info}>
                            <div className="title-wrapper">
                                <a className={styles.ipl__title} href={data.link}>
                                    <span>{data.title}</span>
                                </a>
                            </div>
                            <h3 className="is-one-line artist-names is-truncate subtitle">
                                <a className={styles.ipl__ghost} href={data?.artists[0]?.link}>{data.artistsNames}</a>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.ipl__right}>
                        <div className={`${styles.ipl__level} ${tabActive == ListTypeTabBarRight.DANH_SACH_PHAT && styles.ipl__levelFlex}`}>
                            <div className={styles.ipl__leverItem}>
                                {
                                    tabActive == ListTypeTabBarRight.DANH_SACH_PHAT ?
                                        <button className="zm-btn zm-tooltip-btn is-hover-circle button" onClick={handleAddPlayListSong} >
                                            <i className="icon ic-add-play-now"></i>
                                        </button>
                                        :
                                        <button className="zm-btn zm-tooltip-btn animation-like undefined done is-hover-circle button" >
                                            <i className="icon ic-like"></i>
                                        </button>
                                }

                            </div>
                            <div className={styles.ipl__leverItem}>
                                <button className="zm-btn zm-tooltip-btn is-hover-circle button" onClick={handleShowTooltip}>
                                    <i className="icon ic-more"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {idItemShowTT == data.radioId && createPortal(
                <TooltipSongItem position={position} data={data} callbackClickOutside={callbackClickOutside} />,
                document.body
            )}
        </>

    )
}
export default memo(ItemPlayList)