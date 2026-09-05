import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";


function Applayout() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Applayout;