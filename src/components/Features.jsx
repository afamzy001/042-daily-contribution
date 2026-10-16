import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";


// const features = [
//     {
//         icon: <IoPersonOutline />,
//         title: "Personal Savings",
//         description: "personally save and monitor your progress in one place.",
//         path: "/dashboard",
//     },
//     {
//         icon: <HiOutlineUserGroup />,
//         title: "Group Saving Goals",
//         description: "Create a group your friends to join you and set a target",
//     },


// ];

function Features() {
    return (
        <section id="features" className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-24 ">
            <div className="mx-auto max-w-7xl ">

                <div className="mx-auto max-w-2xl text-center ">

                    <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                        Features
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                        Everything you need to save better
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                        Padi-save gives you simple tools to build a consistent
                        saving habit without making things complicated.
                    </p>

                </div>

                {/* Savings options */}
                <section>

                    <div className="flex">
                        <h2 className="mb-4 text-lg font-bold text-[#13c34e] rounded-3xl sm:text-xl">
                            Saving plans
                        </h2>
                        <FiArrowDownRight className="mt-2 text-[#13c34e]" />
                    </div>


                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Personal savings card */}
                        <Link
                            to="/personal-savings"
                            className=" rounded-2xl border border-green-800 bg-[#012d1b] p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md sm:p-7"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                                <GiTakeMyMoney size={25} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-stone-200">
                                Personal Savings
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-100">
                                Save towards your personal goals, monitor your deposits,
                                and check when your money becomes eligible for withdrawal.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-100">
                                Open Personal Savings
                                <FiArrowRight className="transition group-hover:translate-x-1" />
                            </div>
                        </Link>

                        {/* Group savings card */}
                        <Link
                            to="/group-register"
                            className="group rounded-2xl  bg-[#012d1b] p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md sm:p-7"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                                <FiUsers size={25} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-stone-200">
                                Group Savings
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-stone-100">
                                Create a savings group, invite friends using their
                                PadiSave ID, or accept an invitation to join a group.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-100">
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
        </section>
    );
}

export default Features;