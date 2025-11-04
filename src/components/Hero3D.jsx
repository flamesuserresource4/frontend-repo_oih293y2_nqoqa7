import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/10 to-neutral-950"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            Available for freelance work
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Fullstack Next.js Web Developer
          </h1>
          <p className="mt-4 text-zinc-300/90 max-w-xl leading-relaxed">
            I craft performant, accessible web apps with a focus on delightful UX.
            From pixel-perfect frontends to scalable APIs and databases.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-fuchsia-500 px-5 py-3 text-sm font-medium shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-zinc-400">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Tailwind</span>
            <span>Node</span>
          </div>
        </motion.div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
