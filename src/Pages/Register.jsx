import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Register() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        dailyContribution: "",
    });

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrorMsg(null);

        // Check passwords
        if (formData.password !== formData.confirmPassword) {
            setErrorMsg("Passwords do not match.");
            return;
        }

        // Check contribution
        if (!formData.dailyContribution) {
            setErrorMsg("Please select your daily contribution.");
            return;
        }

        setLoading(true);

        try {
            /*
             * Create Supabase account
             *
             * The selected contribution plan is passed
             * inside user metadata so it can be used when
             * creating the user's profile/plan.
             */
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        full_name: formData.fullName,
                        phone: formData.phone,
                        daily_contribution: Number(
                            formData.dailyContribution
                        ),
                    },
                },
            });

            if (error) {
                setErrorMsg(error.message);
                return;
            }

            if (data.user) {
                navigate("/payment");
            }
        } catch (error) {
            console.error(error);

            setErrorMsg(
                "An unexpected error occurred. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto mt-9 w-full max-w-md px-5 sm:px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Create Your Account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Start your daily contribution journey
                    </p>
                </div>

                {/* Error Message */}
                {errorMsg && (
                    <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
                        {errorMsg}
                    </div>
                )}

                <form
                    className="space-y-5"
                    onSubmit={handleSubmit}
                >
                    {/* Full Name */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="08012345678"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                    </div>

                    {/* Daily Contribution */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Daily Contribution
                        </label>

                        <select
                            name="dailyContribution"
                            required
                            value={formData.dailyContribution}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        >
                            <option value="">
                                Select daily contribution
                            </option>

                            <option value="200">
                                ₦200 per day
                            </option>

                            <option value="500">
                                ₦500 per day
                            </option>

                            <option value="1000">
                                ₦1,000 per day
                            </option>

                            <option value="2000">
                                ₦2,000 per day
                            </option>

                            <option value="5000">
                                ₦5,000 per day
                            </option>
                        </select>

                        <p className="mt-2 text-xs text-gray-500">
                            You can change your contribution plan later
                            from your dashboard settings.
                        </p>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password"
                                required
                                minLength={6}
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
                            >
                                {showPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                name="confirmPassword"
                                required
                                minLength={6}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            required
                            className="mt-1 h-4 w-4 accent-orange-500"
                        />

                        <p className="text-sm text-gray-600">
                            I agree to the terms and conditions.
                        </p>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer rounded-xl bg-green-700 py-4 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-orange-500 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Register;
