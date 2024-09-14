import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";
import DefaultLayout from "../Layout/DefaultLayout"
import { createContext, Fragment, useCallback, useEffect, useState } from "react";
import '../GlobeStyle/style.scss'
import { ListUser } from "../afakeData/dataFake";
import { ListKeyStoreage } from "../constants/constants";
import useSessionStorage from "../hook/useStorage";
import ChangeTitleDOM from "../common/ChangeTitleDOM";
import AuthProvider from "../context/auth";

const Pages = () => {
    return (
        <AuthProvider>
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
                                        <ChangeTitleDOM title={item.title} />
                                        <Page />
                                    </Layout>
                                } />
                            )
                        })}
                    </Routes>
                </div>
            </Router>

        </AuthProvider>
    );
}

export default Pages