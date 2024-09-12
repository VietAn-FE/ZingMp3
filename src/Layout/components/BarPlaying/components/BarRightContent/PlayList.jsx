import { Fragment, useContext } from 'react';
import { ListTypeTabBarRight, typeItemSong } from '../../../../../constants/constants';
import styles from './BRC.module.scss'
import ItemPlayList from './ItemPlayList';
import { TabSongContext } from '../..';


const PlayList = () => {
    const dataBarContext = useContext(TabSongContext);
    const playList = dataBarContext.songPlayListRender;
    const itemPlaying = dataBarContext?.dataSongIsPlaying?.stateSesstion;
    let playListOn = playList;
    let playListPending = [];
    let indexItemPlay = -1
    if (playList && itemPlaying) {
        indexItemPlay = playList.findIndex((item) => item.radioId == itemPlaying.radioId);
        playListOn = indexItemPlay >= 0 ? playList.slice(0, indexItemPlay + 1) : playList
        playListPending = indexItemPlay >= 0 ? playList.slice(indexItemPlay + 1) : [];
    }

    return (
        <Fragment>
            {dataBarContext?.tabActiveBar == ListTypeTabBarRight.DANH_SACH_PHAT &&
                <div className={styles.pll__wrapper} style={{ marginBottom: 20 }}>

                    <div className={styles.pll__list} style={{ marginBottom: 10 }}>
                        {
                            playListOn && playListOn.length &&
                            playListOn.map((item, index) => {
                                return (
                                    <div key={index} className={`${indexItemPlay != -1 && styles.pll__itemPlay} ${index == indexItemPlay && styles.pll__itemPlaying}`}>
                                        <ItemPlayList data={item}  typeItem={typeItemSong.ITEM_LISTPLAY} idItemShowTT={dataBarContext.idItemShowTT} setIdItemShowTT={dataBarContext.setIdItemShowTT} />
                                    </div>
                                )
                            })

                        }
                    </div>
                    <div className={styles.pll__list}>
                        {playListPending && playListPending?.length ?
                            <p>Tiếp theo</p> : ''
                        }
                        {
                            playListPending && playListPending?.length ?
                                playListPending.map((item, index) => {
                                    return (
                                        <ItemPlayList data={item} key={index} typeItem={typeItemSong.ITEM_LISTPLAY} idItemShowTT={dataBarContext.idItemShowTT} setIdItemShowTT={dataBarContext.setIdItemShowTT} />
                                    )
                                }) : ''

                        }
                    </div>

                </div>
            }
        </Fragment>
    )
}
export default PlayList