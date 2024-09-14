import styles from './BP.module.scss'
import RangeButton from '../../../../../components/Button/RangeButton'
import { memo, useContext } from 'react';
import { TabSongContext } from '../..';
import { useTabSongContext } from '../../../../../context/tabsong';
import { ACTION_TYPE } from '../../../../../context/tabsong/constant';
import { useClassLayoutContext } from '../../../../DefaultLayout';

const ActionRight = ({ volumn, setVolumnPlayer }) => {
    const classLayoutContext = useClassLayoutContext();

    const handleProgressChange = (e) => {
        setVolumnPlayer(ACTION_TYPE.SET_VOLUMN_PLAYER, e.target.value);
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
                        <RangeButton valueRange={volumn} onChangeProcessBar={handleProgressChange} />
                    </div>
                </div>
            </div>
            <div className={styles.pb__ritem}>
                <span className={styles.pb__rdivide}></span>
            </div>
            <div className={styles.pb__ritem}>
                <button className={`${styles.pb__rlistMusic} ${classLayoutContext.isShowBar ? styles.active : ''}`} onClick={() => classLayoutContext.setIsShowBar(!classLayoutContext.isShowBar)}>

                    <i className="icon ic-list-music"></i>
                </button>
            </div>
        </div>
    )
}

export default memo(ActionRight)