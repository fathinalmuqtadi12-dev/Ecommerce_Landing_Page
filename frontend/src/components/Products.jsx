import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Classic Polo",
    price: "$99",
    image: "/src/assets/img/polo.jpg",
    description: "Timeless elegance in every stitch"
  },
  {
    id: 2,
    name: "Elegant Sweater ",
    price: "$259",
    image: "/src/assets/img/sweater.jpg",
    description: "Contemporary style for the modern person"
  },
  {
    id: 3,
    name: "Tailored Jacket Blazer",
    price: "$349",
    image: "/src/assets/img/tailored_jacket.jpg",
    description: "Perfect fit, perfect comfort"
  },
  {
    id: 4,
    name: "Sophisticated Shirt",
    price: "$129",
    image: "/src/assets/img/suspicated.jpg",
    description: "Sophisticated and versatile"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover pieces that blend European craftsmanship with modern design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=Product+Image";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">
                    {product.price}
                  </span>
                  <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-white border-gray-950 border-2  text-black px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}