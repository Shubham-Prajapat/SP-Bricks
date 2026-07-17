import { motion } from "framer-motion";
import heroImg from "../../assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <motion.a
        href="/products" // Apna route ya link yaha do
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.02 }}
        className="block"
      >
        <img
          src={heroImg}
          alt="Hero Banner"
          className="h-auto w-full object-cover"
        />
      </motion.a>
    </section>
  );
};

export default HeroSection;