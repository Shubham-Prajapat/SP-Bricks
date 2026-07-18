import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
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
    value: "Borgaon Buzurg Dist. Khandwa , Madhya Pradesh",
  },
  {
    icon: <Clock size={28} />,
    title: "Working Hours",
    value: "24*7 Days a Week",
  },
];

const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-orange-600 font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Let's Build Something Strong Together
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            Looking for premium quality bricks? Contact our team today for
            pricing, bulk orders, and project inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">

              {contactInfo.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
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

                </motion.div>

              ))}

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <form className="bg-white rounded-3xl shadow-xl p-8">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
                />

              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-xl px-5 py-4 mt-5 w-full outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                placeholder="Project Location"
                className="border rounded-xl px-5 py-4 mt-5 w-full outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your requirement..."
                className="border rounded-xl px-5 py-4 mt-5 w-full outline-none resize-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 font-semibold"
              >
                <Send size={20} />
                Send Inquiry
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;