import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  User,
  Truck,
  Package,
} from "lucide-react";
import { useCart } from "../context/CartContext";
const Checkout = () => {
  const { cart, totalPrice, closeCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    deliveryType: "Delivery",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Customer Details:", formData);
    console.log("Cart Items:", cart);
    console.log("Total:", totalPrice);

    setSubmitted(true);
  };

  // Empty cart
  if (cart.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
        <div className="text-center">
          <Package
            size={70}
            className="mx-auto text-gray-300"
          />

          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Your Cart Is Empty
          </h2>

          <p className="mt-3 text-gray-500">
            Please add some products before proceeding.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-7 bg-[#8f1d0d] hover:bg-[#741609] text-white px-7 py-3 rounded-xl font-semibold transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  // Success screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-8 text-center"
        >
          <CheckCircle
            size={75}
            className="mx-auto text-green-500"
          />

          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Enquiry Submitted!
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            Thank you for contacting SP Bricks. Our team will
            contact you shortly to confirm your order and delivery
            details.
          </p>

          <div className="mt-6 rounded-2xl bg-[#faf8f5] p-5">
            <div className="flex justify-between">
              <span className="text-gray-600">
                Estimated Order Value
              </span>

              <span className="font-bold text-[#8f1d0d]">
                ₹ {totalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <Link
            to="/shop"
            className="mt-7 inline-block w-full rounded-xl bg-[#8f1d0d] hover:bg-[#741609] py-3.5 text-white font-semibold transition"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">

      {/* ================= HEADER ================= */}

      <section className="bg-[#170806] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            Back to Shop
          </Link>

          <h1 className="mt-7 text-4xl md:text-5xl font-bold">
            Checkout
          </h1>

          <p className="mt-3 text-gray-400">
            Submit your enquiry and our team will contact you
            to confirm your order.
          </p>

        </div>
      </section>

      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        <form onSubmit={handleSubmit}>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* ================= LEFT ================= */}

            <div className="lg:col-span-2 space-y-7">

              {/* Customer Information */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
              >

                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-xl bg-[#8f1d0d]/10 flex items-center justify-center">
                    <User
                      size={22}
                      className="text-[#8f1d0d]"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Customer Information
                    </h2>

                    <p className="text-sm text-gray-500">
                      Enter your contact details
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  {/* Name */}

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#8f1d0d] focus:ring-2 focus:ring-[#8f1d0d]/10"
                    />
                  </div>

                  {/* Mobile */}

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Mobile Number *
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      placeholder="Enter mobile number"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#8f1d0d] focus:ring-2 focus:ring-[#8f1d0d]/10"
                    />
                  </div>

                  {/* Email */}

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#8f1d0d] focus:ring-2 focus:ring-[#8f1d0d]/10"
                      />
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* ================= ADDRESS ================= */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
              >

                <div className="flex items-center gap-3 mb-7">

                  <div className="w-11 h-11 rounded-xl bg-[#8f1d0d]/10 flex items-center justify-center">
                    <MapPin
                      size={22}
                      className="text-[#8f1d0d]"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Delivery Address
                    </h2>

                    <p className="text-sm text-gray-500">
                      Where should we deliver your order?
                    </p>
                  </div>

                </div>

                <div className="space-y-5">

                  {/* Address */}

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Address *
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="House no., village, street, area..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#8f1d0d] focus:ring-2 focus:ring-[#8f1d0d]/10"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    {/* City */}

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        City *
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="Enter city"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#8f1d0d] focus:ring-2 focus:ring-[#8f1d0d]/10"
                      />
                    </div>

                    {/* Pincode */}

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Pincode *
                      </label>

                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        placeholder="Enter pincode"
                        maxLength="6"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#8f1d0d] focus:ring-2 focus:ring-[#8f1d0d]/10"
                      />
                    </div>

                  </div>

                </div>
              </motion.div>

              {/* ================= DELIVERY ================= */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
              >

                <div className="flex items-center gap-3 mb-7">

                  <div className="w-11 h-11 rounded-xl bg-[#8f1d0d]/10 flex items-center justify-center">
                    <Truck
                      size={22}
                      className="text-[#8f1d0d]"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Delivery Method
                    </h2>

                    <p className="text-sm text-gray-500">
                      Select how you want to receive your order
                    </p>
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-4">

                  <label
                    className={`border rounded-2xl p-5 cursor-pointer transition ${
                      formData.deliveryType === "Delivery"
                        ? "border-[#8f1d0d] bg-[#8f1d0d]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="deliveryType"
                      value="Delivery"
                      checked={
                        formData.deliveryType === "Delivery"
                      }
                      onChange={handleChange}
                      className="mr-3"
                    />

                    <span className="font-semibold">
                      Home Delivery
                    </span>

                    <p className="mt-2 ml-6 text-sm text-gray-500">
                      Delivery charges will be confirmed by our team.
                    </p>
                  </label>

                  <label
                    className={`border rounded-2xl p-5 cursor-pointer transition ${
                      formData.deliveryType === "Pickup"
                        ? "border-[#8f1d0d] bg-[#8f1d0d]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="deliveryType"
                      value="Pickup"
                      checked={
                        formData.deliveryType === "Pickup"
                      }
                      onChange={handleChange}
                      className="mr-3"
                    />

                    <span className="font-semibold">
                      Self Pickup
                    </span>

                    <p className="mt-2 ml-6 text-sm text-gray-500">
                      Pick up your order directly from SP Bricks.
                    </p>
                  </label>

                </div>

              </motion.div>

              {/* ================= MESSAGE ================= */}

              <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">

                <label className="block text-sm font-semibold mb-2">
                  Additional Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any special requirement or message..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#8f1d0d] focus:ring-2 focus:ring-[#8f1d0d]/10"
                />

              </div>

            </div>

            {/* ================= RIGHT ORDER SUMMARY ================= */}

            <div>

              <div className="sticky top-6">

                <div className="bg-white rounded-3xl shadow-sm p-6">

                  <h2 className="text-2xl font-bold mb-6">
                    Order Summary
                  </h2>

                  {/* Products */}

                  <div className="space-y-5">

                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4"
                      >

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 rounded-xl object-cover"
                        />

                        <div className="flex-1">

                          <h3 className="font-semibold">
                            {item.title}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            Qty: {item.quantity}
                          </p>

                          <p className="mt-1 font-semibold text-[#8f1d0d]">
                            ₹
                            {(
                              item.price * item.quantity
                            ).toLocaleString("en-IN")}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                  <div className="border-t my-6"></div>

                  {/* Total */}

                  <div className="flex justify-between items-center">

                    <span className="text-gray-600">
                      Product Total
                    </span>

                    <span className="font-semibold">
                      ₹ {totalPrice.toLocaleString("en-IN")}
                    </span>

                  </div>

                  <div className="flex justify-between items-center mt-3">

                    <span className="text-gray-600">
                      Delivery
                    </span>

                    <span className="text-sm text-gray-500">
                      Confirm Later
                    </span>

                  </div>

                  <div className="border-t my-5"></div>

                  <div className="flex justify-between items-center">

                    <span className="text-xl font-bold">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-[#8f1d0d]">
                      ₹ {totalPrice.toLocaleString("en-IN")}
                    </span>

                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="mt-7 w-full rounded-xl bg-[#8f1d0d] hover:bg-[#741609] py-4 text-white font-bold transition shadow-lg"
                  >
                    Place Enquiry
                  </button>

                  <div className="mt-5 flex items-start gap-3 text-sm text-gray-500">

                    <Phone
                      size={18}
                      className="mt-0.5 shrink-0"
                    />

                    <p>
                      Our team will contact you to confirm price,
                      quantity, delivery charges and payment details.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </form>

      </main>
    </div>
  );
};

export default Checkout;