import { useContext } from "react";
import { AuthContext } from "../context/auth";

function useContextLogin() {
    const dataLogin = useContext(AuthContext);
    return dataLogin
}

export default useContextLogin