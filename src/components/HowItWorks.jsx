import {
    FiUserPlus,
    FiTarget,
    FiCalendar,
    FiTrendingUp,
    FiClock,
} from "react-icons/fi";

const steps = [
    {
        number: "01",
        icon: <FiUserPlus />,
        title: "Create Your Account",
        description:
            "Sign up in a few minutes and create your secure PadiSave account with MicroFinance Bank.",
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
            "Start saving from just ₦200 daily and stay consistent with your savings plan.",
    },
    {
        number: "03",
        icon: <FiCalendar />,
        title: "join team with friends save weekly and monthly",
        description:
            "Start saving and stay consistent with team savings plan.",
    },
    {
        number: "04",
        icon: <FiTrendingUp />,
        title: "Watch Your Savings Grow",
        description:
            "Track your contributions and monitor your progress as you move closer to your financial goals.",
    },
    {
        number: "05",
        icon: <FiClock />,
        title: "Withdraw Your Savings",
        description:
            "Request your money when needed, After three months of registration.",
    },
];

function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="bg-stone-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <h2 className="mt-5 text-3xl font-bold tracking-tight
            text-slate-900 sm:text-4xl">
                        Start Small. Save Consistently.
                        <span className="block text-green-700">
                            Achieve More Together.
                        </span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        Getting started with PadiSave is simple. Follow these five steps
                        to build a consistent savings habit and work towards your goals.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2
          lg:mt-16 lg:grid-cols-3 xl:grid-cols-3">

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="group relative rounded-2xl border border-green-100
                bg-white p-6 shadow-sm transition duration-300
                hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                        >
                            {/* Step number */}
                            <span className="absolute right-5 top-5 text-3xl font-bold
                text-green-100 transition group-hover:text-green-200">
                                {step.number}
                            </span>

                            {/* Icon */}
                            <div className="flex h-14 w-14 items-center justify-center
                rounded-2xl bg-green-50 text-2xl text-green-700
                transition group-hover:bg-green-700 group-hover:text-white">
                                {step.icon}
                            </div>

                            {/* Step content */}
                            <h3 className="mt-6 text-lg font-bold leading-snug text-slate-900">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-500">
                                {step.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="mt-6 h-1 w-10 rounded-full bg-green-600
                transition-all group-hover:w-16" />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default HowItWorks;
