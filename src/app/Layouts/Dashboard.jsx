import { Outlet } from "react-router"

export default function () {
    return <div>
        <h1> This is Dashboard page </h1>
        <Outlet />
    </div>
}