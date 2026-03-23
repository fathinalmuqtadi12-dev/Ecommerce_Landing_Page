import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How do I know my size?",
    answer: "We provide detailed size guides and measurement instructions. For custom pieces, we offer virtual consultations to ensure perfect fit."
  },
  {
    id: 2,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location. Free shipping on orders over $500."
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on all items. Items must be unworn with original tags attached. Custom orders are final sale."
  },
  {
    id: 4,
    question: "How long does custom tailoring take?",
    answer: "Standard custom pieces take 2-3 weeks. Rush orders may be available for an additional fee. We'll keep you updated throughout the process."
  },
  {
    id: 5,
    question: "Do you offer styling services?",
    answer: "Yes, we provide personal styling consultations both in-store and virtually. Our stylists help you find pieces that match your lifestyle and preferences."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our products and services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-gray-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  className="px-6 pb-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
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
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}