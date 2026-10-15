import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { TfiCalendar, TfiWallet } from "react-icons/tfi";
import bannerimg from "../assets/banner.jpg";

function Hero() {
    return (
        <section
            id="home"
            className="relative isolate overflow-hidden bg-green-950 "
        >
            {/* Background image */}
            <img
                src={bannerimg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 -z-10 bg-black/65" />

            {/* Green overlay */}
            <div className="absolute inset-0 -z-10 bg-green-950/20" />

            {/* Hero content */}
            <div className="relative z-10 mx-auto max-w-8xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                <div className="max-w-3xl">

                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-green-900/60 px-3 py-2 text-xs font-medium text-green-100 backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Smart Saving, Every Day
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Small Daily{" "}
                        <span className="text-green-400">
                            Contributions,
                        </span>{" "}
                        Big Future.
                    </h1>

                    {/* Description */}
                    <p className="mt-4 max-w-xl text-sm leading-6 text-stone-100 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                        Save a little every day and watch your money grow.
                        Set a savings goal with your friends, contribute daily
                        or monthly, and request withdrawals according to
                        PadiSave's savings terms.
                    </p>

                    {/* Call to action */}
                    <div className="mt-7 sm:mt-8">
                        <Link
                            to="/start-saving"
                            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-950 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                        >
                            Save Now
                            <FaArrowRight size={17} />
                        </Link>
                    </div>

                    {/* Benefits */}
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-14">

                        <Benefit
                            icon={<FiShield />}
                            title="Secure & Safe"
                            description="Your money is protected."
                        />

                        <Benefit
                            icon={<TfiCalendar />}
                            title="Daily Contribution"
                            description="Build a consistent saving habit."
                        />

                        <Benefit
                            icon={<TfiWallet />}
                            title="Savings Goals"
                            description="Work towards your financial goals."
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

function Benefit({ icon, title, description }) {
    return (
        <div className="flex items-start gap-3 sm:flex-col sm:items-start sm:gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-lg text-green-300 sm:h-12 sm:w-12 sm:text-xl">
                {icon}
            </div>

            <div>
                <h3 className="text-sm font-bold text-white sm:text-base">
                    {title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-white/80 sm:text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Hero;
