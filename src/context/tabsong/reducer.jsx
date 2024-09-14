import { shuffleArray } from "../../common/ultilities";
import { ACTION_TYPE } from "./constant";

const redurectTabSong = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_IS_PLAYING: {
            return {
                ...state,
                isPlaying: action.payload,
            };
        }
        case ACTION_TYPE.SET_TAB_BAR_RIGHT_ACTIVE: {

            return {
                ...state,
                tabBarRightActive: action.payload,
            };
        }
        case ACTION_TYPE.ADD_SONG_LIST_CHOICE: {
            return {
                ...state,
                listSongChoice: [...state.listSongChoice, action.payload],
                listSongReverse: [...state.listSongReverse, action.payload],
            };
        }
        case ACTION_TYPE.SET_SONG_PLAYER: {
            return {
                ...state,
                songPlayer: { ...action.payload },
            };
        }
        case ACTION_TYPE.SET_VOLUMN_PLAYER: {
            return {
                ...state,
                volumn: action.payload,
            };
        }
        case ACTION_TYPE.SET_IS_REVERSE_LIST_SONG: {
            return {
                ...state,
                isReverseListSong: action.payload,
                listSongReverse: action.payload ? shuffleArray(state.listSongChoice) : state.listSongChoice,
            };
        }
        case ACTION_TYPE.SET_IS_REPEAT_SONG: {
            return {
                ...state,
                modeRepeatSong: action.payload,
            };
        }
        
        default:
            return { ...state }
    }
}

export default redurectTabSong