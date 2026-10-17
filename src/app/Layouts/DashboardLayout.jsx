import { Outlet } from "react-router"
import { useSelector } from "react-redux"
import { useEffect } from "react";
import AsideNav from "../../features/dashboard/components/AsideNav";
import { Bell, Menu } from 'lucide-react';

export default function () {
    const mode = useSelector(state => state.theme.mode);

    useEffect(() => {
        // console.log(mode);
        if (mode === 'dark') {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
    }, [mode]);

    return <div className="flex p-5 gap-10">
        <AsideNav />
        <div className="w-full ">
            <nav className=" flex justify-between w-full">
               <input className=" text-[var(--text-secondary)] border-1 rounded-lg px-2" type="text" placeholder="Search here"/>
                <div className="flex gap-5">
                    <Bell className="cursor-pointer"/>
                    <Menu className="cursor-pointer"/>
                </div>
            </nav>
            <Outlet />
        </div>
    </div>
}