import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ChangeTitleDOM = ({title}) => {
    const location = useLocation();
    useEffect(() => {
        if (!title) {
            return;
        }
        document.title = title;
    }, [title, location])
    
    return;
}

export default ChangeTitleDOM