import styles from './../../BarPlaying.module.scss'
import useContextLogin from "../../../../../hook/useContextLogin"
import BRCNonLogin from "./BRCNonLogin";
import BRCTabContent from "./BRCTabContent";
import { memo } from "react";
function BarRightContent() {
    const contextLogin = useContextLogin();
    let isLogin = contextLogin?.dataUserLogin?.stateSesstion?.status;

    return (
        <div className={`${styles.brc__wraper}`}>
            {
                !isLogin ?
                    <BRCNonLogin />
                    :
                    <BRCTabContent />

            }


        </div>
    )

}

export default memo(BarRightContent)