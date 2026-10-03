import redClayBricks from "../assets/red-clay-bricks.png";
import jhallarDesignBricks from "../assets/Jhallar-desing-bricks.png";
import solidConcreteBlocks from "../assets/solid-concrete-blocks.png";

const products = [
  {
    id: 1,
    name: "Red Clay Bricks",
    category: "Bricks",
    price: 5.5,
    unit: "per brick",
    image: redClayBricks,
    description:
      "High-quality red clay bricks suitable for residential and commercial construction.",
    stock: 5000,
  },

  {
    id: 2,
    name: "Decorative Jhallar Bricks",
    category: "Decorative",
    price: 7,
    unit: "per brick",
    image: jhallarDesignBricks,
    description:
      "Beautiful decorative bricks for walls, boundaries and exterior design.",
    stock: 3000,
  },

  {
    id: 3,
    name: "Solid Concrete Blocks",
    category: "Blocks",
    price: 12,
    unit: "per block",
    image: solidConcreteBlocks,
    description:
      "Strong and durable concrete blocks for construction projects.",
    stock: 2500,
  },
];

export default products;
