import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layout/HomeLayout";
import Notfound from "../pages/Notfound/Notfound";
import Homepage from "../pages/homepage/Homepage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Services from "../pages/services/Services";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },

        ]
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/services",
        element: <Services />
    },
    {
        path: "*",
        element: <Notfound />
    },

])