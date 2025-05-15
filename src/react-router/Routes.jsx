import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layout/HomeLayout";
import Notfound from "../pages/Notfound/Notfound";
import Homepage from "../pages/homepage/Homepage";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        children:[
            {
                path:"/",
                element:<Homepage/>
            }
        ]
    },
    {
        path:"*",
        element:<Notfound/>
    },
])