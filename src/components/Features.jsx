import {
    FiTarget,
    FiShield,
    FiBarChart2,
    FiBell,
    FiSmartphone,
} from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";

const features = [
    {
        icon: <FiTrendingUp />,
        title: "Track Your Savings",
        description:
            "Know exactly how much you've saved and monitor your progress in one place.",
    },
    {
        icon: <FiTarget />,
        title: "Savings Goals",
        description:
            "Create personal goals and track how close you are to achieving them.",
    },
    {
        icon: <FiShield />,
        title: "Secure Savings",
        description:
            "Keep your financial information protected with a secure savings platform.",
    },
    {
        icon: <FiBarChart2 />,
        title: "Simple Reports",
        description:
            "Understand your contribution history with clear and simple financial insights.",
    },
    {
        icon: <FiBell />,
        title: "Contribution Reminders",
        description:
            "Get reminders that help you stay consistent with your daily contributions.",
    },
    {
        icon: <FiSmartphone />,
        title: "Built for Mobile",
        description:
            "Manage your savings easily from your phone wherever you are.",
    },
];

function Features() {
    return (
        <section
            id="features"
            className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mx-auto max-w-2xl text-center">

                    <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                        Features
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                        Everything you need to save better
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                        NaijaDaily gives you simple tools to build a consistent
                        saving habit without making things complicated.
                    </p>

                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">

                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-slate-200 p-6 transition hover:border-green-200 hover:shadow-md"
                        >

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl text-green-700">
                                {feature.icon}
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-slate-900">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                {feature.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Features;