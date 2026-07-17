import { motion } from "framer-motion";
import { Award, Truck, ShieldCheck, Building2 } from "lucide-react";
import aboutImg from "../../assets/Aboutimg.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold uppercase tracking-[5px]">
            About Company
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
            We Build Strong Foundations
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            We manufacture premium quality bricks using modern technology and
            quality raw materials to deliver durable products for every
            construction project.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="About"
              className="rounded-3xl shadow-2xl w-full"
            />

            <div className="absolute -bottom-6 left-6 bg-orange-500 text-white px-8 py-5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-gray-900">
              Trusted Brick Manufacturer
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Our bricks are manufactured with strict quality standards,
              ensuring strength, durability, and long-lasting performance for
              residential, commercial, and industrial projects.
            </p>

            {/* Cards */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {[
                {
                  icon: <ShieldCheck size={28} />,
                  title: "Premium Quality",
                },
                {
                  icon: <Truck size={28} />,
                  title: "Fast Delivery",
                },
                {
                  icon: <Award size={28} />,
                  title: "Trusted Brand",
                },
                {
                  icon: <Building2 size={28} />,
                  title: "Modern Factory",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
                >
                  <div className="text-orange-500 mb-4">
                    {item.icon}
                  </div>

                  <h4 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h4>
                </motion.div>
              ))}

            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Read More
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;