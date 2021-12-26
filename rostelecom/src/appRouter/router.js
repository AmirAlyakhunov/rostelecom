import Home from "../pages/home";
import Auth from "../pages/auth/auth";


export const public_route = [
    {path: '/', element: <Home/>},
    {path: '/login', element: <Auth/>},
]

export const private_route = [
    {path: '/', element: <Home/>},
]
