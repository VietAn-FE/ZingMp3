import { ListTypeTabBarRight } from "../../constants/constants"

export const MODE_REPEAT_SONG = {
    NONE: 0,
    LIST: 1,
    SONG: 2
}

const INIT_STATE = {
    tabBarRightActive: ListTypeTabBarRight.DANH_SACH_PHAT,
    isPlaying: false,
    songPlayer: {
        title: '',
        thumb: '',
        author: '',
        radioId: '',
    },
    modeRepeatSong: MODE_REPEAT_SONG.NONE,
    isReverseListSong: false,
    listSongChoice: [],
    listSongReverse: [],
    volumn: 100,
}

export const ACTION_TYPE = {
    SET_TAB_BAR_RIGHT_ACTIVE: 'SET_TAB_BAR_RIGHT_ACTIVE',
    SET_IS_PLAYING: 'SET_IS_PLAYING',
    SET_SONG_PLAYER: 'SET_SONG_PLAYER',
    ADD_SONG_LIST_CHOICE: 'ADD_SONG_LIST_CHOICE',
    ADD_SONG_LIST_REVERSE: 'ADD_SONG_LIST_REVERSE',
    SET_VOLUMN_PLAYER: 'SET_VOLUMN_PLAYER',
    SET_IS_REVERSE_LIST_SONG: 'SET_IS_REVERSE_LIST_SONG',
    SET_IS_REPEAT_SONG: 'SET_IS_REPEAT_SONG',
}

export default INIT_STATE