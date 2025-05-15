import { RouterProvider } from "react-router"
import { routes } from "./react-router/Routes"


function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
