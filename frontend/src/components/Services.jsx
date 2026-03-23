import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Custom Tailoring",
    description: "Bespoke garments crafted to your exact measurements and style preferences",
    icon: "✂️"
  },
  {
    id: 2,
    title: "Style Consultation",
    description: "Personal styling sessions to help you find your perfect look",
    icon: "👔"
  },
  {
    id: 3,
    title: "Alterations",
    description: "Professional alterations to ensure perfect fit for all your garments",
    icon: "📏"
  },
  {
    id: 4,
    title: "Online Shopping",
    description: "Convenient online shopping with worldwide shipping",
    icon: "🛒"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From custom tailoring to personal styling, we provide exceptional service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
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
          <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-semibold">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}