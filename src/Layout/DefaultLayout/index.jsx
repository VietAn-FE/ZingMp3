import Header from "../components/Header"
import Navigation from "../components/Nav"
import BarPlaying from "../components/BarPlaying"
import { createContext, useContext, useState } from "react"
import './../../GlobeStyle/style.scss'
export const ClassLayoutContext = createContext();
function DefaultLayout({ children }) {
    const [isShowBar, setIsShowBar] = useState(true);
    const [isHasPlayer, setIsHasPlayer] = useState(false);
    const getValueContext = () => {
        return {
            isShowBar,
            setIsShowBar,
            isHasPlayer,
            setIsHasPlayer
        }
    }
    return (
        <div className={`${isHasPlayer ? 'has-player' : ''}  ${isShowBar ? 'show-bar-right' : ''} zm-layout `}>
            <ClassLayoutContext.Provider value={getValueContext()}>
                <Header />
                <Navigation />
                <main className="zm-main-page">
                    {children}
                </main>
                <BarPlaying/>
            </ClassLayoutContext.Provider>
        </div>
    )
}


export const useClassLayoutContext = () => {
    const useContextLO = useContext(ClassLayoutContext);
    return { ...useContextLO }
}

export default DefaultLayout