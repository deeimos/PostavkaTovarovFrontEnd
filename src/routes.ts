import * as pages from './pages/index';
import * as paths from './utils/const';

export const authRoutes = [
    {
        path: paths.MENU_ROUTE,
        Component: pages.Menu
    },
    {
        path: paths.CLIENTS_ROUTE,
        Component: pages.Clients
    },
    {
        path: paths.SEARCH_CLIENTS_ROUTE,
        Component: pages.SearchClient
    },
    {
        path: paths.ADD_CLIENTS_ROUTE,
        Component: pages.AddClient
    },
    {
        path: paths.PROVIDERS_ROUTE,
        Component: pages.Providers
    },
    {
        path: paths.ADD_PROVIDERS_ROUTE,
        Component: pages.AddProvider
    },
    {
        path: paths.SEARCH_PROVIDERS_ROUTE,
        Component: pages.SearchProvider
    },
]

export const publicRoutes = [
    {
        path: paths.AUTH_ROUTE,
        Component: pages.Auth
    },
]