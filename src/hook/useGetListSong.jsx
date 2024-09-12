import { useEffect, useState } from "react"
import { ListLabelTabBarRight, ListTypeTabBarRight, StatusFetching } from "../constants/constants";
import ServiceSong from '../api/serverSong'

const useGetListSong = (path, url) => {
    const [data, setData] = useState([]);
    const [statusFetching, setStatusFetching] = useState(StatusFetching.FETCHING);

    useEffect(() => {
        let pathApi = "dsp";
        if (path == ListTypeTabBarRight.NGHE_GAN_DAY) {
            pathApi = 'ngd';
        }

        (async () => {
            try {
                const dataPromise = await ServiceSong.getListSong(pathApi);
                if (!dataPromise) {
                    setData([]);
                    setStatusFetching(StatusFetching.ERROR);
                    return;
                }
                setData(dataPromise);
                setStatusFetching(StatusFetching.SUCCESS);
            } catch (error) {
                setStatusFetching(StatusFetching.ERROR);
            }

        })()

    }, [path, url])

    return {
        data,
        statusFetching
    }

}

export default useGetListSong