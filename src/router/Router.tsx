import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/about/About";
import { Proyects } from "../pages/proyects/Proyects";
import { Home } from "../pages/home/Home";


export const menuRoutes = [

    {
        to: '/',
        icon: 'fa-solid fa-user',
        component: <Home />,
        className: '   mt-3 md:rotate-[-10deg]'
    },
    {
        to: '/Sobre-Mi',
        icon: 'fa-solid fa-user',
        component: <About />,
        className: ' md:mt-3 md:rotate-[-10deg]'
    },
    {
        to: '/Proyectos',
        icon: 'fa-solid fa-briefcase',
        component: <Proyects />,
        className: ' md:rotate-[-5deg]'
    },
    {
        to: 'https://drive.google.com/file/d/1R907G1IUpCtEnCYb85BpUu8yafyGStsU/view?usp=sharing',
        icon: 'fa-solid fa-file-invoice',
        component: null,
        className: ' md:rotate-[5deg]'
    },
    {
        to: 'https://www.linkedin.com/in/nestor-raul-camacho/',
        icon: 'fa-brands fa-linkedin-in',
        component: null,
        className: ' md:mt-3 md:rotate-[10deg]'
    },

]


export const router = createBrowserRouter([

    {

        children: [
            ...menuRoutes.map(route => ({
                path: route.to,
                element: route.component
            }))
        ]
    }


]) 