import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import UILogo from "../images/university-of-ibadan-logo-transparent.png";

export default function Register() {
  const [role, setRole] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    // Redirect based on role
    if (role === "Staff" || role === "Student") navigate("/staff");
    else navigate("/driver");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-2 sm:p-4">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-md p-4 sm:p-8">
        {/* Image Section */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={UILogo}
            alt="ALTMS Logo"
            className="h-16 sm:h-20 w-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          Create an ALTMS Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">
              Email (name@ui.edu.ng)
            </label>
            <input
              type="email"
              placeholder="Email (name@ui.edu.ng)"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 sm:top-9 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-700 mb-1 text-sm sm:text-base">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-8 sm:top-9 text-gray-500 hover:text-gray-700"
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">Role</label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={role === "Student"}
                  onChange={() => setRole("Student")}
                />
                Student
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="radio"
                  name="role"
                  value="Staff"
                  checked={role === "Staff"}
                  onChange={() => setRole("Staff")}
                />
                Staff
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  type="radio"
                  name="role"
                  value="Driver"
                  checked={role === "Driver"}
                  onChange={() => setRole("Driver")}
                />
                Driver
              </label>
            </div>
          </div>

          {/* Matriculation Number */}
          {role === "Student" && (
            <div>
              <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                Student's Matriculation Number
              </label>
              <input
                type="text"
                placeholder="Student's Matriculation Number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          )}
          {/* Driver’s Licence Number */}
          {role === "Driver" && (
            <div>
              <label className="block text-gray-700 mb-1 text-sm sm:text-base">
                Driver’s Licence Number
              </label>
              <input
                type="text"
                placeholder="Driver’s Licence Number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          )}

          {/* Register Button */}
          <button className="w-full bg-emerald-700 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-emerald-800 transition text-sm sm:text-base">
            Register
          </button>
        </form>
        {/* Login Link */}
        <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-emerald-700 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
