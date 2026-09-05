import { useState } from "react";
import { FiBell, FiPlus, FiCalendar, FiMoreHorizontal, FiSettings, } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTodayContribution } from "../utils/contributionStatus";
import DepositModal from "../components/dashboard/DepositModal";
import DailyContributionTracker from "../components/dashboard/DailyContributionTracker";


function Dashboard() {
    const [isDepositOpen, setIsDepositOpen] = useState(false);

    const navigate = useNavigate();

    const balance = useSelector(
        (state) => state.savings.balance
    );

    const totalContributions = useSelector(
        (state) => state.savings.totalContributions
    );

    const plan = useSelector(
        (state) => state.savings.plan
    );

    const transactions = useSelector(
        (state) => state.savings.transactions
    );

    const todayContribution =
        getTodayContribution(transactions);

    return (
        <div className="min-h-screen bg-slate-50 pb-24">

            {/*  HEADER  */}

            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

                    <div>
                        <p className="text-xs text-slate-500">
                            Welcome back
                        </p>

                        <h1 className="mt-1 text-lg font-bold text-slate-900">
                            Afam 👋
                        </h1>
                    </div>

                    <button
                        type="button"
                        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700"
                        aria-label="Notifications"
                    >
                        <FiBell size={19} />

                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-green-600" />
                    </button>

                </div>
            </header>


            {/*  MAIN  */}

            <main className="mx-auto max-w-7xl px-5 py-6">

                {/*  BALANCE  */}

                <section className="rounded-2xl bg-green-800 p-5 text-white shadow-sm">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-sm text-green-100">
                                Total Savings
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                ₦{balance.toLocaleString()}
                            </h2>

                        </div>

                        <div className="rounded-lg bg-white/10 px-3 py-2 text-xs">
                            NGN
                        </div>

                    </div>


                    <div className="mt-6 border-t border-green-700 pt-4">

                        <p className="text-xs text-green-100">
                            Total Contributions
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                            ₦{totalContributions.toLocaleString()}
                        </p>

                    </div>

                </section>


                {/* ================= TODAY ================= */}

                <section className="mt-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">

                    <div className="flex items-start justify-between">

                        <div>

                            <p className="text-xs font-medium text-slate-500">
                                Today's Contribution
                            </p>

                            <h2 className="mt-1 text-2xl font-bold text-slate-900">
                                ₦{plan.amount.toLocaleString()}
                            </h2>

                            {todayContribution ? (
                                <p className="mt-1 text-xs font-semibold text-green-600">
                                    ✅ Contributed today
                                </p>
                            ) : (
                                <p className="mt-1 text-xs font-semibold text-orange-500">
                                    ⏳ Contribution pending
                                </p>
                            )}

                        </div>


                        <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${todayContribution
                                ? "bg-green-100 text-green-700"
                                : "bg-orange-50 text-orange-500"
                                }`}
                        >
                            <FiCalendar size={20} />
                        </div>

                    </div>


                    {!todayContribution && (
                        <button
                            type="button"
                            onClick={() => setIsDepositOpen(true)}
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-green-800"
                        >
                            <FiPlus size={18} />

                            Contribute ₦{plan.amount.toLocaleString()}
                        </button>
                    )}


                    {todayContribution && (
                        <div className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-center">
                            <p className="text-xs font-semibold text-green-700">
                                Today's contribution is complete 🎉
                            </p>
                        </div>
                    )}

                </section>


                {/*  QUICK ACTIONS  */}

                <section className="mt-6">

                    <div className="grid grid-cols-2 gap-3">

                        <button
                            type="button"
                            onClick={() => setIsDepositOpen(true)}
                            className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100"
                        >
                            <FiPlus className="text-green-700" size={18} />

                            Deposit
                        </button>


                        <button
                            type="button"
                            onClick={() =>
                                navigate("/contribution-plan")
                            }
                            className="flex items-center justify-center gap-2 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700 ring-1 ring-green-100"
                        >
                            <FiSettings size={18} />

                            My Plan
                        </button>

                    </div>

                </section>


                {/*  DAILY TRACKER  */}

                <DailyContributionTracker />


                {/*  RECENT CONTRIBUTIONS  */}

                <section className="mt-7">

                    <div className="flex items-center justify-between">

                        <h2 className="text-base font-bold text-slate-900">
                            Recent Contributions
                        </h2>

                        <button
                            type="button"
                            className="text-sm font-semibold text-green-700"
                        >
                            See all
                        </button>

                    </div>


                    <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">

                        {transactions.length === 0 ? (

                            <div className="py-8 text-center">

                                <p className="text-sm font-medium text-slate-600">
                                    No contributions yet
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    Your contributions will appear here.
                                </p>

                            </div>

                        ) : (

                            transactions
                                .slice(0, 5)
                                .map((transaction) => (

                                    <div
                                        key={transaction.id}
                                        className="flex items-center justify-between border-b border-slate-100 py-3 last:border-0"
                                    >

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700">
                                                <FiPlus size={18} />
                                            </div>

                                            <div>

                                                <p className="text-sm font-semibold text-slate-800">
                                                    {transaction.note}
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {transaction.date}
                                                </p>

                                            </div>

                                        </div>


                                        <p className="text-sm font-bold text-green-700">
                                            +₦{transaction.amount.toLocaleString()}
                                        </p>

                                    </div>

                                ))

                        )}

                    </div>

                </section>

            </main>


            {/*  BOTTOM NAV  */}

            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white">

                <div className="mx-auto grid max-w-lg grid-cols-4 px-3 py-2">

                    <BottomNavItem
                        icon={<FiCalendar />}
                        label="Home"
                        active
                    />

                    <BottomNavItem
                        icon={<FiCalendar />}
                        label="History"
                    />

                    <BottomNavItem
                        icon={<FiPlus />}
                        label="Deposit"
                        onClick={() => setIsDepositOpen(true)}
                    />

                    <BottomNavItem
                        icon={<FiMoreHorizontal />}
                        label="More"
                    />

                </div>

            </nav>


            {/*  DEPOSIT MODAL */}

            {isDepositOpen && (
                <DepositModal
                    onClose={() => setIsDepositOpen(false)}
                />
            )}

        </div>
    );
}


function BottomNavItem({ icon, label, active, onClick, }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex flex-col items-center gap-1 py-2 text-xs ${active
                ? "font-semibold text-green-700"
                : "text-slate-400"
                }`}
        >
            <span className="text-lg">
                {icon}
            </span>

            {label}
        </button>
    );
}


export default Dashboard;