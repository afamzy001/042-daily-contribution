import { FiMenu, FiX, } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl font-bold text-white">
                            ₦
                        </div>
                    </Link>
                    <div>
                        <Link to="/">
                            <h1 className="text-lg font-bold leading-none text-slate-900">
                                UloAku
                            </h1>

                            <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                                Daily Contribution, Better Future
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link to="/"
                        href="#home"
                        className="border-b-2 border-green-700 pb-1 text-sm font-semibold text-green-700"
                    >
                        Home
                    </Link>

                    <a
                        href="#how-it-works"
                        className="text-sm font-medium text-slate-700 transition hover:text-green-700"
                    >
                        How It Works
                    </a>

                    <a
                        href="#features"
                        className="text-sm font-medium text-slate-700 transition hover:text-green-700"
                    >
                        Features
                    </a>

                    <a
                        href="#about"
                        className="text-sm font-medium text-slate-700 transition hover:text-green-700"
                    >
                        About Us
                    </a>

                    <a
                        href="#faqs"
                        className="text-sm font-medium text-slate-700 transition hover:text-green-700"
                    >
                        FAQs
                    </a>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-4 md:flex">
                    <Link to="/login" className="rounded-lg border border-green-700 px-7 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50">
                        Login
                    </Link>


                    <Link to="/register" className="rounded-lg bg-green-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <FiX size={22} />
                    ) : (
                        <FiMenu size={22} />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-sm md:hidden">

                    <div className="flex flex-col gap-5">

                        <a
                            href="#home"
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium text-green-700"
                        >
                            Home
                        </a>

                        <a
                            href="#how-it-works"
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium text-slate-700"
                        >
                            How It Works
                        </a>

                        <a
                            href="#features"
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium text-slate-700"
                        >
                            Features
                        </a>

                        <a
                            href="#about"
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium text-slate-700"
                        >
                            About Us
                        </a>

                        <a
                            href="#faqs"
                            onClick={() => setIsMenuOpen(false)}
                            className="font-medium text-slate-700"
                        >
                            FAQs
                        </a>

                        <div className="flex flex-col gap-3 border-t border-slate-100 pt-5">
                            <Link to="/login" className="rounded-lg border border-green-700 px-7 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50">
                                Login
                            </Link>

                            <Link to="/register" className="rounded-lg bg-green-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                                Get Started
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;