import images from '../../../assets/images'

export const ListNavLeftMain = [
    {
        icon: images.iconThuVien,
        label: 'Thư Viện',
        iconHover: true,
        path:'/mymusic'
    },
    {
        icon: images.iconKhamPha,
        label: 'Khám Phá',
        iconHover: false,
        path:'/'
    },
    {
        icon: images.iconZingChart,
        label: '#zingChart',
        iconHover: true,
        path:'/zing-chart'
    },
    {
        icon: images.iconRadio,
        label: 'Radio',
        iconLive: true,
        iconHover: true,
        path:'/radio'
    },
]
// Menu những trang bên trái sub
export const ListNavLeftSub = [
    {
        icon: images.iconBXH,
        label: 'BXH Nhạc Mới',
        iconHover: true,
        path:'/moi-phat-hanh'
    },
    {
        icon: images.iconChuDe,
        label: 'Chủ Đề &  Thể Loại',
        iconHover: false,
        path:'/hub'
    },
    {
        icon: images.iconTop100,
        label: 'Top 100',
        iconHover: false,
        path:'/top100'
    }
]
// Menu những trang bên trái khi login
export const ListSongUser = [
    {
        icon: images.iconUNGT,
        label: 'Nghe gần đây',
        iconHover: false,
    },
    {
        icon: images.iconUBHYT,
        label: 'Bài hát yêu thích',
        iconHover: true,
    },
    {
        icon: images.iconUPlaylist,
        label: 'Playlist',
        iconHover: false,
    },
    {
        icon: images.iconUAlbum,
        label: 'Album',
        iconHover: false,
    },
    {
        icon: images.iconUDTL,
        label: 'Đã tải lên',
        iconHover: false,
    },
]