import { FiUserPlus, FiTarget, FiCalendar, FiTrendingUp, } from "react-icons/fi";

const steps = [
    {
        number: "01",
        icon: <FiUserPlus />,
        title: "Create Your Account",
        description:
            "Sign up in a few minutes and create your secure NaijaDaily account.",
    },
    {
        number: "02",
        icon: <FiTarget />,
        title: "Set Your Goal",
        description:
            "Choose what you're saving for and set a target amount that works for you.",
    },
    {
        number: "03",
        icon: <FiCalendar />,
        title: "Contribute Daily",
        description:
            "Make small contributions every day, starting from ₦200 and consistent with your plan.",
    },
    {
        number: "04",
        icon: <FiTrendingUp />,
        title: "Watch Your Savings Grow",
        description:
            "Track your progress and move closer to your financial goals every day.",
    },
];

function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="bg-slate-50 px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                        How It Works
                    </span>

                    <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                        Saving doesn't have to be complicated.
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                        Start small, stay consistent, and let every contribution
                        take you closer to your goal.
                    </p>

                </div>

                {/* Steps */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            {/* Number */}
                            <span className="absolute right-5 top-5 text-sm font-bold text-green-100">
                                {step.number}
                            </span>

                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl text-green-700">
                                {step.icon}
                            </div>

                            {/* Text */}
                            <h3 className="mt-5 text-lg font-bold text-slate-900">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                {step.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default HowItWorks;