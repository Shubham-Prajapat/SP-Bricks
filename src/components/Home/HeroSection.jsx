import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import hero1 from "../../assets/sp-bricks-banner-1.png";
import hero2 from "../../assets/sp-bricks-banner-2.png";
import hero3 from "../../assets/sp-bricks-banner-3.png";

const banners = [
  {
    id: 1,
    image: hero1,
    link: "/products",
  },
  {
    id: 2,
    image: hero2,
    link: "/products",
  },
  {
    id: 3,
    image: hero3,
    link: "/products",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
  modules={[Autoplay, EffectFade, Pagination]}
  effect="fade"
  loop
  speed={1200}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  className="h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px]"
>
  {banners.map((banner) => (
    <SwiperSlide key={banner.id}>
      <a
        href={banner.link}
        className="w-full h-full flex items-center justify-center bg-white"
      >
        <img
          src={banner.image}
          alt="SP Bricks Banner"
          className="w-full h-full object-contain"
        />
      </a>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default HeroSection;