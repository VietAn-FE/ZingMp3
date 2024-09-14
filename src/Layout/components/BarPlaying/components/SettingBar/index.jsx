import { memo, useEffect, useRef, useState } from 'react'
import styles from './../../BarPlaying.module.scss'
import useClickOutside from '../../../../../hook/useClickOutside';

const listTab = [
    {
        icon: <i className="icon ic-delete"></i>,
        label: 'Xóa danh sách phát'
    },
    {
        icon: <i className="icon ic-16-Add"></i>,
        label: 'Thêm vào playlist',
        iconRight: <i className="icon ic-go-right"></i>
    },
]

function SettingBar() {
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const refDropdown = useRef();

    const useCOS = useClickOutside(refDropdown,setIsShowDropdown)


    return (
        <div className={styles.br__hsetting} ref={refDropdown}>
            <div className={styles.br__hsBtn} onClick={() => setIsShowDropdown(!isShowDropdown)}>
                <i className="icon ic-more"></i>
            </div>
            {isShowDropdown &&

                <div className={styles.stb__menu}>
                    <div className={styles.stb__list}>
                        {listTab && listTab.length &&
                            listTab.map((item, index) => {
                                return (
                                    <div className={styles.stb__item} key={index}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                        <span className={styles.iconRight}>
                                            {item.iconRight && item.iconRight}
                                        </span>
                                    </div>
                                )

                            })}


                    </div>
                </div>
            }
        </div>

    )
}

export default memo(SettingBar)