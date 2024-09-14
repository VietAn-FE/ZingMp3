import { type } from "@testing-library/user-event/dist/type"

const ActionTabSong = (dispath) => {
    return {
        handleSetPlaying: (action,payload) => {
            dispath({
                type: action,
                payload,
            })
        },
        handleChangeTabRight:(action,payload) => {
            dispath({
                type: action,
                payload,
            })
        },
        handleAddSongListChoice: (action,payload) => {
            dispath({
                type: action,
                payload,
            })
        },
        handleSetSongPlayer: (action,payload) =>{
            dispath({
                type: action,
                payload,
            })
        },
        handleSetVolumnPlayer: (action,payload)=>{
            dispath({
                type: action,
                payload,
            })
        },
        handleSetReverseListSong: (action,payload)=>{
            dispath({
                type: action,
                payload,
            })
        },
        handleSetRepeatSong: (action,payload)=>{
            dispath({
                type: action,
                payload,
            })
        },
        /// todo action
    }
}

export default ActionTabSong;