import { createContext, useCallback, useContext, useEffect, useReducer } from "react"
import redurectTabSong from "./reducer";
import INIT_STATE from "./constant";
import ActionTabSong from "./action";
import SelectorTabSong from "./selector";
import useSessionStorage from "../../hook/useStorage";
import { ListKeyStoreage } from "../../constants/constants";

const TabSongContext = createContext({});

const TabSongProvider = ({
    children
}) => {

    const playListSongStorage = useSessionStorage(ListKeyStoreage.PLAY_LIST_SONG);
    const getInitalState = () => {
        return playListSongStorage.stateSesstion ? playListSongStorage.stateSesstion : INIT_STATE
    }

    const [state, dispath] = useReducer(redurectTabSong, getInitalState());

    useEffect(() => {
        playListSongStorage.setStateSession({ ...state, isPlaying: false });
    }, [state])

    const getValueContext = () => {
        return {
            state,
            dispath
        }
    }

    return (
        <TabSongContext.Provider
            value={getValueContext()}
        >
            {children}
        </TabSongContext.Provider>
    )
}

export const useTabSongContext = () => {
    const tabSongContext = useContext(TabSongContext);
    if (!tabSongContext) {
        throw new Error('useTabSongContext must be with in TabSongProvider')
    }

    const { state, dispath } = tabSongContext;
    const actionTabSong = ActionTabSong(dispath), selectorTabSong = SelectorTabSong(state)
    return {
        state,
        dispath,
        actionTabSong,
        selectorTabSong
    }
}

export default TabSongProvider