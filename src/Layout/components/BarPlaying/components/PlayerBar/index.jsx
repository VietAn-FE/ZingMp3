import { useTabSongContext } from '../../../../../context/tabsong'
import { useClassLayoutContext } from '../../../../DefaultLayout'
import ActionRight from './ActionRight'
import styles from './BP.module.scss'
import ControlBar from './ControlBar'
import InfoSong from './InfoSong'
import { Fragment, memo, useEffect, useMemo } from 'react'
function PlayerBar() {
    const { selectorTabSong, actionTabSong } = useTabSongContext();
    const { songPlayer, listSongChoice, volumn, isPlaying, modeMixSong, isReverseListSong } = selectorTabSong;
    const { handleSetVolumnPlayer } = actionTabSong;
    const classLayoutContext = useClassLayoutContext();

    let dataSong = useMemo(() => {
        return listSongChoice.length && songPlayer.radioId ? listSongChoice.find((item) => item.radioId == songPlayer.radioId) : [];
    }, [songPlayer, listSongChoice]);

    useEffect(() => {
        if (dataSong.radioId) {
            classLayoutContext.setIsHasPlayer(true);
        }
    }, [dataSong])

    return (
        <Fragment>
            {
                dataSong && dataSong.radioId &&
                <div className={styles.pb__wrapper}>
                    <div className={styles.pb__controlContainer}>
                        <InfoSong data={dataSong} />
                        <ControlBar data={dataSong} />
                        <ActionRight volumn={volumn} setVolumnPlayer={handleSetVolumnPlayer} />
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default memo(PlayerBar)