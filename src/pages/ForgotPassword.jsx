import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FiMail,
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import logo from "../assets/sp-bricks-logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      /*
        Later Node.js API:

        await axios.post(
          "http://localhost:5000/api/auth/forgot-password",
          { email }
        );
      */

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      setSuccess(true);

    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Unable to send reset link. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#fff8f2] via-white to-[#fff1e5] flex items-center justify-center px-5 py-12">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl"
      >

        <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-10 lg:p-12">

          {/* Logo */}

          <div className="flex justify-center mb-8">

            <img
              src={logo}
              alt="SP Bricks"
              className="h-16 sm:h-20 w-auto"
            />

          </div>

          {/* Icon */}

          <div className="flex justify-center mb-6">

            <div className="w-16 h-16 rounded-full bg-orange-100 text-[#E8720C] flex items-center justify-center">

              <FiMail size={30} />

            </div>

          </div>

          {/* Heading */}

          <div className="text-center">

            <p className="text-[#E8720C] uppercase tracking-[3px] font-semibold text-sm">
              Password Recovery
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Forgot Password?
            </h1>

            <p className="text-gray-500 mt-4 leading-7">
              Enter your registered email address and
              we'll send you a link to reset your password.
            </p>

          </div>

          {/* Success */}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-7 bg-green-50 border border-green-100 rounded-xl p-5"
            >

              <div className="flex items-start gap-3">

                <FiCheckCircle
                  className="text-green-600 mt-0.5"
                  size={21}
                />

                <div>

                  <h3 className="font-semibold text-green-700">
                    Reset link sent!
                  </h3>

                  <p className="text-sm text-green-600 mt-1">
                    If an account exists with this email,
                    you will receive password reset
                    instructions.
                  </p>

                </div>

              </div>

            </motion.div>
          )}

          {/* Error */}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-7 bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 text-red-600"
            >

              <FiAlertCircle />

              <span className="text-sm">
                {error}
              </span>

            </motion.div>
          )}

          {/* Form */}

          {!success && (
            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div
                className={`flex items-center border rounded-xl px-4 transition ${
                  error
                    ? "border-red-500"
                    : "border-gray-200 focus-within:border-[#E8720C]"
                }`}
              >

                <FiMail className="text-gray-400 shrink-0" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your registered email"
                  className="w-full px-3 py-4 outline-none bg-transparent"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-[#E8720C] hover:bg-[#7A1408] disabled:opacity-60 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 group"
              >

                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Reset Link

                    <FiArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition"
                    />
                  </>
                )}

              </button>

            </form>
          )}

          {/* Back Login */}

          <div className="flex justify-center mt-8">

            <NavLink
              to="/login"
              className="flex items-center gap-2 text-gray-600 hover:text-[#E8720C] font-semibold transition"
            >

              <FiArrowLeft />

              Back to Login

            </NavLink>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default ForgotPassword;