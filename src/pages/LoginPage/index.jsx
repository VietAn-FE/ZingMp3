import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { default as useApiUser } from '../../api/serverUser';
import useContextLogin from '../../hook/useContextLogin';
import styles from './Login.module.scss'

function LoginPage({title}) {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [isValidate, setIsValidate] = useState({
        status: false,
        label: 'Vui lòng nhập thông tin'
    });
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
    const navigate = useNavigate();
    const contextLogin = useContextLogin();
    
    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        if (!userName.trim().length || !passWord.trim().length) {
            setIsValidate({
                status: true,
                label: 'Vui lòng nhập thông tin'
            });
            return
        }
        setIsLoadingSubmit(true);

        let userSubmit = {
            username: userName,
            password: passWord
        }
        let result = await useApiUser.getLoginUser(userSubmit);

        if (result.status && result?.acccess_token.length) {
            contextLogin.dataUserLogin.setStateSession(result);
            setIsValidate(false);
            return navigate("/")
        } else {
            setIsValidate({
                status: true,
                label: "* Sai thông tin đăng nhập"
            });
            setPassWord('');
        }
        setIsLoadingSubmit(false);
    }
  

    useEffect(() => {
        if (contextLogin?.dataUserLogin?.stateSesstion?.status) {
            return navigate("/")
        }
    }, [contextLogin])



    return (
        <div className={styles.wrapper}>
            <div className='container'>
                <div className={styles.lgcontainer}>
                    <h2 className={styles.heading}>Login</h2>
                    <h3 className={styles.des}>Have an account?</h3>
                    <form onSubmit={(e) => handleLoginSubmit(e)} className="signin-form">
                        <div className={styles.group}>
                            <input type="text" value={userName} placeholder="Username" required="" onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className={styles.group}>
                            <input id="password-field" value={passWord} type="password" placeholder="Password" required="" onChange={(e) => setPassWord(e.target.value)} />
                            <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                        </div>
                        <div className={styles.group}>
                            <button type="submit" className={styles.button}>
                                {
                                    isLoadingSubmit
                                        ?
                                        <span className={styles.iconLoading}>
                                            <i className='icon ic-24-Reload'></i>
                                        </span>
                                        : 'Sign In'
                                }
                            </button>
                        </div>
                        {isValidate.status &&
                            <p className={styles.textErr}>{isValidate.label}</p>
                        }
                        <div className={`${styles.group} ${styles.flex}`}>
                            <div className="w-50">
                                <label className={styles.checkbox}>Remember Me
                                    <input type="checkbox" />
                                </label>
                            </div>
                            <div className="w-50 text-md-right">
                                <a href="#" style={{ color: '#fff' }}>Forgot Password</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;