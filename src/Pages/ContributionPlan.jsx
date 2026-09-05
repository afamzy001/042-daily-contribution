import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck, FiArrowLeft } from "react-icons/fi";
import { setContributionPlan } from "../features/savingsSlice";

function ContributionPlan() {
    const dispatch = useDispatch();

    const existingPlan = useSelector(
        (state) => state.savings.plan
    );

    const [amount, setAmount] = useState(
        String(existingPlan.amount || "")
    );

    const [frequency, setFrequency] = useState(
        existingPlan.frequency || "daily"
    );

    const [error, setError] = useState("");

    const quickAmounts = [200, 500, 1000];

    const handleSubmit = (e) => {
        e.preventDefault();

        const numericAmount = Number(amount);

        if (!numericAmount || numericAmount < 200) {
            setError("Minimum contribution is ₦200.");
            return;
        }

        dispatch(
            setContributionPlan({
                ...existingPlan,
                amount: numericAmount,
                frequency,
            })
        );

        setError("");

        alert("Contribution plan saved!");
    };

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Header */}
            <header className="flex items-center gap-3 bg-white px-5 py-4 shadow-sm">

                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700"
                >
                    <FiArrowLeft size={18} />
                </button>

                <div>
                    <h1 className="text-base font-bold text-slate-900">
                        Contribution Plan
                    </h1>

                    <p className="text-xs text-slate-500">
                        Set how you want to contribute
                    </p>
                </div>

            </header>


            <main className="mx-auto max-w-md px-5 py-6">

                {/* Amount */}
                <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">

                    <h2 className="text-sm font-bold text-slate-900">
                        Contribution Amount
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Minimum contribution is ₦200
                    </p>


                    {/* Input */}
                    <div className="mt-5 flex items-center rounded-xl border border-slate-200 px-4 focus-within:border-green-600">

                        <span className="text-lg font-bold text-slate-500">
                            ₦
                        </span>

                        <input
                            type="number"
                            inputMode="numeric"
                            min="200"
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                                setError("");
                            }}
                            placeholder="Enter amount"
                            className="w-full px-3 py-4 text-lg font-bold text-slate-900 outline-none"
                        />

                    </div>


                    {/* Quick Amounts */}
                    <div className="mt-5">

                        <p className="text-xs font-semibold text-slate-500">
                            Quick Select
                        </p>

                        <div className="mt-3 grid grid-cols-3 gap-3">

                            {quickAmounts.map((quickAmount) => {

                                const selected =
                                    Number(amount) === quickAmount;

                                return (
                                    <button
                                        key={quickAmount}
                                        type="button"
                                        onClick={() =>
                                            setAmount(String(quickAmount))
                                        }
                                        className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${selected
                                            ? "border-green-600 bg-green-50 text-green-700"
                                            : "border-slate-200 text-slate-700"
                                            }`}
                                    >
                                        ₦{quickAmount.toLocaleString()}
                                    </button>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* Frequency */}
                <section className="mt-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">

                    <h2 className="text-sm font-bold text-slate-900">
                        Contribution Frequency
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        How often do you want to contribute?
                    </p>


                    <div className="mt-4 space-y-3">

                        {[
                            {
                                value: "daily",
                                title: "Daily",
                                description: "Contribute every day",
                            },
                            {
                                value: "weekly",
                                title: "Weekly",
                                description: "Contribute once every week",
                            },
                            {
                                value: "monthly",
                                title: "Monthly",
                                description: "Contribute once every month",
                            },
                        ].map((item) => {

                            const selected =
                                frequency === item.value;

                            return (
                                <button
                                    key={item.value}
                                    type="button"
                                    onClick={() =>
                                        setFrequency(item.value)
                                    }
                                    className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition ${selected
                                        ? "border-green-600 bg-green-50"
                                        : "border-slate-200 bg-white"
                                        }`}
                                >

                                    <div>

                                        <p className="text-sm font-bold text-slate-900">
                                            {item.title}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {item.description}
                                        </p>

                                    </div>


                                    <div
                                        className={`flex h-6 w-6 items-center justify-center rounded-full border ${selected
                                            ? "border-green-600 bg-green-600 text-white"
                                            : "border-slate-300"
                                            }`}
                                    >
                                        {selected && <FiCheck size={14} />}
                                    </div>

                                </button>
                            );
                        })}

                    </div>

                </section>


                {/* Error */}
                {error && (
                    <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
                        {error}
                    </p>
                )}


                {/* Save */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-green-800"
                >
                    <FiCheck size={18} />
                    Save Contribution Plan
                </button>

            </main>

        </div>
    );
}

export default ContributionPlan;