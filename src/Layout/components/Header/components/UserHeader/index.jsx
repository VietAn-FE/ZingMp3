import { Link } from "react-router-dom"
import styles from './UserHeader.module.scss'
import useContextLogin from "../../../../../hook/useContextLogin"
import MenuUser from "./MenuUser";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../../../../hook/useClickOutside";

function UserHeader() {
  const contextLogin = useContextLogin();
  let navigate = useNavigate();
  const [isShowDropdown, setIsShowDropdown] = useState(false)
  const isLogin = contextLogin?.dataUserLogin?.stateSesstion?.status;
  const dataUser = contextLogin?.dataUserLogin?.userInfo


  const refUser = useRef();

  const useCOS = useClickOutside(refUser,setIsShowDropdown)

  const hanleClickUser = () => {
    if (isLogin) {
      setIsShowDropdown(!isShowDropdown);
      return
    }
    return navigate('/login')
  }

  return (
    <div className={styles.user} ref={refUser}>
      <div className={styles.avt}>
        <div className={styles.btn} onClick={hanleClickUser}>
          <figure className={styles.image}>
            <img src={isLogin ? dataUser?.avatar : "https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.10.47/static/media/user-default.3ff115bb.png"} alt="" />
          </figure>
        </div>
      </div>
      {isLogin && isShowDropdown &&
        <MenuUser dataUser={contextLogin?.dataUserLogin?.userInfo} />
      }
    </div>
  )
}

export default memo(UserHeader)