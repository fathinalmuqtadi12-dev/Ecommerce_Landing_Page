import React from "react";
import { motion } from "framer-motion";

function BtnHero1() {
  return (
    <motion.button
      className="px-3 sm:px-4 py-2 bg-white text-white rounded-2xl border border-gray-300 relative overflow-hidden group text-xs sm:text-sm md:text-base"
      whileHover={{ scale: 1.05, borderColor: "#000" }}
      whileTap={{ scale: 0.95, borderColor: "#000" }}
    >
      <div className="flex flex-row items-center gap-0 h-full">
        <motion.img
          src="/src/assets/resources/icon/shopcart-icon.svg"
          alt="shopcart"
          className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0"
          initial={{ y: 0 }}
          whileHover={{ y: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.h2
          className="hidden sm:block text-black text-xs sm:text-sm font-medium -mt-4 group-hover:mt-0"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Shop Now
        </motion.h2>
      </div>
    </motion.button>
  );
}

export default BtnHero1;