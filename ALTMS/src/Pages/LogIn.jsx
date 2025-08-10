import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import RightImage from "../images/20250712_2257_Map with Van Icon_remix_01k00a4336f7rr3g19hjhksjbx.png"
import UILogo from "../images/university-of-ibadan-logo-transparent.png"
import { useNavigate, Link } from "react-router-dom";
import "../index.css"; // Ensure Tailwind CSS is imported

// Available user roles
const roles = ["Admin", "Staff/Student", "Driver"];

export default function LoginPage() {
  const [role, setRole] = useState("Admin");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    // Redirect based on role
    if (role === "Admin") navigate("/admin");
    else if (role === "Staff/Student") navigate("/staff");
    else if (role === "Driver") navigate("/driver");
  }
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e6f1f4] to-[#d9ebee] p-6">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            {/* LEFT – FORM */}
            <div className="w-full md:w-1/2 p-10 space-y-6">
                {/* Logo & Heading */}
                <header className="flex items-center gap-3">
                    <img src={UILogo} alt="UI crest" className="h-15 w-20" />
                    <div>
                        <h1 className="text-3xl font-extrabold leading-none">ALTMS</h1>
                        <p className="text-lg font-semibold text-gray-700 mt-1">Login Portal</p>
                    </div>
                </header>

                {/* Login Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1" htmlFor="email">
                            Email or Username
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Email or Username"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-medium mb-1" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Role selector */}
                    <div className="flex gap-2 mt-2">
                        {roles.map((r) => (
                            <button
                                key={r}
                                type="button"
                                onClick={() => setRole(r)}
                                className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium border transition ${
                                    role === r
                                        ? "bg-emerald-600 text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    {/* Remember me & Forgot */}
                    <div className="flex items-center justify-between text-sm mt-2">
                        <label className="inline-flex items-center gap-2">
                            <input type="checkbox" className="accent-emerald-600" />
                            Remember Me
                        </label>
                        <a href="#" className="text-emerald-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg py-2 shadow transition"
                    >
                        Login
                    </button>
                </form>

                {/* Register link */}
                <p className="text-sm text-center mt-4">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-emerald-600 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>

            {/* RIGHT – ILLUSTRATION */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center relative bg-[#e6f1f4]">
                <img
                    src={RightImage}
                    alt="Map with Van Icon"
                    className="object-cover w-full h-full max-h-[500px] rounded-tr-3xl rounded-br-3xl"
                    style={{ minHeight: "100%" }}
                />
            </div>
        </div>
    </div>
);
}
