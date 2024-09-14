import { memo, useEffect, useRef, useState } from 'react'
import styles from './SettingHeader.module.scss'
import { ListSetting } from '../../constants';
import MenuDropItem from './MenuDropItem';
import useClickOutside from '../../../../../hook/useClickOutside';
function SettingHeader() {
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const dropSetingRef = useRef();

    const useCOS = useClickOutside(dropSetingRef,setIsShowDropdown)
    
    return (
        <div className={styles.setting} ref={dropSetingRef}>
            <button className={styles.btn} tabIndex="0" onClick={() => setIsShowDropdown(!isShowDropdown)}>
                <i className={` ${styles.icon} icon ic-settings`}></i>
            </button>
            {
                isShowDropdown &&
                <div className={styles.dropdown} >
                    <ul className="menu-list">
                        {ListSetting && ListSetting.length && ListSetting.filter(n => n.isDropdown).map((item, index) => {
                            return (
                                <MenuDropItem key={index} data={item} />

                            )
                        })}
                    </ul>
                    
                    <div className={styles.lineSepa}></div>
                    <footer className="footer">
                        <ul className={styles.footerMenu}>
                            {ListSetting && ListSetting.length && ListSetting.filter(n => !n.isDropdown).map((item, index) => {
                                return (
                                    <MenuDropItem key={index} data={item} />

                                )
                            })}
                        </ul>
                    </footer>
                </div>
            }

        </div>
    )
}

export default memo(SettingHeader)