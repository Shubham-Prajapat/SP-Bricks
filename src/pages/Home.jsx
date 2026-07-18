import HeroSection from "../components/Home/HeroSection.jsx";
import AboutSection from "../components/Home/AboutSection.jsx";
import WhyChooseSection from "../components/Home/WhyChooseSection.jsx";
import LegacySection from "../components/Home/LegacySection.jsx";
import ProductSection from "../components/Home/ProductSection";
import ContactSection from "../components/Home/ContactSection.jsx";
import { Contact } from "lucide-react";
const Home = () => {
  return (
   <>
         <HeroSection />
         <AboutSection />
         <WhyChooseSection  />
         <LegacySection />  
        <ProductSection />
        <ContactSection />

   </>
  );
};

export default Home;