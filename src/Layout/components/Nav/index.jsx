import ListNavItem from './components/ListNavItem'
import ListNavSongUser from './components/ListNavSongUser'

import styles from './Nav.module.scss'
import { ListNavLeftMain, ListNavLeftSub, ListSongUser } from './constants'
import useContextLogin from '../../../hook/useContextLogin'
import { Fragment, memo } from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
    const contextLogin = useContextLogin();
    const isLogin = contextLogin?.dataUserLogin?.stateSesstion?.status

    return <div className={styles.wraper}>
        <Link className={styles.brand} to="/">
            <div className={styles.logo}></div>
        </Link>
        <div className={styles.navBarMain}>
            <ul className={styles.navBarMenu}>
                {
                    ListNavLeftMain.map((item, index) => {
                        return (
                            <ListNavItem key={index} data={item} />
                        )
                    })
                }
            </ul>

        </div>
        <div className={styles.divide}>
            <nav className={styles.navBarMain}>
                <ul className={styles.navBarMenu}>
                    {
                        ListNavLeftSub.map((item, index) => {
                            return (
                                <ListNavItem key={index} data={item} />
                            )
                        })
                    }
                </ul>
            </nav>
            {isLogin &&
                <Fragment>
                    <div className={styles.vipBanner}>
                        <div className={styles.vipBannerText}>Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</div>
                        <a className={styles.vipBannerBtn} tabIndex="0" href="" target="_blank">Nâng cấp tài khoản</a>
                    </div>

                    <nav className={styles.myMusic}>
                        <ul className={styles.navBarMenu}>
                            {ListSongUser.map((item, index) => {
                                return (
                                    <ListNavSongUser data={item} key={index} />
                                )
                            })}

                        </ul>
                    </nav>
                </Fragment>
            }


        </div>
        {isLogin &&
            <div className={styles.addPlaylist}>
                <button className={styles.addPlaylistBtn} tabIndex="0">
                    <i className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.5164 7.14319C1.32829 3.21545 3.8263 1.02782 7.72282 0.366909C10.6032 -0.121503 13.4847 -0.12767 16.3602 0.380652C20.3723 1.08984 22.7841 3.40504 23.5524 7.39215C24.1461 10.4736 24.1554 13.5879 23.5431 16.6663C22.7218 20.5669 20.1593 22.9747 16.2772 23.6331C13.3968 24.1215 10.5153 24.1277 7.63977 23.6193C3.62772 22.9102 1.20521 20.4794 0.436861 16.4923C-0.186982 13.3905 -0.126933 10.2566 0.5164 7.14319Z" fill="#141414" fillOpacity="0.2"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.25 12.75L11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18L12.75 12.75H18C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H12.75L12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6L11.25 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H11.25Z" fill="#FEFFFF"></path>
                        </svg>
                    </i>
                    <span>Tạo playlist mới</span>
                </button>
            </div>
        }
    </div>
}

export default memo(Navigation)