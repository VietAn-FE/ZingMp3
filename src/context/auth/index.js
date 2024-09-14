import { createContext, useCallback, useContext, useState } from "react"
import useSessionStorage from "../../hook/useStorage";
import { ListKeyStoreage } from "../../constants/constants";
import { ListUser } from "../../afakeData/dataFake";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    let sessionStorageUser = useSessionStorage(ListKeyStoreage.ACCESS_TOKEN, null, isLogin);

    let dataUserLogin = {
        ...sessionStorageUser,
        userInfo: ListUser[0]
    }


    const getDataContext = useCallback(() => {
        return {
            dataUserLogin,
            setIsLogin,
        }
    }, [dataUserLogin])


    return (
        <AuthContext.Provider value={getDataContext()}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider