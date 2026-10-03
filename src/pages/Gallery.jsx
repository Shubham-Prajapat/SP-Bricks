import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Factory,
  BrickWall,
  Truck,
} from "lucide-react";

// Gallery images
// Apni actual images ko src/assets/gallery folder me rakhein
import bhattaImage from "../assets/bricks-bhtta.png";
import papaImage from "../assets/founder.png";
import redBricksImage from "../assets/red-clay-bricks.png";
import jhallarBricksImage from "../assets/Jhallar-desing-bricks.png";
import concreteBlocksImage from "../assets/solid-concrete-blocks.png";

const galleryImages = [
  {
    id: 1,
    image: bhattaImage,
    title: "Our Brick Kiln",
    category: "Bhatta",
    description:
      "Our traditional brick manufacturing setup in Madhya Pradesh.",
  },
  {
    id: 2,
    image: papaImage,
    title: "Our Founder",
    category: "Our Journey",
    description:
      "Leading SP Bricks with experience, dedication and commitment.",
  },
  {
    id: 3,
    image: redBricksImage,
    title: "Red Clay Bricks",
    category: "Products",
    description:
      "Strong and durable red clay bricks for residential and commercial construction.",
  },
  {
    id: 4,
    image: jhallarBricksImage,
    title: "Decorative Jhallar Bricks",
    category: "Products",
    description:
      "Beautiful decorative bricks for walls, boundaries and exterior designs.",
  },
  {
    id: 5,
    image: concreteBlocksImage,
    title: "Solid Concrete Blocks",
    category: "Products",
    description:
      "Reliable and durable concrete blocks for construction projects.",
  },
  {
    id: 6,
    image: bhattaImage,
    title: "Brick Manufacturing",
    category: "Manufacturing",
    description:
      "A glimpse into our brick manufacturing process.",
  },
  {
    id: 7,
    image: redBricksImage,
    title: "Quality Bricks",
    category: "Quality",
    description:
      "Carefully manufactured bricks with focus on strength and consistency.",
  },
  {
    id: 8,
    image: concreteBlocksImage,
    title: "Construction Materials",
    category: "Products",
    description:
      "Quality construction materials supplied for different building needs.",
  },
];

const categories = [
  "All",
  "Products",
  "Bhatta",
  "Manufacturing",
  "Quality",
  "Our Journey",
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === selectedCategory
        );

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      currentIndex === 0
        ? filteredImages.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex =
      currentIndex === filteredImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#170806]">
        <img
          src={bhattaImage}
          alt="SP Bricks Brick Kiln"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
                <Images size={17} />
                SP Bricks Gallery
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                A Glimpse Into
                <span className="block text-[#d99a45]">
                  Our Journey
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
                Explore our brick manufacturing journey, products,
                quality process and the people behind SP Bricks.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="rounded-full bg-[#8f1d0d] px-7 py-3.5 font-semibold text-white transition hover:bg-[#a82715]"
                >
                  Explore Gallery
                </a>

                <a
                  href="/shop"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  View Products
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#8f1d0d]">
                Our Story
              </p>

              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Built With
                <span className="text-[#8f1d0d]"> Experience.</span>
                <br />
                Made With
                <span className="text-[#8f1d0d]"> Trust.</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                From our brick kiln to your construction site, every
                SP Bricks product represents our commitment to quality
                and reliability.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                With decades of experience in brick manufacturing, we
                continue to combine traditional knowledge with modern
                quality standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="rounded-3xl bg-[#f8f1eb] p-7">
                <Factory className="mb-5 text-[#8f1d0d]" size={32} />
                <h3 className="text-3xl font-bold">35+</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Years of Experience
                </p>
              </div>

              <div className="rounded-3xl bg-[#8f1d0d] p-7 text-white">
                <BrickWall className="mb-5" size={32} />
                <h3 className="text-3xl font-bold">3+</h3>
                <p className="mt-2 text-sm text-white/80">
                  Product Categories
                </p>
              </div>

              <div className="rounded-3xl bg-[#170806] p-7 text-white">
                <Truck className="mb-5" size={32} />
                <h3 className="text-3xl font-bold">MP</h3>
                <p className="mt-2 text-sm text-white/70">
                  Local Supply
                </p>
              </div>

              <div className="rounded-3xl bg-[#f8f1eb] p-7">
                <Images className="mb-5 text-[#8f1d0d]" size={32} />
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Quality Focus
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section
        id="gallery"
        className="bg-[#faf8f5] px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8f1d0d]">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Our Gallery
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Take a closer look at our products, manufacturing,
              brick kiln and the journey of SP Bricks.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[#8f1d0d] text-white shadow-lg"
                    : "bg-white text-gray-600 shadow-sm hover:bg-[#8f1d0d] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
                  onClick={() => openImage(item)}
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#8f1d0d] backdrop-blur">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm text-white/80">
                        {item.description}
                      </p>

                      <span className="mt-4 inline-block text-sm font-semibold">
                        View Image →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <Images
                size={50}
                className="mx-auto text-gray-300"
              />

              <h3 className="mt-4 text-xl font-bold">
                No images found
              </h3>

              <p className="mt-2 text-gray-500">
                Try selecting another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#170806] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d99a45]">
              Behind The Scenes
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From Soil To Strong Foundations
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
              Our process focuses on quality at every stage of
              production.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Raw Material",
                text: "Carefully selected raw material for quality production.",
              },
              {
                number: "02",
                title: "Manufacturing",
                text: "Traditional experience combined with consistent processes.",
              },
              {
                number: "03",
                title: "Quality Check",
                text: "Products are checked for strength and consistency.",
              },
              {
                number: "04",
                title: "Delivery",
                text: "Reliable supply for residential and commercial projects.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <span className="text-4xl font-bold text-[#d99a45]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#8f1d0d] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Looking For Quality Bricks?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
              Explore our products or contact SP Bricks for your
              construction requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/shop"
                className="rounded-full bg-white px-7 py-3.5 font-bold text-[#8f1d0d] transition hover:bg-gray-100"
              >
                Shop Products
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={closeImage}
          >
            {/* Close */}
            <button
              onClick={closeImage}
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Close image"
            >
              <X size={25} />
            </button>

            {/* Previous */}
            {filteredImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft size={30} />
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />

              <div className="mt-5 text-center text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d99a45]">
                  {selectedImage.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {selectedImage.title}
                </h3>

                <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-400">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            {filteredImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 z-20 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 sm:right-8"
                aria-label="Next image"
              >
                <ChevronRight size={30} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;