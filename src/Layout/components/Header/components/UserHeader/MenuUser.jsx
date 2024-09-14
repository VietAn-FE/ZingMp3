import { memo } from 'react';
import { ListKeyStoreage } from '../../../../../constants/constants';
import useContextLogin from '../../../../../hook/useContextLogin';
import styles from './UserHeader.module.scss'
import { useNavigate } from 'react-router-dom';

function MenuUser({ dataUser }) {
    const contextLogin = useContextLogin();
    const navigate = useNavigate();

    console.log(111,dataUser);

    const handleLogout = () => {
        contextLogin?.dataUserLogin?.setStateSession(ListKeyStoreage.ACCESS_TOKEN, null);
        contextLogin?.setIsLogin(false);
        return navigate('/')
    }
    
    return (
        <div className={styles.dropdown}>
            <ul className={styles.dlist}>
                <li className={styles.duser}>
                    <div className={styles.dinfo}>
                        <div className="zm-avatar-frame" >
                            <figure className={styles.davt}>
                                <img src={dataUser?.avatar} alt={dataUser?.fullName} />
                            </figure>
                        </div>
                        <div className={styles.dname}>
                            <p>{dataUser?.fullName}</p>
                        </div>
                    </div>
                    <a className={styles.dupgrade} target="_blank" href="">Nâng cấp tài khoản</a>
                </li>
                <div className={styles.line}></div>
                <div className="user-setting-individual">
                    <h3 className={styles.dtitle}>Cá nhân</h3>
                    <ul>
                        <li className={styles.ditem}>
                            <div className={`${styles.ditemLink}`} >
                                <i className="icon ic-20-Block"></i>
                                <span>Danh sách chặn</span>
                            </div>
                        </li>
                        <li className={styles.ditem}>
                            <input id="up-button" type="file" accept="audio/*" multiple="" />
                            <label className={`${styles.ditemLink}`} htmlFor="up-button" >
                                <i className="icon ic-upload"></i>
                                <span>Tải lên</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className={styles.line}></div>
                <ul>
                    <li className={styles.ditem}>
                        <div className={`${styles.ditemLink}`} onClick={handleLogout}>
                            <i className="icon ic-log-out"></i>
                            <span>Đăng xuất</span>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
    )
}

export default memo(MenuUser)