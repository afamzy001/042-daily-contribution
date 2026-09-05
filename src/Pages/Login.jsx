import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";



function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        setLoading(true);

        try {
            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email: formData.email,
                    password: formData.password,
                });

            if (error) {
                setErrorMsg(error.message);
            } else {
                navigate("/payment");
            }
        } catch (error) {
            setErrorMsg(
                "An unexpected error occurred. Please try again."
            );
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <>

            <div className="mx-auto max-w-md w-full px-5 sm:px-6 border border-red-300 rounded mt-9">

                {/* Error Message */}
                {errorMsg && (
                    <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
                        {errorMsg}
                    </div>
                )}

                <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
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

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-sm font-semibold text-orange-500 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-orange-500"
                            >
                                {showPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="h-5 w-5 accent-orange-500"
                        />

                        <label className="text-sm text-gray-600">
                            Remember me
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-green-700 py-4 font-semibold text-white transition  disabled:bg-gray-400 cursor-pointer"
                    >
                        {loading
                            ? "Signing In..."
                            : "Sign In"}
                    </button>
                </form>

                {/* Register Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-orange-500 hover:underline"
                        >
                            Register Now
                        </Link>
                    </p>
                </div>

            </div>




        </>
    )
}
export default Login;