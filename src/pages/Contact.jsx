
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9753580399",
      description: "Speak directly with our team",
      href: "tel:+919753580399",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@spbricks.com",
      description: "Send us your requirements",
      href: "mailto:info@spbricks.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Borgaon Buzurg, Khandwa",
      description: "Madhya Pradesh, India",
      href: "#location",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#faf9f7]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#160604] px-5 py-24 text-white">

        {/* Decorative circles */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="absolute right-20 top-20 h-2 w-2 rounded-full bg-orange-300" />

        <div className="absolute left-20 top-32 h-1.5 w-1.5 rounded-full bg-orange-300" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">

              <MessageCircle
                size={17}
                className="text-orange-300"
              />

              <span className="text-sm font-medium tracking-wide text-orange-100">
                WE'D LOVE TO HEAR FROM YOU
              </span>

            </div>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Let's Build
              <span className="block text-orange-300">
                Something Strong.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
              Have a construction requirement, product enquiry or simply
              want to know more about SP Bricks? Our team is ready to help.
            </p>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}
      <section className="relative z-10 px-5">

        <div className="mx-auto -mt-10 max-w-7xl">

          <div className="grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl md:grid-cols-3">

            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`group p-7 transition hover:bg-[#faf9f7] ${
                    index !== contactInfo.length - 1
                      ? "border-b border-gray-100 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#7A1408] transition duration-300 group-hover:bg-[#7A1408] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <p className="mt-5 text-sm font-medium uppercase tracking-wider text-gray-400">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-gray-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {item.description}
                  </p>

                </motion.a>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ====================================================== */}
      <section className="px-5 py-24">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.2fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7A1408]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Tell Us About
              <span className="block text-[#7A1408]">
                Your Requirement.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-600">
              Whether you need bricks for a home, commercial project,
              boundary wall or any other construction requirement, send
              us your details and our team will get back to you.
            </p>

            {/* Features */}
            <div className="mt-9 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#7A1408]">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Trusted Quality
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Quality-focused products for dependable construction.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#7A1408]">
                  <Clock3 size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Quick Response
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    We'll respond to your enquiry as soon as possible.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#7A1408]">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Local Service
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Serving customers around Khandwa and nearby areas.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8"
          >

            <div className="mb-8">

              <h3 className="text-2xl font-bold text-gray-900">
                Send an Enquiry
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill in your details and tell us what you need.
              </p>

            </div>

            <form className="space-y-5">

              {/* Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#7A1408] focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Your mobile number"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#7A1408] focus:bg-white focus:ring-2 focus:ring-red-100"
                  />
                </div>

              </div>

              {/* Email */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#7A1408] focus:bg-white focus:ring-2 focus:ring-red-100"
                />

              </div>

              {/* Requirement */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Requirement
                </label>

                <select
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#7A1408] focus:bg-white focus:ring-2 focus:ring-red-100"
                >
                  <option value="">
                    Select your requirement
                  </option>

                  <option value="red-bricks">
                    Red Clay Bricks
                  </option>

                  <option value="jhallar">
                    Decorative Jhallar Bricks
                  </option>

                  <option value="blocks">
                    Solid Concrete Blocks
                  </option>

                  <option value="bulk">
                    Bulk / Construction Order
                  </option>

                  <option value="other">
                    Other Enquiry
                  </option>
                </select>

              </div>

              {/* Message */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#7A1408] focus:bg-white focus:ring-2 focus:ring-red-100"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#7A1408] px-6 py-4 font-semibold text-white shadow-lg shadow-red-900/10 transition hover:bg-[#5e0f06] active:scale-[0.99]"
              >
                Send Enquiry

                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs text-gray-400">
                Your information will only be used to respond to your enquiry.
              </p>

            </form>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          LOCATION
      ====================================================== */}
      <section
        id="location"
        className="bg-[#180806] px-5 py-24 text-white"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Location Info */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              Find Us
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Visit
              <span className="text-orange-300">
                {" "}SP Bricks.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-400">
              We are based in Borgaon Buzurg, Khandwa district,
              Madhya Pradesh. Get in touch with us before visiting
              for product availability and requirements.
            </p>

            <div className="mt-8 flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <MapPin className="text-orange-300" size={23} />
              </div>

              <div>
                <p className="font-semibold">
                  Business Location
                </p>

                <p className="mt-1 leading-6 text-gray-400">
                  Borgaon Buzurg,
                  <br />
                  Khandwa, Madhya Pradesh, India
                </p>
              </div>

            </div>

            {/* Hours */}
            <div className="mt-7 flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Clock3 className="text-orange-300" size={23} />
              </div>

              <div>
                <p className="font-semibold">
                  Business Hours
                </p>

                <p className="mt-1 text-gray-400">
                  Available for enquiries
                </p>
              </div>

            </div>

          </div>

          {/* Map placeholder */}
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#24100c]">

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#7A1408] shadow-2xl shadow-black/40">
                  <MapPin size={30} className="text-white" />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  SP Bricks
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Borgaon Buzurg, Khandwa
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHATSAPP CTA
      ====================================================== */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#eaf8ef] p-8 sm:p-12">

          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

            <div>

              <div className="flex items-center justify-center gap-3 md:justify-start">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                  <MessageCircle size={24} />
                </div>

                <span className="font-bold text-green-700">
                  Quick Enquiry
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                Need a quick response?
              </h2>

              <p className="mt-2 text-gray-600">
                Contact us directly on WhatsApp for product enquiries.
              </p>

            </div>

            <a
              href="https://wa.me/7566860580"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700"
            >
              Chat on WhatsApp
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;
