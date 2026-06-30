import React from "react";
import { motion } from "framer-motion";
import Steve from "../assets/Steve.jpg";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#06080d] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.16),transparent_34%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:px-10 lg:px-16 lg:py-28">
        <motion.div
          className="max-w-2xl text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-slate-300">
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-slate-400" />
            Digital designer & frontend developer
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Crafting refined digital experiences with calm confidence.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            I create elegant interfaces and modern web experiences that feel polished, purposeful, and quietly luxurious.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Let&apos;s connect
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-slate-400 md:justify-start">
            <span className="rounded-full border border-white/10 px-3 py-1">React</span>
            <span className="rounded-full border border-white/10 px-3 py-1">UI systems</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Motion</span>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-md lg:max-w-lg"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-4xl border border-white/10 bg-slate-800/50 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <img
              src={Steve}
              alt="Steve"
              className="h-120 w-full rounded-[1.4rem] object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
