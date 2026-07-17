import { motion } from "framer-motion";
import founderImg from "../../assets/founder.png";

const LegacySection = () => {
  return (
    <section className="bg-[#FFF9F4] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-orange-500 uppercase tracking-[5px] font-semibold">
            About SP Bricks
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            Our Legacy. <br />
            <span className="text-orange-500">
              Your Trust.
            </span>
          </h2>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <p className="text-lg text-gray-600 leading-9">

              Since <span className="font-bold text-orange-500">1990</span>,
              SP Bricks has been committed to manufacturing premium quality
              bricks that build strong foundations and long-lasting trust.

            </p>

            {/* Experience Card */}

            <motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              viewport={{ once: true }}

              className="mt-10 bg-white rounded-3xl shadow-xl p-8"

            >

              <div className="grid grid-cols-2 gap-6">

                <div>

                  <h3 className="text-orange-500 text-5xl font-bold">
                    1990
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Business Started
                  </p>

                </div>

                <div>

                  <h3 className="text-orange-500 text-5xl font-bold">
                    35+
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Years Experience
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* Right */}

          <motion.div

            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}

            className="relative flex justify-center"

          >

            {/* Orange Background */}

            <div className="absolute w-[320px] h-[420px] bg-orange-500 rounded-[40px] rotate-6"></div>

            {/* Image */}

            <img
              src={founderImg}
              alt="Founder"
              className="relative z-10 w-[320px] md:w-[380px] rounded-[40px] shadow-2xl object-cover"
            />

            {/* Floating Badge */}

            <motion.div

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 2,
              }}

              className="absolute bottom-8 left-0 bg-white shadow-xl rounded-2xl px-6 py-4 z-20"

            >

              <h4 className="text-orange-500 text-3xl font-bold">
                Since 1990
              </h4>

              <p className="text-gray-600 text-sm">
                Building Trust with Quality
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LegacySection;