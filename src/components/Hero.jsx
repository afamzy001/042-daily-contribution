import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { FiShieldOff } from "react-icons/fi";
import { TfiCalendar } from "react-icons/tfi";
import { TfiWallet } from "react-icons/tfi";


function Hero() {

    return (


        <section
            id="home"
            className="relative overflow-hidden bg-white"
        >
            {/* Decorative background */}
            <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-green-50" />

            <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-green-50" />

            <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8 lg:py-24">

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Hero Text */}
                    <div>

                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                            <span className="h-2 w-2 rounded-full bg-green-600" />
                            Smart Saving, Every Day
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

                            Small Daily{" "}

                            <span className="text-green-700">
                                Contributions,
                            </span>

                            {" "}Big Future.
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                            Save a little every day and watch your money grow.
                            Set a saving goal, contribute daily, and withdraw
                            when you need it.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/contribution-plan">

                                <button className="flex items-center justify-center gap-3 rounded-lg bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800">
                                    Start Saving Now
                                    <FaArrowRight size={19} />
                                </button>

                                <button className="flex items-center justify-center gap-3 rounded-lg border border-green-700 px-6 py-4 font-semibold text-green-700 transition hover:bg-green-50 mt-2">
                                    How It Works
                                    <FiPlay size={17} />
                                </button>
                            </Link>

                        </div>

                        {/* Benefits */}
                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">

                            <Benefit
                                icon={<FiShieldOff />}
                                title="Secure & Safe"
                                description="Your money is protected."
                            />

                            <Benefit
                                icon={<TfiCalendar />}
                                title="Daily Contribution"
                                description="Contribute any amount daily."
                            />

                            <Benefit
                                icon={<TfiWallet />}
                                title="Withdraw Anytime"
                                description="Request your money when needed."
                            />

                        </div>

                    </div>

                    {/* Dashboard Preview */}
                    <div className="relative">

                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6">

                            {/* Dashboard Header */}
                            <div className="mb-5 flex items-center justify-between">

                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-700 font-bold text-white">
                                        ₦
                                    </div>

                                    <span className="font-bold text-slate-900">
                                        UloAku
                                    </span>
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-sm font-semibold text-green-700">
                                    CN
                                </div>

                            </div>

                            {/* Greeting */}
                            <div className="mb-5">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Good morning, Chinedu 👋
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    Track your savings and achieve your goals.
                                </p>
                            </div>

                            {/* Savings Card */}
                            <div className="rounded-2xl bg-green-800 p-5 text-white sm:p-6">

                                <div className="flex items-start justify-between">

                                    <div>
                                        <p className="text-sm text-green-100">
                                            Total Savings Balance
                                        </p>

                                        <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                                            ₦98,500.00
                                        </h3>
                                    </div>

                                    <span className="rounded-lg border border-green-500 px-3 py-2 text-xs">
                                        NGN
                                    </span>

                                </div>

                                <div className="mt-5">
                                    <p className="text-xs text-green-100">
                                        Total Contributions
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        ₦98,500.00
                                    </p>
                                </div>

                            </div>

                            {/* Goal */}
                            <div className="mt-5 rounded-xl border border-slate-200 p-4">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            My Savings Goal
                                        </p>

                                        <h4 className="mt-1 font-bold text-slate-900">
                                            New Laptop
                                        </h4>
                                    </div>

                                    <span className="font-bold text-green-700">
                                        63%
                                    </span>

                                </div>

                                {/* Progress */}
                                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                                    <div className="h-full w-[63%] rounded-full bg-green-600" />
                                </div>

                                <div className="mt-3 flex justify-between text-xs text-slate-500">
                                    <span>₦125,600 saved</span>
                                    <span>₦250,000 target</span>
                                </div>

                            </div>

                            {/* Quick Actions */}
                            <div className="mt-5 grid grid-cols-3 gap-2">

                                <QuickAction
                                    icon={<TfiWallet />}
                                    label="Deposit"
                                />

                                <QuickAction
                                    icon={<FaArrowRight />}
                                    label="Withdraw"
                                />

                                <QuickAction
                                    icon={<TfiCalendar />}
                                    label="Goal"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}


function Benefit({ icon, title, description }) {
    return (
        <div className="flex flex-col gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-xl text-green-700">
                {icon}
            </div>

            <h3 className="text-sm font-bold text-green-800">
                {title}
            </h3>

            <p className="text-xs leading-5 text-slate-500">
                {description}
            </p>

        </div>
    );
}


function QuickAction({ icon, label }) {
    return (
        <button className="flex flex-col items-center gap-2 rounded-xl bg-green-50 p-3 text-xs font-medium text-green-700 transition hover:bg-green-100">
            <span className="text-lg">
                {icon}
            </span>

            {label}
        </button>
    );
}


export default Hero;