import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home"
import Gallery from "../pages/gallery"
import Video from "../pages/video"
import Subscribe from "../pages/subscribe"
import About from "../pages/about"
import Error404 from "../pages/error404"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/gallery',
        element: <Gallery />
    },
    {
        path: '/video',
        element: <Video />
    },
    {
        path: '/subscribe',
        element: <Subscribe />
    },
    {
        path: '/about',
        element: <About />
    }
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes;