import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Recipies from "../pages/Recipies/Recipies/Recipies";
import Chefs from "../pages/Home/Chefs/Chefs";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch(`https://b7a10-chef-recipe-hunter-server-side-ulfath-ara-ulfatharaislam.vercel.app/chefs`).then(res => res.json())
            },
           

        ]
    },
   

    {
        path: '/blog',
        element: <Blog></Blog>
    },

    {
        path: '/chefs/:id',
        element: <PrivateRoute><Recipies/></PrivateRoute>,
        loader: async ({ params }) => {
            const response = await fetch(`https://b7a10-chef-recipe-hunter-server-side-ulfath-ara-ulfatharaislam.vercel.app/chefs/${params.id}`);
            const data = await response.json();
            return { chef: data };
        }
    },

    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    // The 404 route definition should be at the end
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
]);

export default router;

