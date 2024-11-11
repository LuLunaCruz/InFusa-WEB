import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Layout from "../components/common/Layout/Layout.jsx";
import ResetPasswordEmail from "../pages/ResetPasswordEmail/ResetPasswordEmail.jsx";
import ResetPassword from "../pages/ResetPassword/ResetPassword.jsx";
import Auth from "../pages/Auth/Auth.jsx";
import Register from "../pages/Register/Register.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
        <Layout/>
        ),
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "registrate",
                element: <Register/>
            },
            {
                path: "login",
                element: <Auth/>
            },
            {
                path: "auth/reset_password",
                element: <ResetPasswordEmail/>
            },
            {
                path: "auth/reset_password/:code",
                element: <ResetPassword/>
            }
        ]
    },
    {
        path: "/*",
        element: (
            <>
            <h1>Esta ruta no existe (404)</h1>
            </>
        )
    }
]);