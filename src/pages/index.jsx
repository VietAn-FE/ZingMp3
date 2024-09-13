import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";
import DefaultLayout from "../Layout/DefaultLayout"
import { createContext, Fragment, useCallback, useEffect, useState } from "react";
import '../GlobeStyle/style.scss'
import { ListUser } from "../afakeData/dataFake";
import { ListKeyStoreage } from "../constants/constants";
import useSessionStorage from "../hook/useStorage";
import ChangeTitleDOM from "../common/ChangeTitleDOM";

export const AuthContext = createContext();

const Pages = () => {
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
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((item, index) => {
                            const Page = item.component;
                            let Layout = DefaultLayout

                            if (item.layout === null) {
                                Layout = Fragment
                            }

                            return (
                                <Route key={index} path={item.path} element={
                                    <Layout>
                                        <ChangeTitleDOM title={item.title}/>
                                        <Page />
                                    </Layout>
                                } />
                            )
                        })}
                    </Routes>
                </div>
            </Router>

        </AuthContext.Provider>
    );
}

export default Pages