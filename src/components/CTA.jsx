import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

function CTA() {
    return (
        <section className="px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl bg-green-800 px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16">

                    {/* Decorative circles */}
                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-700/40" />

                    <div className="absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-green-700/40" />

                    <div className="relative mx-auto max-w-3xl">

                        {/* Small heading */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-green-50">
                            <FiCheckCircle size={16} />
                            Start building your savings habit
                        </div>

                        {/* Main heading */}
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Your future starts with
                            <span className="block text-green-200">
                                one small contribution.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-green-50 sm:text-base sm:leading-7">
                            Whether you're saving for a new phone, school fees,
                            a business, or something bigger, NaijaDaily helps you
                            stay consistent and reach your goal.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-green-800 transition hover:bg-green-50">
                                Start Saving Today
                                <FiArrowRight size={18} />
                            </button>

                            <button className="rounded-xl border border-green-300/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700">
                                Learn More
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;