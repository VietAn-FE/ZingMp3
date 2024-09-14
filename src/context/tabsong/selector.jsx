const SelectorTabSong = (state) => {
    return {
        isPlaying: state.isPlaying,
        tabBarRightActive: state.tabBarRightActive,
        listSongChoice: state.listSongChoice,
        listSongReverse: state.listSongReverse,
        isReverseListSong: state.isReverseListSong,
        modeRepeatSong: state.modeRepeatSong,
        volumn:state.volumn,
        songPlayer: state.songPlayer,
    }
}

export default SelectorTabSong;