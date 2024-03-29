import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home"
import Gallery from "../pages/gallery"
import Video from "../pages/video"
import Subscribe from "../pages/subscribe"
import About from "../pages/about"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
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