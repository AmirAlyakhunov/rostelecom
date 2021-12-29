import Home from "../pages/home";
import Auth from "../pages/auth/auth";
import Registration from "../pages/registration/registration";
import ServicePage from "../pages/servicePage/servicePage";
import Error404 from "../pages/404/error404";


export const public_route = [
    {path: '/', element: <Home/>},
    {path: '/login', element: <Auth/>},
    {path: '/registration', element: <Registration/>},
    {path: '/*', element: <Error404/>},
]

export const private_route = [
    {path: '/', element: <Home/>},
    {path: '/service/:id', element: <ServicePage/>},
    {path: '/*', element: <Error404/>},
]
