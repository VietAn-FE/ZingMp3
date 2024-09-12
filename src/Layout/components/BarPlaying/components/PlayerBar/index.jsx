
import { TabSongContext } from '../..'
import { ListSongDSP } from '../../../../../afakeData/dataFake'
import ActionRight from './ActionRight'
import styles from './BP.module.scss'
import ControlBar from './ControlBar'
import InfoSong from './InfoSong'
import { Fragment, memo, useContext, useState } from 'react'
function PlayerBar() {
    const dataBarContent = useContext(TabSongContext);
    const [volume,setVolume] = useState(100);

    const songInfo = dataBarContent?.dataSongIsPlaying?.stateSesstion
    return (
        <Fragment>
            {
                dataBarContent?.dataSongIsPlaying?.stateSesstion &&
                <div className={styles.pb__wrapper}>
                    <div className={styles.pb__controlContainer}>
                        <InfoSong data={songInfo} />
                        <ControlBar data={songInfo} volume={volume}/>
                        <ActionRight data={songInfo} volume={volume} setVolume={setVolume}/>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default memo(PlayerBar)