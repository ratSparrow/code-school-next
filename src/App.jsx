import { RouterProvider } from "react-router"
import { routes } from "./react-router/Routes"
import "./styles/banner/Banner.scss"


function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
