import Home from "../pages/home";
import Auth from "../pages/auth/auth";
import Registration from "../pages/registration/registration";
import ServicePage from "../pages/servicePage/servicePage";


export const public_route = [
    {path: '/', element: <Home/>},
    {path: '/login', element: <Auth/>},
    {path: '/registration', element: <Registration/>},
]

export const private_route = [
    {path: '/', element: <Home/>},
    {path: '/service/:id', element: <ServicePage/>},
]
