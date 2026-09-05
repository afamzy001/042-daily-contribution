import { useState } from "react";
import { useSelector } from "react-redux";
import { FiChevronLeft, FiChevronRight, } from "react-icons/fi";
import { getContributionStatus, } from "../../utils/contributionStatus";





function DailyContributionTracker() {

    // Redux
    const plan = useSelector(
        (state) => state.savings.plan
    );

    const transactions = useSelector(
        (state) => state.savings.transactions
    );


    // Local state
    const today = new Date();

    const [currentYear, setCurrentYear] =
        useState(today.getFullYear());

    const [currentMonth, setCurrentMonth] =
        useState(today.getMonth());


    // Generate dates
    const getMonthDates = () => {
        const dates = [];

        const firstDay = new Date(
            currentYear,
            currentMonth,
            1
        );

        const lastDay = new Date(
            currentYear,
            currentMonth + 1,
            0
        );

        let currentDate = new Date(firstDay);

        while (currentDate <= lastDay) {

            const dateString =
                currentDate.toLocaleDateString(
                    "en-CA"
                );

            if (
                dateString >= plan.startDate &&
                dateString <= plan.endDate
            ) {
                dates.push(
                    new Date(currentDate)
                );
            }

            currentDate.setDate(
                currentDate.getDate() + 1
            );
        }

        return dates;
    };


    // IMPORTANT
    const dates = getMonthDates();


    // Statistics
    const paidDaysCount = dates.filter(
        (date) => {
            const dateString =
                date.toLocaleDateString(
                    "en-CA"
                );

            return (
                getContributionStatus(
                    dateString,
                    transactions
                ) === "paid"
            );
        }
    ).length;


    // missed days count
    const missedDaysCount = dates.filter(
        (date) => {
            const dateString =
                date.toLocaleDateString(
                    "en-CA"
                );

            return (
                getContributionStatus(
                    dateString,
                    transactions
                ) === "missed"
            );
        }
    ).length;


    // pending days count
    const pendingDaysCount = dates.filter(
        (date) => {
            const dateString =
                date.toLocaleDateString(
                    "en-CA"
                );

            return (
                getContributionStatus(
                    dateString,
                    transactions
                ) === "pending"
            );
        }
    ).length;


    // monthly amount
    const monthlyAmount =
        paidDaysCount * plan.amount;


    // remaining days
    const remainingDays =
        dates.length -
        paidDaysCount -
        missedDaysCount;


    // Month calculation
    const currentMonthDate = new Date(
        currentYear,
        currentMonth,
        1
    );


    const planStartMonth = new Date(
        `${plan.startDate}T00:00:00`
    );


    const planEndMonth = new Date(
        `${plan.endDate}T00:00:00`
    );


    // Previous
    const canGoPrevious =
        currentMonthDate >
        new Date(
            planStartMonth.getFullYear(),
            planStartMonth.getMonth(),
            1
        );


    // Next
    const canGoNext =
        currentMonthDate <
        new Date(
            planEndMonth.getFullYear(),
            planEndMonth.getMonth(),
            1
        );


    const monthName =
        currentMonthDate.toLocaleDateString(
            "en-US",
            {
                month: "long",
                year: "numeric",
            }
        );


    // Previous month
    const goToPreviousMonth = () => {

        if (!canGoPrevious) {
            return;
        }

        if (currentMonth === 0) {

            setCurrentYear(
                (prevYear) => prevYear - 1
            );

            setCurrentMonth(11);

        } else {

            setCurrentMonth(
                (prevMonth) => prevMonth - 1
            );
        }
    };


    // Next month
    const goToNextMonth = () => {

        if (!canGoNext) {
            return;
        }

        if (currentMonth === 11) {

            setCurrentYear(
                (prevYear) => prevYear + 1
            );

            setCurrentMonth(0);

        } else {

            setCurrentMonth(
                (prevMonth) => prevMonth + 1
            );
        }
    };


    return (
        <div className="space-y-4">

            {/* Month Navigation */}
            <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">

                <button
                    type="button"
                    onClick={goToPreviousMonth}
                    disabled={!canGoPrevious}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <FiChevronLeft size={20} />
                </button>


                <div className="text-center">

                    <p className="text-sm font-bold text-slate-900">
                        {monthName}
                    </p>

                    <p className="text-[11px] text-slate-400">
                        Daily Contributions
                    </p>

                </div>


                <button
                    type="button"
                    onClick={goToNextMonth}
                    disabled={!canGoNext}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <FiChevronRight size={20} />
                </button>

            </div>


            {/* monthly days here*/}
            <div className="rounded-2xl bg-white p-4 shadow-sm">

                <div className="flex items-start justify-between">

                    <div>
                        <p className="text-xs font-medium text-slate-500">
                            Contributed this month
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-slate-900">
                            ₦{monthlyAmount.toLocaleString()}
                        </p>
                    </div>


                    <div className="rounded-xl bg-green-50 px-3 py-2">

                        <p className="text-[10px] font-semibold uppercase tracking-wide text-green-600">
                            Daily
                        </p>

                        <p className="text-sm font-bold text-green-700">
                            ₦{plan.amount.toLocaleString()}
                        </p>

                    </div>

                </div>


                <div className="mt-5 grid grid-cols-3 gap-2">

                    {/* Paid */}
                    <div className="rounded-xl bg-green-50 p-3">

                        <p className="text-lg font-bold text-green-700">
                            {paidDaysCount}
                        </p>

                        <p className="text-[11px] font-medium text-green-600">
                            Paid
                        </p>

                    </div>


                    {/* Missed */}
                    <div className="rounded-xl bg-red-50 p-3">

                        <p className="text-lg font-bold text-red-600">
                            {missedDaysCount}
                        </p>

                        <p className="text-[11px] font-medium text-red-500">
                            Missed
                        </p>

                    </div>


                    {/* Remaining */}
                    <div className="rounded-xl bg-slate-50 p-3">

                        <p className="text-lg font-bold text-slate-700">
                            {remainingDays}
                        </p>

                        <p className="text-[11px] font-medium text-slate-500">
                            Remaining
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DailyContributionTracker;