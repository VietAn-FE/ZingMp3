import { useEffect, useRef, useState } from 'react'
import styles from './SearchBox.module.scss'
import SuggetList from './SuggetList'
import useClickOutside from '../../../../../hook/useClickOutside';
function SearchBox() {
    const [valueSearch, setValueSearch] = useState('');
    const [isShowSugget, setIsShowSugget] = useState(false)
    const searchRef = useRef(null);

    const useCOS = useClickOutside(searchRef,setIsShowSugget)


    const handleSeach = (value) => {
        setValueSearch(value)
    }

    const handleShowSeach = () => {
        setIsShowSugget(true)
    }

    const handleClearSeachInput = () => {
        setValueSearch('')
    }

    return (
        <form className={`${styles.search} ${isShowSugget && styles.show}`} ref={searchRef}>
            <div className={styles.container}>
                <button className={styles.btn} tabIndex="0">
                    <i className={`${styles.icon} icon ic-search`}></i>
                </button>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." value={valueSearch} onChange={(e) => handleSeach(e.target.value)} onFocus={handleShowSeach} />
                    {valueSearch &&
                        <span className={styles.clearSeach} onClick={handleClearSeachInput}>
                            <i className="icon ic-close"></i>
                        </span>
                    }


                </div>
            </div>
            {isShowSugget &&
                <div className={styles.sugget}>
                    <SuggetList valueSearch={valueSearch} />
                </div>
            }

        </form>
    )
}

export default SearchBox