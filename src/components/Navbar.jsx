import { NavLink } from "react-router-dom";
import {
    FiHome,
    FiTarget,
    FiUsers,
    FiUser,
} from "react-icons/fi";
import logoimg from "../assets/logo.png";

const navItems = [
    {
        name: "Home",
        path: "/",
        icon: FiHome,
    },
    {
        name: "Finance",
        path: "/contribution-plan",
        icon: FiTarget,
    },
    {
        name: "Groups",
        path: "/group-register",
        icon: FiUsers,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: FiUser,
    },
];

export default function Navbar() {
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:block bg-white border-b border-gray-100 z-10 w-full fixed ">
                <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 ">

                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logoimg}
                            alt=" Logo"
                            className="h-15 rounded-2xl w-auto obtain-contain "
                        />
                    </NavLink>

                    <div className="flex items-center gap-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 text-sm font-medium transition ${isActive
                                            ? "text-green-700"
                                            : "text-gray-600 hover:text-green-700"
                                        }`
                                    }
                                >
                                    <Icon size={18} />
                                    {item.name}
                                </NavLink>
                            );
                        })}
                    </div>

                    <NavLink
                        to="/login"
                        className="rounded-xl bg-green-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-900"
                    >
                        Login
                    </NavLink>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_15px_rgba(0,0,0,0.06)] backdrop-blur md:hidden">
                <div className="mx-auto grid max-w-lg grid-cols-4">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    `flex min-h-[64px] flex-col items-center justify-center gap-1 px-1 py-2 text-xs transition ${isActive
                                        ? "font-semibold text-green-800"
                                        : "text-gray-500 hover:text-green-700"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <Icon
                                            size={22}
                                            strokeWidth={isActive ? 2.5 : 1.8}
                                        />
                                        <span>{item.name}</span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
