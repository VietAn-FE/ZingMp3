import { Fragment, memo, useContext, useMemo } from 'react';
import { ListTypeTabBarRight, typeItemSong } from '../../../../../constants/constants';
import styles from './BRC.module.scss'
import ItemPlayList from './ItemPlayList';
import { useTabSongContext } from '../../../../../context/tabsong';


const PlayList = () => {
    const { actionTabSong, selectorTabSong } = useTabSongContext();
    const { tabBarRightActive, listSongChoice, isReverseListSong, listSongReverse, songPlayer } = selectorTabSong;
    let songPlayListRender = isReverseListSong ? listSongReverse : listSongChoice;


    let playListOn = songPlayListRender;
    let playListPending = [];
    let indexItemPlay = -1;

    if (songPlayListRender && songPlayer) {
        indexItemPlay = songPlayListRender.findIndex((item) => item.radioId == songPlayer.radioId);
        playListOn = indexItemPlay >= 0 ? songPlayListRender.slice(0, indexItemPlay + 1) : songPlayListRender
        playListPending = indexItemPlay >= 0 ? songPlayListRender.slice(indexItemPlay + 1) : [];
    }


    return (
        <Fragment>
            {tabBarRightActive == ListTypeTabBarRight.DANH_SACH_PHAT &&
                <div className={styles.pll__wrapper} style={{ marginBottom: 20 }}>

                    <div className={styles.pll__list} style={{ marginBottom: 10 }}>
                        {
                            playListOn && playListOn.length ?
                                playListOn.map((item, index) => {
                                    return (
                                        <ItemPlayList key={index} data={item} typeItem={typeItemSong.ITEM_LISTPLAY} />
                                    )
                                })
                                : ''
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
                                        <ItemPlayList data={item} key={index} typeItem={typeItemSong.ITEM_LISTPLAY} />
                                    )
                                }) : ''

                        }
                    </div>

                </div>
            }
        </Fragment>
    )
}
export default memo(PlayList)