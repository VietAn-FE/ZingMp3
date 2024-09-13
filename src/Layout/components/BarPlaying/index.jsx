import styles from './BarPlaying.module.scss'
import PlayerBar from './components/PlayerBar'
import { ListTypeTabBarRight, ListLabelTabBarRight, ListKeyStoreage } from '../../../constants/constants'
import { createContext, memo, useEffect, useMemo, useRef, useState } from 'react'
import BarRightContent from './components/BarRightContent'
import SettingBar from './components/SettingBar'
import useSessionStorage from '../../../hook/useStorage'

const ListTab = [
    {
        label: 'Danh sách phát',
        type: ListTypeTabBarRight.DANH_SACH_PHAT
    },
    {
        label: 'Nghe gần đây',
        type: ListTypeTabBarRight.NGHE_GAN_DAY
    },
]

export const TabSongContext = createContext();

function BarPlaying({ isShowBar, setIsShowBar }) {

    const [tabActiveBar, setTabActiveBar] = useState(ListTypeTabBarRight.DANH_SACH_PHAT);
    const [idItemShowTT, setIdItemShowTT] = useState();

    const dataSongPlayList = useSessionStorage(ListKeyStoreage.PLAY_LIST_SONG);

    const dataSongIsPlaying = useSessionStorage(ListKeyStoreage.SONG_PLAY);

    const [isRandomSong, setIsRandomSong] = useState(false);
    const [isPlaySong, setIsPlaySong] = useState(false)

    let songPlayListRender = useMemo(() => {
        return isRandomSong ? shuffleArray(dataSongPlayList.stateSesstion) : dataSongPlayList.stateSesstion
    }, [isRandomSong, dataSongPlayList])


    const listTab = useMemo(() => {
        return Object.values(ListTypeTabBarRight);
    }, [])

    const refScroll = useRef()

    useEffect(() => {
        const handleScroll = () => {
            setIdItemShowTT(false);
        }
        if (refScroll && refScroll.current) {
            refScroll.current.addEventListener('scroll', handleScroll)
        }
    }, [])

    const handleChangeTab = (id) => {
        setTabActiveBar(id);
    }

    function shuffleArray(array) {
        let newAray = [...array]
        for (let i = newAray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newAray[i], newAray[j]] = [newAray[j], newAray[i]];
        }
        return newAray;
    }

    const getContextBar = {
        tabActiveBar,
        idItemShowTT,
        dataSongPlayList,
        songPlayListRender,
        isRandomSong,
        setIsRandomSong,
        dataSongIsPlaying,
        setIdItemShowTT,
        isShowBar,
        isPlaySong,
        setIsPlaySong,
        setIsShowBar
    }

    return <div className={styles.wrapper}>
        <TabSongContext.Provider value={getContextBar}>
            <div className={`${styles.barR} ${dataSongIsPlaying.stateSesstion ? styles.hasPlayer : ''} bar-right`}>
                <div className={styles.br__container}>
                    <div className={styles.br__header}>
                        <div className={styles.br__hflex}>
                            <div className={styles.br__htab}>
                                {listTab && listTab.length &&
                                    listTab.map((item, index) => {
                                        return (
                                            <div key={index} className={`${styles.br__htitem} ${tabActiveBar == item ? styles.active : ''}`} onClick={() => handleChangeTab(item)}>
                                                {
                                                    ListLabelTabBarRight[item]
                                                }
                                            </div>
                                        )

                                    })}
                            </div>
                            <div className={styles.br__htime}>
                                <div className={styles.br__hsBtn}>
                                    <i className="icon ic-20-Clock"></i>
                                </div>

                            </div>
                            <SettingBar />
                        </div>
                    </div>
                    <div className={styles.br__scroll} ref={refScroll}>

                        <BarRightContent />
                    </div>
                </div>
            </div>
            <div className={styles.barF}>
                <PlayerBar />
            </div>
        </TabSongContext.Provider>
    </div>
}

export default memo(BarPlaying)