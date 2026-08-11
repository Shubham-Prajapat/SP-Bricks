import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import logo from "../assets/sp-bricks-logo.png";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // ==========================================
  // Handle Input
  // ==========================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setMessage({
      type: "",
      text: "",
    });
  };

  // ==========================================
  // Validation
  // ==========================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    if (!formData.agree) {
      newErrors.agree =
        "Please accept the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // Submit
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      /*
        Later Node.js API:

        const response = await axios.post(
          "http://localhost:5000/api/auth/register",
          formData
        );
      */

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setMessage({
        type: "success",
        text: "Account created successfully!",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (error) {
      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#fff8f2] via-white to-[#fff1e5] py-12 px-5 flex items-center">

      <div className="w-full max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* ======================================
              LEFT SECTION
          ======================================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex relative bg-[#7A1408] text-white p-12 flex-col justify-center overflow-hidden"
          >

            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#E8720C]/30" />

            <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-[#FFA857]/20" />

            <div className="relative z-10">

              <img
                src={logo}
                alt="SP Bricks"
                className="h-20 w-auto mb-10"
              />

              <p className="text-[#FFA857] uppercase tracking-[4px] font-semibold text-sm">
                Join SP Bricks
              </p>

              <h1 className="text-4xl xl:text-5xl font-bold mt-4 leading-tight">
                Build Your
                <br />
                Account Today
              </h1>

              <p className="mt-6 text-[#FDF4E8]/80 leading-8 max-w-md">
                Create your SP Bricks account and easily manage
                your enquiries, orders and construction
                requirements.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Quick and easy enquiry management",
                  "Track your construction orders",
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

          {/* ======================================
              FORM
          ======================================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-7 sm:p-10 lg:p-12"
          >

            {/* Mobile Logo */}

            <div className="lg:hidden flex justify-center mb-7">
              <img
                src={logo}
                alt="SP Bricks"
                className="h-16"
              />
            </div>

            {/* Heading */}

            <div className="text-center lg:text-left">

              <p className="text-[#E8720C] uppercase tracking-[3px] font-semibold text-sm">
                Create Account
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                Get Started
              </h2>

              <p className="text-gray-500 mt-3">
                Create your account to continue.
              </p>

            </div>

            {/* Message */}

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
                  <FiCheckCircle />
                ) : (
                  <FiAlertCircle />
                )}

                <span className="text-sm font-medium">
                  {message.text}
                </span>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="flex items-center border border-gray-200 focus-within:border-[#E8720C] rounded-xl px-4">

                  <FiUser className="text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-3.5 outline-none bg-transparent"
                  />

                </div>

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email + Phone */}

              <div className="grid sm:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>

                  <div className="flex items-center border border-gray-200 focus-within:border-[#E8720C] rounded-xl px-4">

                    <FiMail className="text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="w-full px-3 py-3.5 outline-none bg-transparent"
                    />

                  </div>

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>

                  <div className="flex items-center border border-gray-200 focus-within:border-[#E8720C] rounded-xl px-4">

                    <FiPhone className="text-gray-400" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full px-3 py-3.5 outline-none bg-transparent"
                    />

                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Password */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <div className="flex items-center border border-gray-200 focus-within:border-[#E8720C] rounded-xl px-4">

                  <FiLock className="text-gray-400" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    className="w-full px-3 py-3.5 outline-none bg-transparent"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="text-gray-400 hover:text-[#E8720C]"
                  >
                    {showPassword ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>

                <div className="flex items-center border border-gray-200 focus-within:border-[#E8720C] rounded-xl px-4">

                  <FiLock className="text-gray-400" />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full px-3 py-3.5 outline-none bg-transparent"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (prev) => !prev
                      )
                    }
                    className="text-gray-400 hover:text-[#E8720C]"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </button>

                </div>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}

              </div>

              {/* Terms */}

              <div>

                <label className="flex items-start gap-3 cursor-pointer">

                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#E8720C]"
                  />

                  <span className="text-sm text-gray-600">
                    I agree to the Terms & Conditions and
                    Privacy Policy.
                  </span>

                </label>

                {errors.agree && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.agree}
                  </p>
                )}

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E8720C] hover:bg-[#7A1408] disabled:opacity-60 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300 group"
              >

                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account

                    <FiArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition"
                    />
                  </>
                )}

              </button>

            </form>

            {/* Login */}

            <p className="text-center text-gray-500 mt-7">

              Already have an account?{" "}

              <NavLink
                to="/login"
                className="font-semibold text-[#E8720C] hover:text-[#7A1408]"
              >
                Login
              </NavLink>

            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Register;