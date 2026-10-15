import { Link } from "react-router-dom";
import { FiUsers, FiArrowRight } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";

export default function Startsaving() {
    // Temporary user information for the dashboard design.
    // Later, we will get this from the registered user's account.
    const user = {
        name: "User",
        padiSaveId: "PS-000001",
    };

    return (
        <main className="min-h-screen bg-stone-50 px-4 py-8 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-6xl">
                {/* Welcome section */}
                <section className="mb-8">
                    <p className="text-sm font-medium text-green-700">
                        Welcome to PadiSave
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                        Hello, {user.name} 👋
                    </h1>

                    <p className="mt-2 text-sm text-gray-600 sm:text-base">
                        How would you like to save today?
                    </p>

                    <div className="mt-4 inline-flex rounded-lg bg-white px-3 py-2 text-sm text-gray-600 shadow-sm">
                        Your PadiSave ID:
                        <span className="ml-2 font-semibold text-green-800">
                            {user.padiSaveId}
                        </span>
                    </div>
                </section>

                {/* Savings options */}
                <section>
                    <h2 className="mb-4 text-lg font-bold text-gray-900 sm:text-xl">
                        Your Savings
                    </h2>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Personal savings card */}
                        <Link
                            to="/personal-savings"
                            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md sm:p-7"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                                <GiTakeMyMoney size={25} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Personal Savings
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Save towards your personal goals, monitor your deposits,
                                and check when your money becomes eligible for withdrawal.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-800">
                                Open Personal Savings
                                <FiArrowRight className="transition group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Group savings card */}
                        <Link
                            to="/group-savings"
                            className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md sm:p-7"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                                <FiUsers size={25} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Group Savings
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Create a savings group, invite friends using their
                                PadiSave ID, or accept an invitation to join a group.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-800">
                                Open Group Savings
                                <FiArrowRight className="transition group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Helpful information */}
                <section className="mt-8 rounded-2xl bg-green-900 p-5 text-white sm:p-6">
                    <h2 className="text-lg font-bold">Save on your own. Grow together.</h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-green-100">
                        Manage your personal savings independently while joining
                        trusted groups to work towards shared financial goals.
                    </p>
                </section>
            </div>
        </main>
    );
}
