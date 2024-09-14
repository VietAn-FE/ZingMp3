import { useState, memo } from 'react';
import { ListTypeTabBarRight, sizeToolTipSong, typeItemSong } from '../../../../../constants/constants'
import styles from './BRC.module.scss'
import { createPortal } from 'react-dom';
import TooltipSongItem from './ToolTipSongItem';
import { useTabSongContext } from '../../../../../context/tabsong';
import { ACTION_TYPE } from '../../../../../context/tabsong/constant';
const ItemPlayList = ({ data, typeItem }) => {
    const { actionTabSong, selectorTabSong } = useTabSongContext();
    const { tabBarRightActive, listSongChoice, songPlayer, isPlaying } = selectorTabSong;
    const { handleSetSongPlayer, handleAddSongListChoice,handleSetPlaying } = actionTabSong

    const [isShowTT, setIsShowTT] = useState(false)

    const [position, setPosition] = useState({
        top: 0,
        left: 0
    })


    let isItemPlayer = data.radioId == songPlayer.radioId ? true : false;

    const handleActiveItemPlaying = () => {
        if (isItemPlayer) {
            handleSetPlaying(ACTION_TYPE.SET_IS_PLAYING, !isPlaying);
            return
        }
        if (typeItem == typeItemSong.ITEM_NORMAL) {
            handleAddSongListChoice(ACTION_TYPE.ADD_SONG_LIST_CHOICE, data);
        }
        let dataSongPlayer = {
            title: data?.title,
            thumb: data?.thumbnail,
            author: data?.artistsNames,
            radioId: data?.radioId,
            currentTimePlay: 0,
        }
        handleSetSongPlayer(ACTION_TYPE.SET_SONG_PLAYER, dataSongPlayer);
        handleSetPlaying(ACTION_TYPE.SET_IS_PLAYING, true);
    }

    const handleShowTooltip = (event) => {
        const itemRect = event.target.getBoundingClientRect();
        let post = {
            top: itemRect.top + sizeToolTipSong.height < window.innerHeight ? itemRect.top : itemRect.top - sizeToolTipSong.height < 0 ? 10 : itemRect.top - sizeToolTipSong.height,
            left: itemRect.left - sizeToolTipSong.width
        }
        setPosition(post);
        setIsShowTT(true);
    }

    const callbackClickOutside = () => {
        setPosition({
            top: 0,
            left: 0
        })
        setIsShowTT(false);
    }

    const handleAddPlayListSong = () => {
        handleAddSongListChoice(ACTION_TYPE.ADD_SONG_LIST_CHOICE, data);
    }


    return (
        <>
            <div className={` ${styles.ipl__wrapper} ${isShowTT ? styles.active : ''} ${isItemPlayer && styles.pll__itemPlaying} ${isItemPlayer && isPlaying ? styles.pll__itemPlayingPlay : ''}`} >
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
                        <div className={`${styles.ipl__level} ${typeItem == typeItemSong.ITEM_NORMAL && styles.ipl__levelFlex}`}>
                            <div className={styles.ipl__leverItem}>
                                {
                                    typeItem == typeItemSong.ITEM_NORMAL ?
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
            {isShowTT && createPortal(
                <TooltipSongItem position={position} data={data} callbackClickOutside={callbackClickOutside} />,
                document.body
            )}
        </>

    )
}
export default memo(ItemPlayList)