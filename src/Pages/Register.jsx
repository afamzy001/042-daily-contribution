import { useState } from "react";
import { FiUser, FiPhone, FiCheck } from "react-icons/fi";




const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        phone: "",
        contributionPlan: "",
        groupPlan: "",
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agreeToTerms) {
            alert("Please agree to the terms and conditions.");
            return;
        }

        console.log("Registration Data:", formData);
    };

    return (
        <div className="min-h-screen bg-[#f5efe6] px-4 py-10">
            <div className="mx-auto max-w-2xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-[#4a2c1a]">
                        Create Your Account
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Join our daily contribution community and start saving together.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* First Name */}
                        <div>
                            <label
                                htmlFor="firstName"
                                className="mb-2 block text-sm font-medium text-[#4a2c1a]"
                            >
                                First name
                            </label>

                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    required
                                    className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-[#4a2c1a] focus:ring-2 focus:ring-[#4a2c1a]/10"
                                />
                            </div>
                        </div>

                        {/* Surname */}
                        <div>
                            <label
                                htmlFor="surname"
                                className="mb-2 block text-sm font-medium text-[#4a2c1a]"
                            >
                                Surname
                            </label>

                            <input
                                id="surname"
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                placeholder="Enter your surname"
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#4a2c1a] focus:ring-2 focus:ring-[#4a2c1a]/10"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 block text-sm font-medium text-[#4a2c1a]"
                            >
                                Phone number
                            </label>

                            <div className="relative">
                                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="08012345678"
                                    required
                                    className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-[#4a2c1a] focus:ring-2 focus:ring-[#4a2c1a]/10"
                                />
                            </div>
                        </div>

                        {/* Contribution Plan */}
                        <div>
                            <label className="mb-3 block text-sm font-medium text-[#4a2c1a]">
                                Choose contribution plan
                            </label>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {[
                                    { value: "200", label: "₦200", text: "Daily" },
                                    { value: "500", label: "₦500", text: "Daily" },
                                    { value: "1000", label: "₦1,000", text: "Daily" },
                                ].map((plan) => (
                                    <label
                                        key={plan.value}
                                        className={`cursor-pointer rounded-xl border p-4 text-center transition ${formData.contributionPlan === plan.value
                                                ? "border-[#4a2c1a] bg-[#f5efe6]"
                                                : "border-gray-200 hover:border-[#c1b1a4]"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="contributionPlan"
                                            value={plan.value}
                                            checked={formData.contributionPlan === plan.value}
                                            onChange={handleChange}
                                            required
                                            className="sr-only"
                                        />

                                        <p className="text-xl font-bold text-[#4a2c1a]">
                                            {plan.label}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {plan.text}
                                        </p>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Group Payment Plan */}
                        <div>
                            <label
                                htmlFor="groupPlan"
                                className="mb-2 block text-sm font-medium text-[#4a2c1a]"
                            >
                                Group contribution payment plan
                            </label>

                            <select
                                id="groupPlan"
                                name="groupPlan"
                                value={formData.groupPlan}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#4a2c1a] focus:ring-2 focus:ring-[#4a2c1a]/10"
                            >
                                <option value="">Select payment plan</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>

                        {/* Terms */}
                        <label className="flex cursor-pointer items-start gap-3">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className="mt-1 h-4 w-4 accent-[#4a2c1a]"
                            />

                            <span className="text-sm leading-6 text-gray-600">
                                I agree to the{" "}
                                <button
                                    type="button"
                                    className="font-semibold text-[#4a2c1a] hover:underline"
                                >
                                    Terms & Conditions
                                </button>
                                .
                            </span>
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4a2c1a] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
                        >
                            <FiCheck />
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

