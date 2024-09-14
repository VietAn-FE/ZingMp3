export const DropSeting = {
    TRINH_PHAT_NHAC: 1,
    GIAO_DIEN: 2
}

export const ListTypeTabBarRight = {
    DANH_SACH_PHAT: 1,
    NGHE_GAN_DAY: 2,
}

export const ListLabelTabBarRight = {
    [ListTypeTabBarRight.DANH_SACH_PHAT]: 'Danh sách phát',
    [ListTypeTabBarRight.NGHE_GAN_DAY]: 'Nghe gần đây'
}

export const ListKeyStoreage = {
    ACCESS_TOKEN: 'access_token',
    PLAY_LIST_SONG: 'PLAY_LIST_SONG',
}

export const StatusFetching = {
    NONE: 0,
    FETCHING: 1,
    SUCCESS: 2,
    ERROR: 3,
    DONE: 4
}

export const typeItemSong = {
    ITEM_LISTPLAY: 1,
    ITEM_NORMAL: 2
}

export const ListMp3 = [
    {
        name: 'Bông hoa đẹp nhất',
        path: '/mp3/bhdn.mp3'
    },
    {
        name: 'Hạ còn vương nắng',
        path: '/mp3/hcvn.mp3'
    },
    {
        name: 'Hẹn em kiếp sau',
        path: '/mp3/heks.mp3'
    },
    {
        name: '2PM',
        path: '/mp3/2h.mp3'
    },
]

export const repeatAudio = {
    NONE: 0,
    SONG: 1,
    PLAYLIST: 2,
}

export const sizeToolTipSong = {
    height: 430,
    width: 280
};