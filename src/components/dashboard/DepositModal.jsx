import { useState } from "react";
import { FiX, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { recordContribution } from "../../features/savingsSlice";
import { getUnpaidContributionDays } from "../../utils/contributionDays";

function DepositModal({ onClose }) {
    const dispatch = useDispatch();

    const plan = useSelector(
        (state) => state.savings.plan
    );

    const transactions = useSelector(
        (state) => state.savings.transactions
    );

    const [amount, setAmount] = useState("");

    const quickAmounts = [200, 500, 1000];


    const today = new Date();

    const startDate = new Date(
        `${plan.startDate}T00:00:00`
    );

    const endDate = new Date(
        `${plan.endDate}T00:00:00`
    );

    // const today =
    //     new Date().toLocaleDateString("en-CA");

    const availableDays =
        getUnpaidContributionDays({
            startDate: plan.startDate,
            endDate: plan.endDate,
            paymentDate: today,
            transactions,
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        const numericAmount = Number(amount);

        // Make sure amount is valid
        if (!numericAmount) {
            return;
        }

        // Contribution must cover complete contribution units
        if (!validAmount) {
            return;
        }

        // Send contribution to Redux
        dispatch(
            recordContribution({
                amount: numericAmount,
                date: new Date().toLocaleDateString("en-CA"),
            })
        );

        // Close modal after successful dispatch
        onClose();
    };

    const maxContribution =
        availableDays.length *
        plan.amount;


    const daysCovered =
        plan.amount > 0
            ? Number(amount) / plan.amount
            : 0;

    const validAmount =
        Number(amount) >= plan.amount &&
        Number(amount) % plan.amount === 0 &&
        Number(amount) <= maxContribution;

    function formatContributionDate(dateString) {
        return new Date(
            `${dateString}T00:00:00`
        ).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
        });
    }



    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/50 sm:items-center sm:px-5">

            <div className="w-full max-w-md rounded-t-3xl bg-white p-5 sm:rounded-3xl">

                {/*HEADER*/}

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-lg font-bold text-slate-900">
                            Add Contribution
                        </h2>

                        <p className="text-xs text-slate-500">
                            Daily contribution: ₦
                            {plan.amount.toLocaleString()}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            {availableDays.length} unpaid{" "}
                            {availableDays.length === 1
                                ? "day"
                                : "days"}{" "}
                            available
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                    >
                        <FiX size={18} />
                    </button>

                </div>


                {/*  FORM  */}

                <form
                    onSubmit={handleSubmit}
                    className="mt-6"
                >

                    <label
                        htmlFor="amount"
                        className="text-sm font-semibold text-slate-700"
                    >
                        Amount
                    </label>


                    <div className="mt-2 flex items-center rounded-xl border border-slate-200 px-4 focus-within:border-green-600">

                        <span className="text-lg font-bold text-slate-500">
                            ₦
                        </span>


                        <input
                            id="amount"
                            type="number"
                            inputMode="numeric"
                            min={plan.amount}
                            value={amount}
                            onChange={(e) =>
                                setAmount(e.target.value)
                            }
                            placeholder="0"
                            className="w-full bg-transparent px-3 py-4 text-xl font-bold text-slate-900 outline-none"
                        />

                    </div>


                    {/*  QUICK AMOUNTS  */}

                    <div className="mt-5">

                        <p className="text-xs font-semibold text-slate-500">
                            Quick Amount
                        </p>


                        <div className="mt-3 grid grid-cols-3 gap-2">

                            {quickAmounts.map(
                                (quickAmount) => (

                                    <button
                                        key={quickAmount}
                                        type="button"
                                        onClick={() =>
                                            setAmount(
                                                String(
                                                    quickAmount
                                                )
                                            )
                                        }
                                        className="rounded-lg border border-slate-200 px-2 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-green-500 hover:text-green-700"
                                    >
                                        ₦
                                        {quickAmount.toLocaleString()}
                                    </button>

                                )
                            )}

                        </div>

                    </div>


                    {/*  DAYS COVERED  */}

                    {Number(amount) >= plan.amount &&
                        Number(amount) % plan.amount === 0 && (

                            <div className="mt-4 rounded-xl bg-green-50 px-4 py-3">

                                <p className="text-xs font-semibold text-green-700">

                                    This contribution covers{" "}

                                    {daysCovered}{" "}

                                    {daysCovered === 1
                                        ? "day"
                                        : "days"
                                    }.

                                </p>

                            </div>

                        )}

                    {validAmount && previewDays.length > 0 && (
                        <div className="mt-4 rounded-2xl border border-green-100 bg-green-50 p-4">

                            <p className="text-xs font-bold text-green-800">
                                This payment will complete:
                            </p>


                            <div className="mt-3 space-y-2">

                                {previewDays.map((date) => (
                                    <div
                                        key={date}
                                        className="flex items-center justify-between"
                                    >

                                        <div className="flex items-center gap-2">

                                            <span className="text-sm">
                                                ✓
                                            </span>

                                            <span className="text-xs font-medium text-slate-700">
                                                {formatContributionDate(date)}
                                            </span>

                                        </div>


                                        <span className="text-xs font-bold text-green-700">
                                            ₦{plan.amount.toLocaleString()}
                                        </span>

                                    </div>
                                ))}

                            </div>


                            <div className="mt-3 border-t border-green-100 pt-3">

                                <p className="text-xs font-bold text-green-700">
                                    {previewDays.length} contribution{" "}
                                    {previewDays.length === 1
                                        ? "day"
                                        : "days"}
                                </p>

                            </div>

                        </div>
                    )}








                    {/* WARNING */}
                    {Number(amount) > maxContribution && (
                        <div className="mt-4 rounded-xl bg-red-50 px-4 py-3">

                            <p className="text-xs font-semibold text-red-600">
                                You currently have{" "}
                                {availableDays.length} unpaid{" "}
                                {availableDays.length === 1
                                    ? "day"
                                    : "days"}.
                                The maximum contribution is ₦
                                {maxContribution.toLocaleString()}.
                            </p>

                        </div>
                    )}


                    {/*  SUBMIT  */}

                    <button
                        type="submit"
                        disabled={!validAmount}
                        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <FiCheck size={18} />

                        Contribute ₦
                        {Number(amount || 0).toLocaleString()}
                    </button>

                </form>

            </div>

        </div>
    );
}

export default DepositModal;