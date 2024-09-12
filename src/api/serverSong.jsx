import { apiFetchData } from "../common/helped"

export default{
    getListSong : (path, url) => {
        const requestOption = {

        }
        return apiFetchData(requestOption, path, url)
    }
}