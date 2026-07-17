import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

import product1 from "../../assets/red-clay-bricks.png";
import product2 from "../../assets/Jhallar-desing-bricks.png";
import product3 from "../../assets/solid-concrete-blocks.png";
import { useCart } from "../../context/CartContext";
const products = [
    
  {
    id: 1,
    title: "Red Clay Bricks",
    image: product1,
    description:
      "High-strength clay bricks suitable for residential and commercial construction.",
    price: 5.5,
    unit: "Brick",
  },
  {
    id: 2,
    title: "Decorative Jhallar Bricks",
    image: product2,
    description:
      "Elegant decorative clay jhallar bricks designed for balconies, boundary walls and modern architectural facades.",
    price: 7,
    unit: "Brick",
  },
  {
    id: 3,
    title: "Solid Concrete Blocks",
    image: product3,
    description:
      "Strong concrete blocks designed for long-lasting residential and commercial structures.",
    price: 12,
    unit: "Block",
  },
];

const ProductCard = ({ item, index }) => {
    const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1000);

  const total = quantity * item.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>

        <p className="mt-3 text-gray-600 leading-7">
          {item.description}
        </p>

        <div className="mt-5 flex justify-between items-center">
          <h4 className="text-2xl font-bold text-orange-600">
            ₹ {item.price}
          </h4>

          <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            Per {item.unit}
          </span>
        </div>

        {/* Quantity */}

        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Select Quantity
          </label>

          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mt-2 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value={1000}>1000</option>
            <option value={2000}>2000</option>
            <option value={5000}>5000</option>
            <option value={10000}>10000</option>
          </select>
        </div>

        {/* Custom Quantity */}

        <div className="mt-4">
          <label className="font-semibold text-gray-700">
            Or Enter Custom Quantity
          </label>

          <input
            type="number"
            min="1"
            placeholder="Example : 3500"
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value) || 0)
            }
            className="mt-2 w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Total */}

        <div className="mt-6 bg-orange-50 rounded-xl p-4 flex justify-between items-center">
          <span className="font-semibold text-gray-700">
            Estimated Total
          </span>

          <span className="text-xl font-bold text-orange-600">
            ₹ {total.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Button */}
{/* 
        <button className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl transition duration-300 font-semibold">
          <ShoppingCart size={20} />
          Add To Cart
        </button> */}
        <button
  onClick={() => addToCart(item, quantity)}
  className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl transition duration-300 font-semibold"
>
  <ShoppingCart size={20} />
  Add To Cart
</button>
      </div>
    </motion.div>
  );
};

const ProductSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Products
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Premium Quality Building Materials
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            We manufacture premium quality bricks and concrete blocks that
            ensure durability, strength and long-lasting performance for every
            construction project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <ProductCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;