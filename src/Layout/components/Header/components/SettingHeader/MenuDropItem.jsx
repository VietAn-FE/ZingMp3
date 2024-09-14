import styles from './SettingHeader.module.scss'
import DropdownTPN from './DropdownTPN'
import DropdownGD from './DropdownGD'
import { DropSeting } from '../../../../../constants/constants'
import { memo, useState } from 'react'
function MenuDropItem({ data }) {
    const [isShowDropdown, setIsShowDropdown] = useState(false)

    const LayoutDropDown = {
        [DropSeting.TRINH_PHAT_NHAC]: DropdownTPN,
        [DropSeting.GIAO_DIEN]: DropdownGD
    }

    let Dropdown = LayoutDropDown[data.dropLayout]

    return (
        <>
            <li className={styles.itemMenu} onMouseEnter={() => setIsShowDropdown(true)} onMouseLeave={() => setIsShowDropdown(false)}>
                <button className={styles.link}>
                    <span className={styles.iconLeft}>
                        {data.icon}
                    </span>
                    <span>{data.label}</span>
                    <span className={styles.iconRight}>
                        {data.iconRight}
                    </span>
                </button>
                {data.isDropdown && isShowDropdown &&
                    <div className={styles.listSub}>
                        <Dropdown />
                    </div>
                }
            </li>
        </>
    )
}
export default memo(MenuDropItem)