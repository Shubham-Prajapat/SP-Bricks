import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BrickWall,
  CheckCircle2,
  Factory,
  Hammer,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import fatherImage from "../assets/founder.png";
import bhattaImage from "../assets/bricks-bhtta.png";

function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      description:
        "We focus on producing strong and reliable construction materials that meet the needs of our customers.",
    },
    {
      icon: Award,
      title: "Trusted Experience",
      description:
        "Years of practical experience in brick manufacturing have helped us understand quality and customer requirements.",
    },
    {
      icon: Users,
      title: "Customer Trust",
      description:
        "We believe long-term relationships are built through honest communication, reliable products and dependable service.",
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      description:
        "We work to provide timely product availability and dependable delivery support for local construction projects.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Raw Material",
      description:
        "Carefully selected raw materials are prepared for brick manufacturing.",
    },
    {
      number: "02",
      title: "Manufacturing",
      description:
        "Bricks are shaped and processed with attention to consistency and quality.",
    },
    {
      number: "03",
      title: "Quality Check",
      description:
        "Products are checked before they are prepared for customers.",
    },
    {
      number: "04",
      title: "Delivery",
      description:
        "Orders are prepared and supplied according to customer requirements.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#180806]">

        {/* Background image */}
        <img
          src={bhattaImage}
          alt="SP Bricks brick manufacturing"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#180806] via-[#180806]/90 to-[#180806]/40" />

        {/* Decorative circle */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <BrickWall size={17} className="text-orange-300" />

              <span className="text-sm font-medium tracking-wide text-orange-100">
                BUILT ON TRUST • BUILT TO LAST
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Building
              <span className="block text-orange-300">
                Foundations.
              </span>
              Building Trust.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
              Welcome to SP Bricks — a trusted name in quality brick
              manufacturing, serving construction needs with experience,
              dedication and commitment to quality.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/shop"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#7A1408] px-6 py-3.5 font-semibold text-white transition hover:bg-[#981b0b]"
              >
                Explore Our Products

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        {/* <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">

            <div className="px-5 py-6 text-center">
              <p className="text-3xl font-bold text-white">35+</p>
              <p className="mt-1 text-sm text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="px-5 py-6 text-center">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="mt-1 text-sm text-gray-400">
                Quality Focus
              </p>
            </div>

            <div className="px-5 py-6 text-center">
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="mt-1 text-sm text-gray-400">
                Product Categories
              </p>
            </div>

            <div className="px-5 py-6 text-center">
              <p className="text-3xl font-bold text-white">MP</p>
              <p className="mt-1 text-sm text-gray-400">
                Serving Locally
              </p>
            </div>

          </div>
        </div> */}
      </section>

      {/* =====================================================
          STORY SECTION
      ====================================================== */}
      <section className="bg-[#faf9f7] px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={fatherImage}
                alt="SP Bricks founder"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm uppercase tracking-widest text-orange-200">
                  Our Journey
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  Experience passed from one generation to the next.
                </p>
              </div>
            </div>

            {/* Experience card */}
            <div className="absolute -bottom-8 -right-4 rounded-2xl bg-[#7A1408] p-6 text-white shadow-2xl sm:-right-8">
              <p className="text-4xl font-bold">35+</p>
              <p className="mt-1 text-sm text-orange-100">
                Years of Experience
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7A1408]">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              More Than Bricks.
              <span className="block text-[#7A1408]">
                We Build Trust.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              SP Bricks is a family-run brick manufacturing business built
              around a simple principle — provide dependable construction
              materials while maintaining honest relationships with our
              customers.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              With more than 35 years of experience in the brick business,
              our journey has been shaped by hard work, practical knowledge
              and a commitment to serving the construction community.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Quality-focused brick manufacturing",
                "Reliable products for construction projects",
                "Customer-focused service",
                "Long-term relationships built on trust",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-[#7A1408]"
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7A1408]">
              What Drives Us
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Values
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              The principles that guide the way we manufacture products
              and serve our customers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-[#7A1408] transition group-hover:bg-[#7A1408] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          MANUFACTURING SECTION
      ====================================================== */}
      <section className="bg-[#180806] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              How We Work
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              From Earth
              <span className="block text-orange-300">
                To Your Project.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              Every brick goes through a carefully managed process before
              reaching our customers. Our focus is consistency, durability
              and dependable service.
            </p>

            <div className="mt-10 grid gap-7 sm:grid-cols-2">

              {process.map((item) => (
                <div
                  key={item.number}
                  className="border-l border-white/20 pl-5"
                >
                  <span className="text-sm font-bold text-orange-300">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Manufacturing image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={bhattaImage}
                alt="SP Bricks manufacturing process"
                className="h-[550px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <Factory className="text-orange-300" size={30} />

              <p className="mt-3 font-semibold">
                Family Owned
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Built with experience
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          WHY SP BRICKS
      ====================================================== */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-[#7A1408] p-8 text-white md:col-span-2">
              <Hammer size={35} className="text-orange-200" />

              <h3 className="mt-8 text-3xl font-bold">
                Made for Real Construction.
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-orange-100">
                From individual homes to larger construction projects,
                SP Bricks aims to provide dependable materials that
                customers can rely on.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-100 p-8">
              <Award size={35} className="text-[#7A1408]" />

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                Experience You Can Trust
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                More than three decades of experience in the brick
                manufacturing business.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-5 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#7A1408] px-6 py-16 text-center text-white sm:px-12">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
              Let's Build Together
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Building Something?
              <span className="block text-orange-200">
                Let's Talk.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-red-100">
              Explore our products or get in touch with SP Bricks for
              your construction requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#7A1408] transition hover:bg-gray-100"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Contact SP Bricks
              </a>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
