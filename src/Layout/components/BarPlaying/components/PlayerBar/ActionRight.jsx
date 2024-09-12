import styles from './BP.module.scss'
import RangeButton from '../../../../../components/Button/RangeButton'
import { useContext } from 'react';
import { TabSongContext } from '../..';
const ActionRight = ({ data, volume, setVolume }) => {

    const dataBarContext = useContext(TabSongContext)

    const handleProgressChange = (e) => {
        setVolume(e.target.value);
    };

    return (
        <div className={styles.pb__right}>
            <div className={styles.pb__ritem}>
                <button className="zm-btn zm-tooltip-btn btn-mv is-hover-circle button" disabled="">
                    <i className="icon ic-mv"></i>
                </button>
            </div>
            <div className={styles.pb__ritem}>
                <button className="zm-btn zm-tooltip-btn btn-karaoke is-hover-circle button" >
                    <i className="icon ic-karaoke"></i>
                </button>
            </div>
            <div className={styles.pb__ritem}>
                <button className="zm-btn zm-tooltip-btn btn-restore is-hover-circle button" >
                    <i className="icon ic-restore"></i>
                </button>
            </div>
            <div className={styles.pb__ritem}>
                <div className={styles.pb__rvolume}>
                    <button className="zm-btn zm-tooltip-btn btn-volume is-hover-circle button" >
                        <i className="icon ic-volume"></i>
                    </button>
                    <div className={styles.pb__rprocess}>
                        <RangeButton valueRange={volume} onChangeProcessBar={handleProgressChange} />
                    </div>
                </div>
            </div>
            <div className={styles.pb__ritem}>
                <span className={styles.pb__rdivide}></span>
            </div>
            <div className={styles.pb__ritem}>
                <button className={`${styles.pb__rlistMusic} ${dataBarContext.isShowBar ? styles.active : ''}`} onClick={() => dataBarContext.setIsShowBar(!dataBarContext.isShowBar)}>

                    <i className="icon ic-list-music"></i>
                </button>
            </div>
        </div>
    )
}

export default ActionRight