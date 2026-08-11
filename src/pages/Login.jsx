import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import logo from "../assets/sp-bricks-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // ---------------------------------------
  // Handle Input
  // ---------------------------------------

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Remove field error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setMessage({
      type: "",
      text: "",
    });
  };

  // ---------------------------------------
  // Validation
  // ---------------------------------------

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ---------------------------------------
  // Submit
  // ---------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setLoading(true);

      /*
       * Later Node.js API:
       *
       * const response = await axios.post(
       *   "http://localhost:5000/api/auth/login",
       *   formData
       * );
       */

      // Temporary simulation
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setMessage({
        type: "success",
        text: "Login successful!",
      });

      // Later backend authentication ke baad:
      // localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Invalid email or password.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#fff8f2] via-white to-[#fff1e5] flex items-center py-12 px-5">

      <div className="w-full max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* ==========================================
              LEFT BRANDING SECTION
          =========================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex relative bg-[#7A1408] text-white p-12 flex-col justify-center overflow-hidden"
          >

            {/* Decorative circles */}

            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#E8720C]/30" />

            <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-[#FFA857]/20" />

            <div className="relative z-10">

              <img
                src={logo}
                alt="SP Bricks"
                className="h-20 w-auto mb-10"
              />

              <p className="text-[#FFA857] uppercase tracking-[4px] font-semibold text-sm">
                Welcome Back
              </p>

              <h1 className="text-4xl xl:text-5xl font-bold mt-4 leading-tight">
                Building Trust
                <br />
                With Every Brick
              </h1>

              <p className="mt-6 text-[#FDF4E8]/80 leading-8 max-w-md">
                Login to your SP Bricks account to manage your
                enquiries, orders and construction requirements.
              </p>

              {/* Features */}

              <div className="mt-10 space-y-5">

                {[
                  "Manage your brick enquiries",
                  "Track your orders",
                  "Get personalized quotations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#E8720C] flex items-center justify-center">
                      <FiCheckCircle size={16} />
                    </div>

                    <span className="text-[#FDF4E8]">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </motion.div>

          {/* ==========================================
              RIGHT LOGIN FORM
          =========================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-7 sm:p-10 lg:p-12"
          >

            {/* Mobile Logo */}

            <div className="lg:hidden flex justify-center mb-8">
              <img
                src={logo}
                alt="SP Bricks"
                className="h-16 w-auto"
              />
            </div>

            {/* Heading */}

            <div className="text-center lg:text-left">

              <p className="text-[#E8720C] uppercase tracking-[3px] font-semibold text-sm">
                Account Login
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                Welcome Back!
              </h2>

              <p className="text-gray-500 mt-3">
                Please enter your details to continue.
              </p>

            </div>

            {/* ==========================================
                MESSAGE
            =========================================== */}

            {message.text && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 rounded-xl p-4 flex items-center gap-3 ${
                  message.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {message.type === "success" ? (
                  <FiCheckCircle size={20} />
                ) : (
                  <FiAlertCircle size={20} />
                )}

                <span className="text-sm font-medium">
                  {message.text}
                </span>
              </motion.div>
            )}

            {/* ==========================================
                FORM
            =========================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* Email */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <div
                  className={`flex items-center border rounded-xl px-4 transition ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-200 focus-within:border-[#E8720C]"
                  }`}
                >

                  <FiMail className="text-gray-400 shrink-0" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-4 outline-none text-gray-800 bg-transparent"
                  />

                </div>

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* Password */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <div
                  className={`flex items-center border rounded-xl px-4 transition ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-200 focus-within:border-[#E8720C]"
                  }`}
                >

                  <FiLock className="text-gray-400 shrink-0" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-3 py-4 outline-none text-gray-800 bg-transparent"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="text-gray-400 hover:text-[#E8720C] transition"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password}
                  </p>
                )}

              </div>

              {/* Remember + Forgot */}

              <div className="flex items-center justify-between gap-4">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#E8720C]"
                  />

                  <span className="text-sm text-gray-600">
                    Remember me
                  </span>

                </label>

                <NavLink
                  to="/forgot-password"
                  className="text-sm font-semibold text-[#E8720C] hover:text-[#A11E04]"
                >
                  Forgot Password?
                </NavLink>

              </div>

              {/* Login Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E8720C] hover:bg-[#7A1408] disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 group"
              >

                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />

                    Logging in...
                  </>
                ) : (
                  <>
                    Login

                    <FiArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                )}

              </button>

            </form>

            {/* Register */}

            <div className="mt-8 text-center text-gray-500">

              Don't have an account?{" "}

              <NavLink
                to="/register"
                className="font-semibold text-[#E8720C] hover:text-[#A11E04]"
              >
                Create Account
              </NavLink>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Login;