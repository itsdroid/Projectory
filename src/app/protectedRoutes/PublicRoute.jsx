
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function PublicRoutes() {
    const { employee, isLoading } = useSelector(
        (store) => store.auth
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (employee) {
        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
}
