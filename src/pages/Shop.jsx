import { useMemo, useState } from "react";
import { Search, ShoppingCart, SlidersHorizontal } from "lucide-react";
import products from "../pages/Products";

const categories = ["All", ...new Set(products.map((product) => product.category))];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Search filter
    if (search.trim()) {
      const searchText = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText) ||
          product.description.toLowerCase().includes(searchText)
      );
    }

    // Sorting
    if (sortBy === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, search, sortBy]);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);

    // Yahan tum apna existing CartContext ka addToCart()
    // function use kar sakte ho.
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-[#7A1408] px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-200">
            SP Bricks
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Our Products
          </h1>

          <p className="mt-4 max-w-2xl text-gray-200">
            Quality bricks and construction materials for residential,
            commercial and construction projects.
          </p>
        </div>
      </section>

      {/* Shop content */}
      <section className="mx-auto max-w-7xl px-5 py-10">

        {/* Search + Sort */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-[#7A1408]"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={20} className="text-gray-500" />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none"
            >
              <option value="default">Sort Products</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-[#7A1408] text-white"
                  : "bg-white text-gray-700 shadow-sm hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Construction Products
          </h2>

          <p className="text-sm text-gray-500">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Category badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7A1408] shadow">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#7A1408]">
                        ₹{product.price.toFixed(2)}
                      </p>

                      <p className="text-xs text-gray-500">
                        {product.unit}
                      </p>
                    </div>

                    <p className="text-xs text-green-600">
                      In Stock
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7A1408] px-5 py-3 font-semibold text-white transition hover:bg-[#5e0f06] active:scale-[0.98]"
                  >
                    <ShoppingCart size={19} />
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Search size={28} className="text-gray-400" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              No products found
            </h3>

            <p className="mt-2 text-gray-500">
              Try searching with a different product name or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-5 rounded-xl bg-[#7A1408] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;