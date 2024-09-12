import ToggleButton from '../../../../../components/Button/ToggleButton'
import styles from './SettingHeader.module.scss'

function DropdownGD() {
    return (
        <div>
            <p className={styles.subTitle}>Chủ đề</p>
            <div className={styles.subThemeList}>
                <div className={styles.subThemeListItem}>
                    <div className={styles.subTIAvt}></div>
                    <span>Tím</span>
                </div>
            </div>
            <div className={styles.subBoxItem}>
                <div className={styles.subRow}>
                    <span>Hiệu ứng chuyển động</span>
                    <ToggleButton id="hucd"/>
                </div>
            </div>
        </div>
    )
}
export default DropdownGD