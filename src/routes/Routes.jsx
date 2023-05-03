import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import RecipiesLayout from "../layouts/RecipiesLayout";
import Recipies from "../pages/Recipies/Recipies/Recipies";
import Chefs from "../pages/Home/Chefs/Chefs";
import Blog from "../pages/Blog/Blog";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>,
                loader: () => fetch(`http://localhost:5000/chefs`).then(res => res.json())
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/recipies',
        element: <RecipiesLayout></RecipiesLayout>,
        children: [
            {
                path: ':id',
                element: <Recipies></Recipies>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    },
    // The 404 route definition should be at the end
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
]);

export default router;
