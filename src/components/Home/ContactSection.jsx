import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    value: "+91 97535 80399",
  },
  {
    icon: <Mail size={28} />,
    title: "Email",
    value: "info@spbricks.com",
  },
  {
    icon: <MapPin size={28} />,
    title: "Location",
    value: "Borgaon Buzurg, Dist. Khandwa, Madhya Pradesh",
  },
  {
    icon: <Clock size={28} />,
    title: "Working Hours",
    value: "24 × 7 Available",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.location.trim())
      newErrors.location = "Project location is required";

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setSuccess("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      // Replace with your Node API
      await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setSuccess("Inquiry Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-orange-600 font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Let's Build Something Strong Together
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Contact us today for pricing, bulk brick orders,
            construction requirements and project inquiries.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {contactInfo.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-lg hover:-translate-y-2 transition"
              >

                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.value}
                </p>

              </div>

            ))}

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              </div>

              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              </div>

              <div>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Project Location"
                  className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.location}
                </p>
              </div>

            </div>

            <div className="mt-5">

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirement..."
                className="w-full border rounded-xl px-4 py-4 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>

            </div>

            {success && (
              <div className="mt-5 text-green-600 font-semibold">
                {success}
              </div>
            )}

            <button
              disabled={loading}
              className="cursor-pointer mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl flex items-center justify-center gap-3 transition font-semibold"
            >
              <Send size={20} />

              {loading ? "Sending..." : "Send Inquiry"}

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;