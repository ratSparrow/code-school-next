import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layout/HomeLayout";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>
    }
])