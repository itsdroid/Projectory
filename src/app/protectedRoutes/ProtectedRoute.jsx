
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
    const { employee, isLoading } = useSelector(
        (store) => store.auth
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!employee) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}
