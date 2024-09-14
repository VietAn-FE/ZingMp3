import styles from './SettingHeader.module.scss'
import ToggleButton from '../../../../../components/Button/ToggleButton'
import RadioButton from '../../../../../components/Button/RadioButton'
import RangeButton from '../../../../../components/Button/RangeButton'
import { memo } from 'react'
function DropdownTPN() {
    const dataRadio = [
        {
            name:'cln',
            label: 'Thường (128 kbps)',
            checked: true,
        },
        {
            name:'cln',
            label: 'Cao (320 kbps)',
            checked: false,
        },
        {
            name:'cln',
            label: 'Lossless',
            checked: false,
        }
    ]
    return (
        <div>
            <p className={styles.subTitle}>Chuyển bài</p>
            <div className={styles.subBox}>
                <div className={styles.subRow}>
                    <span>Chuyển bài mượt mà (Crossfade)</span>
                    <ToggleButton id="cbmm"/>
                    
                </div>
                <div>
                    <RangeButton valueRange={50}/>
                    <p className={styles.subTime}>8 giây</p>
                </div>
            </div>
            <div className={styles.subBox}>
                <div className={styles.subRow}>
                    <span>Bỏ qua khoảng lặng (Gapless)</span>
                    <ToggleButton id="bqkl"/>
                </div>

                <p className={styles.subNote}>Loại bỏ đoạn im lặng khi chuyển bài hát</p>
            </div>
            <div className={styles.subBoxItem}>
                <p className={styles.subTitle}>Chất lượng nhạc</p>
                <RadioButton dataRadio={dataRadio}/>
            </div>
            <div className={styles.subBoxItem}>
                <p className={styles.subTitle}>Phát nhạc</p>
                <div className={styles.subRow}>
                    <span>Luôn phát nhạc toàn màn hình</span>
                    <ToggleButton id="tmh"/>
                </div>
            </div>
        </div>
    )
}
export default memo(DropdownTPN)