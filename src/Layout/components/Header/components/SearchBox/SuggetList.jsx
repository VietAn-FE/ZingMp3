import { Link } from 'react-router-dom';
import { default as useApi } from '../../../../../api/serverSearch'
import styles from './SearchBox.module.scss'
import { memo } from 'react';

function SuggetList({ valueSearch }) {
    const isSearch = valueSearch ? true : false;
    let data = [
        {
            label: `Tìm kiếm: \" ${valueSearch} \"`,
            link: `/tim-kiem/tat-ca?q=${valueSearch}`
        }
    ]
    if (!isSearch) {
        data = useApi.getSuggetSearch();
    }
    return (
        <div className={styles.suggetList}>
            <p className={styles.suggetTitle}>{isSearch ? 'Từ khóa liên quan' : 'Đề xuất cho bạn'}</p>
            {data && data.length &&
                data.map((item, idx) => {
                    return (
                        <Link className={styles.suggetItem} key={idx} to={item.link}>
                            <i className={`${styles.icon} ${isSearch ? 'ic-search' : 'ic-trend'}`}></i>
                            <span className='text'>{item.label}</span>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default memo(SuggetList)