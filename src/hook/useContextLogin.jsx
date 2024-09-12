import { useContext } from "react";
import { AuthContext } from "../pages";

function useContextLogin() {
    const dataLogin = useContext(AuthContext);
    return dataLogin
}

export default useContextLogin