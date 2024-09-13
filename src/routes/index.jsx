import HomePage from "../pages/HomePage";
import LoginPage from '../pages/LoginPage';
import LibraryPage from "../pages/LibraryPage";
import ZingChartPage from "../pages/ZingChartPage";
import RadioPage from "../pages/RadioPage";
import NewlyPage from "../pages/NewlyPage";
import HubPage from "../pages/HubPage";
import Top100Page from "../pages/Top100Page";

export const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        title: 'Trang chủ'
    },
    {
        path: '/login',
        component: LoginPage,
        layout: null,
        title: 'Đăng nhập'
    },
    {
        path: '/mymusic/:userId',
        component: LibraryPage,
        title: 'Thư viện'
    },
    {
        path: '/zing-chart',
        component: ZingChartPage,
        title: 'Zing Chart'
    },
    {
        path: '/radio',
        component: RadioPage,
        title: 'Radio'
    },
    {
        path: '/moi-phat-hanh',
        component: NewlyPage,
        title: 'BXH Nhạc Mới'
    },
    {
        path: '/hub',
        component: HubPage,
        title: 'Chủ Đề & Thể Loại'
    },
    {
        path: '/top100',
        component: Top100Page,
        title: 'Top 100'
    },
]