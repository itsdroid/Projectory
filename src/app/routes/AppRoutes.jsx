import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../Layouts/AuthLayout.jsx';
import Login from '../../features/auth/ui/pages/Login.jsx';
import Register from '../../features/auth/ui/pages/Register.jsx';
import Home from '../../features/dashboard/ui/pages/Home.jsx';
import Dashboard from '../Layouts/Dashboard.jsx';

let router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },

    {
        path: "/home",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
]);


export default function AppRoutes() {
    return <RouterProvider router={router} />
}