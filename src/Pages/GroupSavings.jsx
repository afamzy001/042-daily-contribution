
import { useState } from "react";

function GroupRegister() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        groupName: "",
        purpose: "Business capital",
        frequency: "Weekly",
        amount: "1000",
        duration: "3",
        target: "",
    });

    const [showRules, setShowRules] = useState(false);
    const [rulesAccepted, setRulesAccepted] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setMessage("");
    };

    const formatNaira = (amount) =>
        Number(amount).toLocaleString("en-NG");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!rulesAccepted) {
            setMessage("Please read and accept the group rules.");
            return;
        }

        // Front-end demonstration only.
        // Connect to the backend before creating a real group.
        const groupData = {
            ...formData,
            amount: Number(formData.amount),
            duration: Number(formData.duration),
            target: formData.target
                ? Number(formData.target)
                : null,
            rulesAccepted,
        };

        console.log("Group registration ready:", {
            ...groupData,
            password: "[not displayed]",
        });

        setMessage(
            "Your group details are ready. Backend registration comes next."
        );
    };

    const inputClass =
        "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700";

    const labelClass =
        "mb-2 block text-sm font-semibold text-stone-700";

    return (
        <div className="min-h-screen bg-stone-100 px-4 py-10">
            <div className="mx-auto max-w-6xl">

                {/* Page heading */}
                <div className="mb-8 text-center">
                    <p className="mb-2 font-semibold text-green-800">
                        PadiSave Group Savings
                    </p>

                    <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
                        Start saving together
                    </h1>

                    <p className="mt-3 text-stone-600">
                        Set up a group and invite people you trust.
                    </p>
                </div>

                <div className="grid items-start gap-8 lg:grid-cols-3">

                    {/* Registration form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-7 rounded-2xl bg-white p-5 shadow-sm sm:p-8 lg:col-span-2"
                    >

                        {/* Account details */}
                        <section>
                            <h2 className="mb-4 text-xl font-bold text-green-900">
                                Your account details
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className={labelClass}>
                                        name *
                                    </label>

                                    <input
                                        type="tel"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="name"
                                        autoComplete="first-Name"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Surname *
                                    </label>

                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        placeholder="Surname"
                                        autoComplete="tel"
                                        required
                                        className={inputClass}
                                    />
                                </div>


                                <div>
                                    <label className={labelClass}>
                                        Phone number *
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="08012345678"
                                        autoComplete="tel"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Email address *
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Password *
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        className={inputClass}
                                    />

                                    <p className="mt-1 text-xs text-stone-500">
                                        Use at least 8 characters.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-stone-200" />

                        {/* Group details */}
                        <section>
                            <h2 className="mb-1 text-xl font-bold text-green-900">
                                Set up your savings group
                            </h2>

                            <p className="mb-5 text-sm text-stone-500">
                                Choose a plan that works for every member.
                            </p>

                            <div className="space-y-5">

                                <div>
                                    <label className={labelClass}>
                                        Group name *
                                    </label>

                                    <input
                                        type="text"
                                        name="groupName"
                                        value={formData.groupName}
                                        onChange={handleChange}
                                        placeholder="e.g. Family Business Fund"
                                        required
                                        maxLength={60}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Savings purpose *
                                    </label>

                                    <select
                                        name="purpose"
                                        value={formData.purpose}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                    >
                                        <option>Business capital</option>
                                        <option>Future funding</option>
                                        <option>Detty December</option>
                                        <option>Group Project</option>
                                        <option>future investment</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Contribution frequency *
                                    </label>

                                    <div className="grid grid-cols-3 gap-3">
                                        {["Daily", "Weekly", "Monthly"].map(
                                            (frequency) => (
                                                <button
                                                    key={frequency}
                                                    type="button"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            frequency,
                                                        }))
                                                    }
                                                    className={`rounded-lg border px-2 py-3 text-sm font-medium transition ${formData.frequency === frequency
                                                        ? "border-green-800 bg-green-800 text-white"
                                                        : "border-stone-300 text-stone-700 hover:border-green-700"
                                                        }`}
                                                >
                                                    {frequency}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Amount per member *
                                    </label>

                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {[2000, 5000, 10000, 15000].map(
                                            (amount) => (
                                                <button
                                                    key={amount}
                                                    type="button"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            amount: String(amount),
                                                        }))
                                                    }
                                                    className={`rounded-lg border px-2 py-3 text-sm font-semibold transition ${Number(formData.amount) === amount
                                                        ? "border-green-800 bg-green-800 text-white"
                                                        : "border-stone-300 text-stone-700 hover:border-green-700"
                                                        }`}
                                                >
                                                    ₦{formatNaira(amount)}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Duration *
                                    </label>

                                    <select
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                    >
                                        <option value="1">1 month</option>
                                        <option value="3">3 months</option>
                                        <option value="6">6 months</option>
                                        <option value="12">12 months</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={labelClass}>
                                        Optional group savings target (₦)
                                    </label>

                                    <input
                                        type="number"
                                        name="target"
                                        value={formData.target}
                                        onChange={handleChange}
                                        placeholder="e.g. 500000"
                                        min="1"
                                        step="1"
                                        className={inputClass}
                                    />

                                    <p className="mt-1 text-xs text-stone-500">
                                        Enter a target for the entire group, not
                                        for an individual member.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-stone-200" />

                        {/* Rules acceptance */}
                        <section className="rounded-xl border border-green-200 bg-green-50 p-4">
                            <h3 className="font-bold text-green-950">
                                Group contribution and withdrawal rules
                            </h3>

                            <p className="mt-2 text-sm text-stone-600">
                                Before creating your group, read the rules
                                that all members will be expected to follow.
                            </p>

                            <button
                                type="button"
                                onClick={() => setShowRules(true)}
                                className="mt-3 font-semibold text-green-800 underline underline-offset-4"
                            >
                                Read group rules
                            </button>

                            <label className="mt-4 flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={rulesAccepted}
                                    onChange={(e) =>
                                        setRulesAccepted(e.target.checked)
                                    }
                                    className="mt-1 h-4 w-4 accent-green-800"
                                />

                                <span className="text-sm text-stone-700">
                                    I understand that group members must accept
                                    the agreed contribution and withdrawal rules.
                                </span>
                            </label>

                            {!rulesAccepted && (
                                <p className="mt-2 text-xs text-stone-500">
                                    You must accept the rules before submitting.
                                </p>
                            )}
                        </section>

                        {message && (
                            <p
                                role="status"
                                className="rounded-lg bg-stone-100 p-3 text-sm text-stone-700"
                            >
                                {message}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900"
                        >
                            Continue to Create Group
                        </button>
                    </form>

                    {/* Live plan summary */}
                    <aside className="rounded-2xl bg-green-950 p-6 text-white shadow-sm lg:sticky lg:top-6">
                        <p className="text-sm font-medium text-green-200">
                            YOUR GROUP PLAN
                        </p>

                        <h2 className="mt-2 text-2xl font-bold">
                            {formData.groupName || "Not entered"}
                        </h2>

                        <div className="mt-6 space-y-4">
                            <div>
                                <p className="text-sm text-green-200">
                                    Savings purpose
                                </p>
                                <p className="mt-1 font-medium">
                                    {formData.purpose}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-green-200">
                                    Contribution per member
                                </p>
                                <p className="mt-1 text-xl font-bold">
                                    ₦{formatNaira(formData.amount)} /{" "}
                                    {formData.frequency.toLowerCase()}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-green-200">
                                    Duration
                                </p>
                                <p className="mt-1 font-medium">
                                    {formData.duration}{" "}
                                    {Number(formData.duration) === 1
                                        ? "month"
                                        : "months"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-green-200">
                                    Group savings target
                                </p>
                                <p className="mt-1 font-medium">
                                    {formData.target
                                        ? `₦${formatNaira(formData.target)}`
                                        : "Not set"}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl bg-white/10 p-4">
                            <p className="text-sm leading-6 text-green-50">
                                Build a savings habit with people you trust.
                                Make sure everyone agrees to the contribution
                                schedule and withdrawal conditions before
                                inviting them.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Rules modal */}
            {showRules && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                    onClick={() => setShowRules(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="group-rules-title"
                        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2
                            id="group-rules-title"
                            className="text-2xl font-bold text-green-950"
                        >
                            Group Savings Rules
                        </h2>

                        <p className="mt-2 text-sm text-stone-500">
                            Please read these proposed rules before
                            accepting your group plan.
                        </p>

                        <div className="mt-6 space-y-5 text-sm leading-6 text-stone-700">
                            <div>
                                <h3 className="font-bold text-stone-900">
                                    1. Contributions
                                </h3>
                                Every member agrees to contribute the amount
                                and follow the frequency selected for the group.
                            </div>

                            <div>
                                <h3 className="font-bold text-stone-900">
                                    2. Missed contributions
                                </h3>
                                Members should communicate when they cannot
                                contribute on time. Any penalties or grace
                                periods must be agreed upon by the group in
                                advance.
                            </div>

                            <div>
                                <h3 className="font-bold text-stone-900">
                                    3. Withdrawals
                                </h3>
                                Members must follow the group's agreed
                                withdrawal schedule, approval process, and
                                any applicable platform restrictions.
                            </div>

                            <div>
                                <h3 className="font-bold text-stone-900">
                                    4. Group leadership
                                </h3>
                                The group should agree on who can manage
                                membership, review contributions, and approve
                                permitted group decisions.
                            </div>

                            <div>
                                <h3 className="font-bold text-stone-900">
                                    5. Transparency and disputes
                                </h3>
                                Contribution records and group decisions
                                should be transparent to authorized members.
                                Disagreements should follow an agreed dispute
                                resolution process.
                            </div>

                            <div>
                                <h3 className="font-bold text-stone-900">
                                    6. Leaving the group
                                </h3>
                                Members should understand the agreed process
                                for leaving a group and handling any remaining
                                contributions before joining.
                            </div>

                            <div className="rounded-lg bg-amber-50 p-3 text-amber-900">
                                These are proposed rules for the interface.
                                Final group terms, fees, penalties, withdrawal
                                conditions, and dispute procedures must be
                                clearly defined before real savings transactions
                                are enabled.
                            </div>
                        </div>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => setShowRules(false)}
                                className="rounded-lg border border-stone-300 px-5 py-3 font-semibold text-stone-700 hover:bg-stone-50 sm:flex-1"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setRulesAccepted(true);
                                    setShowRules(false);
                                    setMessage("");
                                }}
                                className="rounded-lg bg-green-800 px-5 py-3 font-semibold text-white hover:bg-green-900 sm:flex-1"
                            >
                                I understand and accept
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GroupRegister;
