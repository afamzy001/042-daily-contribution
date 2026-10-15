
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCheckCircle, FiTrendingUp, } from "react-icons/fi";
import plans from "../Data/plans.js"



export default function PersonalSavings() {
    const [frequency, setFrequency] = useState("daily");
    const [amount, setAmount] = useState(500);
    const [duration, setDuration] = useState(3);
    const [startDate, setStartDate] = useState("");



    // Approximate number of contributions in the selected duration.
    const contributionsPerMonth = {
        daily: 30,
        weekly: 4,
        monthly: 1,
    };

    const totalContributions =
        contributionsPerMonth[frequency] * duration;

    const estimatedTotal = amount * totalContributions;

    const formatNaira = (value) =>
        new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            maximumFractionDigits: 0,
        }).format(value);

    function handleSubmit(event) {
        event.preventDefault();

        if (!startDate) {
            alert("Please select your savings start date.");
            return;
        }

        const plan = {
            frequency,
            amount,
            duration,
            startDate,
            estimatedTotal,
        };

        // Demo only: no money is collected or saved yet.
        console.log("Selected savings plan:", plan);

        alert(
            "Your savings plan is ready for review. " +
            "Connect a backend before activating real contributions."
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <Link
                    to="/"
                    className="mb-6 inline-flex items-center gap-2 text-sm
          font-medium text-green-800 hover:text-green-600"
                >
                    <FiArrowLeft />
                    Home
                </Link>

                <div className="mb-8">
                    <p className="mb-2 font-semibold text-green-700">
                        PADISAVE PERSONAL SAVINGS
                    </p>

                    <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
                        Start saving towards your goals
                    </h1>

                    <p className="mt-3 max-w-2xl text-stone-600">
                        Choose how often you want to save, set your amount,
                        and build a savings habit that works for you.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-6 lg:grid-cols-3"
                >
                    {/* Main form */}
                    <div className="space-y-6 lg:col-span-2">

                        {/* Frequency */}
                        <section className="rounded-2xl border border-stone-200
            bg-white p-5 shadow-sm sm:p-6">
                            <h2 className="text-xl font-bold text-stone-900">
                                1. Choose your savings plan
                            </h2>

                            <p className="mt-2 text-sm text-stone-500">
                                How often would you like to contribute?
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                {plans.map((plan) => (
                                    <button
                                        key={plan.id}
                                        type="button"
                                        onClick={() => setFrequency(plan.id)}
                                        className={`rounded-xl border p-4 text-left
                    transition ${frequency === plan.id
                                                ? "border-green-700 bg-green-50 ring-1 ring-green-700"
                                                : "border-stone-200 hover:border-green-400"
                                            }`}
                                    >
                                        <span className="mb-3 flex h-10 w-10 items-center
                    justify-center rounded-lg bg-green-100 text-xl
                    text-green-800">
                                            {plan.icon}
                                        </span>

                                        <span className="block font-bold text-stone-900">
                                            {plan.title}
                                        </span>

                                        <span className="mt-1 block text-xs leading-5
                    text-stone-500">
                                            {plan.description}
                                        </span>

                                        {frequency === plan.id && (
                                            <FiCheckCircle className="mt-3 text-green-700" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Contribution amount */}
                        <section className="rounded-2xl border border-stone-200
            bg-white p-5 shadow-sm sm:p-6">
                            <h2 className="text-xl font-bold text-stone-900">
                                2. Set your contribution amount
                            </h2>

                            <p className="mt-2 text-sm text-stone-500">
                                Choose an amount from ₦200 to ₦5,000 per contribution.
                            </p>

                            <div className="mt-6 rounded-xl bg-green-50 p-5">
                                <label
                                    htmlFor="amount"
                                    className="text-sm font-medium text-stone-600"
                                >
                                    Amount per {frequency === "daily"
                                        ? "day"
                                        : frequency === "weekly"
                                            ? "week"
                                            : "month"}
                                </label>

                                <p className="mt-2 text-3xl font-bold text-green-800">
                                    {formatNaira(amount)}
                                </p>

                                <input
                                    id="amount"
                                    type="range"
                                    min="200"
                                    max="5000"
                                    step="100"
                                    value={amount}
                                    onChange={(event) =>
                                        setAmount(Number(event.target.value))
                                    }
                                    className="mt-5 w-full cursor-pointer accent-green-700"
                                />

                                <div className="mt-2 flex justify-between text-sm
                text-stone-500">
                                    <span>₦200</span>
                                    <span>₦5,000</span>
                                </div>

                                <div className="mt-5">
                                    <label
                                        htmlFor="customAmount"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Or enter an amount
                                    </label>

                                    <input
                                        id="customAmount"
                                        type="number"
                                        min="200"
                                        max="5000"
                                        step="100"
                                        value={amount}
                                        onChange={(event) => {
                                            const value = event.target.value;

                                            if (value === "") {
                                                setAmount("");
                                                return;
                                            }

                                            const number = Number(value);

                                            if (number >= 200 && number <= 5000) {
                                                setAmount(number);
                                            }
                                        }}
                                        onBlur={() => {
                                            if (amount === "" || amount < 200) {
                                                setAmount(200);
                                            } else if (amount > 5000) {
                                                setAmount(5000);
                                            }
                                        }}
                                        required
                                        className="w-full rounded-lg border border-stone-300
                    px-4 py-3 outline-none focus:border-green-700"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Duration and start date */}
                        <section className="rounded-2xl border border-stone-200
            bg-white p-5 shadow-sm sm:p-6">
                            <h2 className="text-xl font-bold text-stone-900">
                                3. Set your savings duration
                            </h2>

                            <p className="mt-2 text-sm text-stone-500">
                                How long do you want to save?
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {[1, 3, 6, 12].map((months) => (
                                    <button
                                        key={months}
                                        type="button"
                                        onClick={() => setDuration(months)}
                                        className={`rounded-xl border p-4 font-semibold ${duration === months
                                            ? "border-green-700 bg-green-50 text-green-800"
                                            : "border-stone-200 text-stone-700"
                                            }`}
                                    >
                                        {months} {months === 1 ? "month" : "months"}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6">
                                <label
                                    htmlFor="startDate"
                                    className="mb-2 block text-sm font-medium
                  text-stone-700"
                                >
                                    Planned start date
                                </label>

                                <input
                                    id="startDate"
                                    type="date"
                                    value={startDate}
                                    onChange={(event) => setStartDate(event.target.value)}
                                    min={new Date().toLocaleDateString("en-CA")}
                                    required
                                    className="w-full rounded-lg border border-stone-300
                  px-4 py-3 outline-none focus:border-green-700"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Plan summary */}
                    <aside className="h-fit rounded-2xl bg-green-950 p-6 text-white
          shadow-sm lg:sticky lg:top-6">
                        <FiTrendingUp className="mb-4 text-3xl text-green-300" />

                        <h2 className="text-xl font-bold">
                            Your savings summary
                        </h2>

                        <p className="mt-2 text-sm text-green-100">
                            Review your selected plan before proceeding.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between gap-3 border-b
              border-green-800 pb-4">
                                <span className="text-sm text-green-100">Plan</span>
                                <span className="font-semibold capitalize">
                                    {frequency}
                                </span>
                            </div>

                            <div className="flex justify-between gap-3 border-b
              border-green-800 pb-4">
                                <span className="text-sm text-green-100">
                                    Contribution
                                </span>
                                <span className="font-semibold">
                                    {formatNaira(Number(amount) || 0)}
                                </span>
                            </div>

                            <div className="flex justify-between gap-3 border-b
              border-green-800 pb-4">
                                <span className="text-sm text-green-100">Duration</span>
                                <span className="font-semibold">
                                    {duration} {duration === 1 ? "month" : "months"}
                                </span>
                            </div>

                            <div className="flex justify-between gap-3 border-b
              border-green-800 pb-4">
                                <span className="text-sm text-green-100">
                                    Estimated contributions
                                </span>
                                <span className="font-semibold">{totalContributions}</span>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl bg-green-900 p-4">
                            <p className="text-sm text-green-100">
                                Estimated savings total
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {formatNaira(
                                    (Number(amount) || 0) * totalContributions
                                )}
                            </p>

                            <p className="mt-3 text-xs leading-5 text-green-100">
                                This estimate assumes every scheduled contribution
                                is completed. It excludes interest, fees, missed
                                contributions, and calendar variations.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={
                                amount === "" ||
                                Number(amount) < 200 ||
                                Number(amount) > 5000
                            }
                            className="mt-6 w-full rounded-xl bg-white px-5 py-3
              font-bold text-green-950 transition hover:bg-green-100
              disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Review savings plan
                        </button>

                        <p className="mt-4 text-center text-xs leading-5
            text-green-200">
                            Your plan is not activated and no payment will be taken
                            by this demo.
                        </p>
                    </aside>
                </form>
            </div>
        </div>
    );
}
