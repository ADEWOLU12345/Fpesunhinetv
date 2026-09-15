import { useState } from "react";

import { FaEye, FaEyeSlash, FaUserShield } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-blue-900 p-5 rounded-full text-white">
            <FaUserShield size={40} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mt-6">
          Admin Login
        </h1>

        <p className="text-gray-500 text-center mt-2">
          FPE Sunshine TV Management Portal
        </p>

        <form className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label className="font-semibold">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full mt-2 border rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-6 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
          </div>

          {/* Options */}
          <div className="flex justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-blue-900 font-semibold"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
          <Route path="/dashboard" element={<Dashboard />} />
        </form>

      </div>

    </div>
  );
}

export default Login;