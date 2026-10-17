import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../Layouts/AuthLayout.jsx';
import Login from '../../features/auth/ui/pages/Login.jsx';
import Register from '../../features/auth/ui/pages/Register.jsx';
import Home from '../../features/dashboard/ui/pages/Home.jsx';
import DashboardLayout from '../Layouts/DashboardLayout.jsx';
import { useEffect } from 'react';
import { currentLoggedEmployee } from '../../features/auth/state/auth/authAction.jsx';
import { useDispatch } from 'react-redux';
import ProtectedRoute from '../protectedRoutes/ProtectedRoute.jsx';
import PublicRoute from '../protectedRoutes/PublicRoute.jsx';

let router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute />,
        children: [
            {
                path: "",
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
            }
        ]
    },

    {
        path: "/home",
        element: <ProtectedRoute />,
        children: [
            {
                path: "",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    }
                ]
            }
        ]
    }
]);



export default function AppRoutes() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentLoggedEmployee());
    }, []);

    return <RouterProvider router={router} />
}