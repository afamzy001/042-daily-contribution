
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
            <nav className="fixed top-0 left-0 z-50 hidden w-full border-b border-gray-100 bg-white md:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logoimg}
                            alt="PadiSave Logo"
                            className="h-12 w-auto object-contain"
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
                                        `flex items-center gap-2 text-sm font-medium transition-colors ${isActive
                                            ? "text-green-800"
                                            : "text-gray-600 hover:text-green-700"
                                        }`
                                    }
                                >
                                    <Icon size={18} />
                                    <span>{item.name}</span>
                                </NavLink>
                            );
                        })}
                    </div>

                    <NavLink
                        to="/login"
                        className="rounded-xl bg-green-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-900"
                    >
                        Login
                    </NavLink>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed inset-x-0 bottom-0 z-[100] border-t border-gray-200 bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] md:hidden">
                <div className="mx-auto grid w-full max-w-lg grid-cols-4 pb-[env(safe-area-inset-bottom)]">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    `flex min-h-16 flex-col items-center justify-center gap-1 px-1 py-2 text-xs transition-colors ${isActive
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
