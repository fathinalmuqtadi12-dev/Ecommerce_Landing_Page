import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
    <div className="flex flex-col items-center justify-center bg-white w-full h-screen relative py-16 md:py-24">
      <img
        src="./src/assets/resources/decoration/about-bg.png"
        className="shrink-0 w-full h-full max-w-none object-cover absolute"
        alt="bg-about"
      />

      <motion.div
        className="flex flex-col items-center justify-center absolute w-full sm:w-96 md:w-[500px] max-w-sm sm:max-w-md h-auto mx-4 p-6 sm:p-8 md:p-10 bg-white bg-opacity-50 border border-gray-50 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black text-center">
          And We're There
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black text-center">
          We are a team of passionate individuals dedicated to providing the best products and services.
        </p>
      </motion.div>
    </div>
    </section>
  );
}