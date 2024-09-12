import Header from "../components/Header"
import Navigation from "../components/Nav"
import BarPlaying from "../components/BarPlaying"
import { Fragment, useState } from "react"
import { AuthContext } from "../../pages"
import './../../GlobeStyle/style.scss'
import useSessionStorage from "../../hook/useStorage"
import { ListKeyStoreage } from "../../constants/constants"

function DefaultLayout({ children }) {
    const dataSongIsPlaying = useSessionStorage(ListKeyStoreage.SONG_PLAY);
    const hasPlayer = dataSongIsPlaying?.stateSesstion;
    const [isShowBar, setIsShowBar] = useState(true); 
    return (
        <div className={`${hasPlayer? 'has-player' :''}  ${isShowBar? 'show-bar-right' :''} zm-layout `}>
            <Header />
            <Navigation />
            <main className="zm-main-page">
                {children}
            </main>
            <BarPlaying isShowBar={isShowBar} setIsShowBar={setIsShowBar}/>
        </div>
    )
}

export default DefaultLayout