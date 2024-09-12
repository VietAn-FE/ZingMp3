import { Fragment, useContext, useState } from "react";
import { TabSongContext } from "../..";
import useGetListSong from "../../../../../hook/useGetListSong";
import styles from './BRC.module.scss'
import { ListTypeTabBarRight, StatusFetching, typeItemSong } from "../../../../../constants/constants";
import ItemLoading from "./ItemLoading";
import ItemPlayList from "./ItemPlayList";
import ToggleButton from "../../../../../components/Button/ToggleButton";
const ListSong = () => {
    const dataBarContent = useContext(TabSongContext);
    const dataSong = useGetListSong(dataBarContent.tabActiveBar);

    const [isShowSugget, setIsShowSugget] = useState(true);

    const handleShowSugget = (status) => {
        if (dataBarContent.tabActiveBar != ListTypeTabBarRight.DANH_SACH_PHAT) {
            return;
        }
        setIsShowSugget(status)
    }

  

    let dataSongRender = dataSong?.data?.items && dataSong?.data?.items.length ? dataSong?.data?.items : [];
    if (dataBarContent.tabActiveBar == ListTypeTabBarRight.DANH_SACH_PHAT) {
        if (dataSongRender.length && dataBarContent.dataSongPlayList.stateSesstion?.length) {
            dataSongRender = dataSongRender.filter((item) => {
                return !dataBarContent.dataSongPlayList.stateSesstion.some((items) => items.radioId == item.radioId)
            })
        }
    }

    return (
        <div className={styles.pll__wrapper}>
            {dataSong.statusFetching == StatusFetching.FETCHING
                &&
                <Fragment>
                    <ItemLoading />
                    <ItemLoading />
                    <ItemLoading />
                </Fragment>
            }
            {dataBarContent.tabActiveBar == ListTypeTabBarRight.DANH_SACH_PHAT &&
                <div className={styles.pll__flex}>
                    <div>
                        <p>Tự động phát</p>
                        <span>Danh sách bài hát gợi ý</span>
                    </div>
                    <ToggleButton id={'tdp'} onToggle={handleShowSugget} isChecked={isShowSugget} />
                </div>
            }

            {dataSong.statusFetching == StatusFetching.SUCCESS && isShowSugget &&
                <div className={styles.pll__list}>
                    {
                        dataSongRender && dataSongRender.length &&
                        dataSongRender.map((item, index) => {
                            return (
                                <ItemPlayList data={item} key={index} typeItem={typeItemSong.ITEM_NORMAL} tabActive={dataBarContent.tabActiveBar} idItemShowTT={dataBarContent.idItemShowTT} setIdItemShowTT={dataBarContent.setIdItemShowTT} />
                            )
                        })

                    }
                </div>
            }

        </div>
    )
}
export default ListSong