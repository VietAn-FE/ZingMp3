import styles from './BarPlaying.module.scss'
import PlayerBar from './components/PlayerBar'
import { ListTypeTabBarRight, ListLabelTabBarRight, ListKeyStoreage } from '../../../constants/constants'


import useSessionStorage from '../../../hook/useStorage'
import TabSongProvider from '../../../context/tabsong'
import BarContent from './BarContent'
import { createContext, memo } from 'react'

export const TabSongContext = createContext();

function BarPlaying() {

    return (
        <div className={styles.wrapper}>
            <TabSongProvider>
                <BarContent />
            </TabSongProvider>
        </div>
    )
}

export default memo(BarPlaying)