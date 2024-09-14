import { Fragment, memo, useEffect, useMemo, useRef, useState } from "react"
import { useTabSongContext } from "../../../context/tabsong";
import { ListLabelTabBarRight, ListTypeTabBarRight } from "../../../constants/constants";
import styles from './BarPlaying.module.scss'
import { ACTION_TYPE } from "../../../context/tabsong/constant";
import SettingBar from './components/SettingBar'
import BarRightContent from './components/BarRightContent'
import PlayerBar from "./components/PlayerBar";
import { useClassLayoutContext } from "../../DefaultLayout";

const BarContent = () => {
    const classLayoutContext = useClassLayoutContext();
    const { state, actionTabSong, selectorTabSong } = useTabSongContext();
    const [isShowBar, setIsShowBar] = useState(true);

    const { tabBarRightActive } = selectorTabSong;
    const { handleChangeTabRight } = actionTabSong;

    const listTab = useMemo(() => {
        return Object.values(ListTypeTabBarRight);
    }, [])

    const refBar = useRef()

    useEffect(() => {
        let fadeIn;

        if (classLayoutContext.isShowBar) {
            setIsShowBar(true);
            return
        }

        const timeout = setTimeout(() => {
            setIsShowBar(false)
        }, 350);

        return () => {
            clearTimeout(timeout, fadeIn);
        }

    }, [classLayoutContext.isShowBar])

    const refScroll = useRef()

    const handleChangeTab = (id) => {
        handleChangeTabRight(ACTION_TYPE.SET_TAB_BAR_RIGHT_ACTIVE, id);
    }

    return (
        <Fragment>
            {isShowBar &&
                <div className={`${styles.barR} ${state?.infoSong?.id ? styles.hasPlayer : ''} bar-right`} ref={refBar}>
                    <div className={styles.br__container}>
                        <div className={styles.br__header}>
                            <div className={styles.br__hflex}>
                                <div className={styles.br__htab}>
                                    {listTab && listTab.length &&
                                        listTab.map((item, index) => {
                                            return (
                                                <div key={index} className={`${styles.br__htitem} ${tabBarRightActive == item ? styles.active : ''}`} onClick={() => handleChangeTab(item)}>
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
            }

            <div className={styles.barF}>
                <PlayerBar />
            </div>
        </Fragment>
    )
}
export default memo(BarContent)