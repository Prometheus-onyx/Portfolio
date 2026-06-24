import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Bicko from "../assets/Bicko.jpg"; // Adjust the path as necessary

// Animation variants for text and image
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

export default function HeroSection() {
  return (
    <section className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Stunning Websites <br /> with{" "}
            <span className="text-yellow-300">React & Tailwind</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Create modern, responsive, and animated hero sections in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#get-started"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <img
            src={Bicko}
            alt="Hero Illustration"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
