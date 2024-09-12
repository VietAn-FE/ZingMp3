import { ListSongDSP, ListSongNGD, ListSongSugget, ListUser, suggetSearchData } from '../afakeData/dataFake'

const fakeAPIGetUser = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFind = ListUser.find((item) => {
                return item.username == user.username && item.password == user.password
            }) || null;


            const itemData = {
                acccess_token: '',
                status: false,
                dataUser: userFind,
            }
            if (userFind) {
                itemData.acccess_token = 'QAGT123FFN'
                itemData.status = true
            }
            resolve(itemData)
        }, 1500);
    });
}

export const getUserAuthentication = async (user) => {
    try {
        const promiseAPI = await fakeAPIGetUser(user);
        return promiseAPI
    } catch (error) {

    }

}

export const getSuggetSearch = () => {
    return suggetSearchData
}

export const apiFetchData = async (requestOption, path, url) => {
    //fake data
    let apiPromise = new Promise((resolve, reject) => {
        if (path == 'dsp') {
            resolve(ListSongDSP)
        } else if (path == 'ngd') {
            resolve(ListSongNGD)
        }
    })
    // let data = []
    try {
        const dataPromise = await apiPromise;
        // if (!dataPromise.ok) {
        //     return;
        // }
        // data = await dataPromise.json();
        // if (!data.Data || !data.Data.length) {
        //     return;
        // }
        return dataPromise
    } catch (error) {
        return false;
    }

}