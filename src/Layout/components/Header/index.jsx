import { Link } from 'react-router-dom'
import SearchBox from './components/SearchBox'
import SettingHeader from './components/SettingHeader'
import UserHeader from './components/UserHeader'
import styles from './Header.module.scss'

function Header() {
  
  return (
    <header className={`${styles.wrapper} header-page`}>
      <div className={styles.level}>
        <div className={styles.levelLeft}>
          <button className={styles.btnNav} tabIndex="0">
            <i className="icon ic-back"></i>
          </button>
          <button className={styles.btnNav} tabIndex="0">
            <i className="icon ic-forward"></i>
          </button>
          <SearchBox/>
          
        </div>
        <div className={styles.levelRight}>
          <a className={styles.upgrade} href="" target="_blank">Nâng cấp tài khoản</a>
          <div className={styles.download} >
            <a className={styles.downloadBtn} target="_blank" href="">
              <i className="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.4966 13.4203V13.6633C17.4966 14.5857 16.7489 15.3333 15.8266 15.3333H4.16658C3.24427 15.3333 2.49658 14.5857 2.49658 13.6633V5.00334C2.49658 4.08103 3.24427 3.33334 4.16658 3.33334H9.99658" stroke="currentColor" strokeLinecap="round"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.4979 11.6247C14.4103 11.7021 14.2955 11.7493 14.1696 11.75C14.1687 11.75 14.1678 11.75 14.1668 11.75C14.1659 11.75 14.165 11.75 14.1641 11.75C14.0382 11.7493 13.9233 11.7021 13.8358 11.6247L10.5043 8.70963C10.2964 8.52779 10.2754 8.21191 10.4572 8.00409C10.6391 7.79627 10.9549 7.77521 11.1628 7.95705L13.6668 10.1481V3.33334C13.6668 3.0572 13.8907 2.83334 14.1668 2.83334C14.443 2.83334 14.6668 3.0572 14.6668 3.33334V10.1481L17.1709 7.95705C17.3787 7.77521 17.6946 7.79627 17.8765 8.00409C18.0583 8.21191 18.0372 8.52779 17.8294 8.70963L14.4979 11.6247Z" fill="currentColor"></path>
                  <path d="M6 16.8333H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
              </i>
              <span>Tải bản Windows</span>
            </a>
          </div>
          <SettingHeader/>
          <UserHeader/>
          
        </div>
      </div>
    </header>
  )
}

export default Header