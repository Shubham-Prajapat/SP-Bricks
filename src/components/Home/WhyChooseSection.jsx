import { motion } from "framer-motion";
import whyImg from "../../assets/why-choose-img.png";

const features = [
  {
    title: "Premium Quality",
    desc: "Manufactured with high-grade raw materials for superior strength.",
    icon: "🧱",
  },
  {
    title: "Fast Delivery",
    desc: "On-time delivery to construction sites without delays.",
    icon: "🚚",
  },
  {
    title: "Affordable Price",
    desc: "Best quality bricks at competitive market prices.",
    icon: "💰",
  },
  {
    title: "Trusted Manufacturer",
    desc: "Serving builders and contractors with reliable products.",
    icon: "🏗️",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const WhyChooseSection = () => {
  return (
    <section className="bg-[#fffaf5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Building Strong Foundations
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            We are committed to delivering high-quality bricks with excellent
            durability, timely delivery, and complete customer satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <img
              src={whyImg}
              alt="Bricks"
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Cards */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                transition={{ duration: .3 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-orange-100"
              >
                <div className="text-5xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;