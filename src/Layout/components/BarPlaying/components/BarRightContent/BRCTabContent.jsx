import PlayList from "./PlayList";
import ListSong from "./ListSong";
import { Fragment, useContext } from "react";
import { TabSongContext } from "../..";
import { ListTypeTabBarRight } from "../../../../../constants/constants";

const BRCTabContent = () => {

    return (
        < Fragment>
            <PlayList />
            <ListSong />
        </Fragment>
    )
}

export default BRCTabContent;