import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleTheme } from "../../../../shared/state/themeSlice";

export default function Home() {
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen ">
            <h1 className="text-2xl font-semibold">
                This is Home page
            </h1>

            <button
                onClick={() => dispatch(toggleTheme())}
            > Change theme </button>
        </div>
    );
}