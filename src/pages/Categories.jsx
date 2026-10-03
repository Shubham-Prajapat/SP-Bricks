

import { Link } from "react-router-dom";
import products from "../pages/Products";

function Categories() {
  // Create categories automatically from products
  const categoryMap = {};

  products.forEach((product) => {
    if (!categoryMap[product.category]) {
      categoryMap[product.category] = {
        name: product.category,
        image: product.image,
        products: [],
      };
    }

    categoryMap[product.category].products.push(product);
  });

  const categories = Object.values(categoryMap);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#7A1408] px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-200">
            SP Bricks
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Product Categories
          </h1>

          <p className="mt-4 max-w-2xl text-gray-200">
            Explore our range of quality bricks and construction materials
            for your building projects.
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop By Category
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Choose a category to explore our construction products.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

                {/* Category Name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-12">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                <div className="mb-5 flex items-center justify-between">

                  <p className="text-sm text-gray-500">
                    {category.products.length}{" "}
                    {category.products.length === 1
                      ? "Product"
                      : "Products"}
                  </p>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-[#7A1408]">
                    SP Bricks
                  </span>

                </div>

                {/* Products Preview */}
                <div className="mb-5 space-y-2">

                  {category.products.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {product.name}
                      </span>

                      <span className="text-sm font-semibold text-[#7A1408]">
                        ₹{product.price}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Button */}
                <Link
                  to={`/shop?category=${encodeURIComponent(
                    category.name
                  )}`}
                  className="block w-full rounded-xl bg-[#7A1408] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#5e0f06]"
                >
                  View Products
                </Link>

              </div>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}

export default Categories;
