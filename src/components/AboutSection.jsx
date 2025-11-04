import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-[380px,1fr] items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <img
              src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1080&auto=format&fit=crop"
              alt="Portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            About me
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">I build delightful, scalable web apps</h2>
          <p className="mt-4 text-zinc-300/90 leading-relaxed">
            I’m a full‑stack Next.js developer with a passion for product thinking, performance and clean design. I love
            turning complex problems into simple, beautiful experiences. Over the last few years I’ve shipped SaaS
            dashboards, real‑time tools and e‑commerce experiences for startups and agencies.
          </p>
          <p className="mt-3 text-zinc-300/90 leading-relaxed">
            My toolkit includes Next.js, React, TypeScript, Tailwind CSS, Node.js, and a range of databases from
            PostgreSQL to MongoDB. I focus on accessibility, DX, testing and CI/CD to keep projects maintainable and fast.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Next.js', 'TypeScript', 'React', 'Tailwind', 'Node.js', 'Prisma'].map((s) => (
              <div key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
                {s}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex rounded-lg bg-fuchsia-500 px-4 py-2 text-sm font-medium hover:bg-fuchsia-400 transition-colors">See my work</a>
            <a href="#contact" className="inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors">Hire me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
