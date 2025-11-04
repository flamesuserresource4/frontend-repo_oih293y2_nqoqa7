import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with Next.js App Router, tRPC, and Tailwind. Role-based access & charts.',
    href: '#',
    tags: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL']
  },
  {
    title: 'E-commerce Store',
    description: 'Headless storefront using Next.js, Stripe, and Sanity CMS. Optimized for SEO and speed.',
    href: '#',
    tags: ['Next.js', 'Stripe', 'Sanity', 'Vercel']
  },
  {
    title: 'Realtime Chat',
    description: 'WebSockets-based chat app with auth, file uploads and optimistic UI updates.',
    href: '#',
    tags: ['Next.js', 'Socket.io', 'Redis', 'Tailwind']
  },
];

const Card = ({ project, index }) => (
  <motion.a
    href={project.href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 hover:from-white/10 transition-colors"
  >
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
      </div>
      <p className="mt-3 text-sm text-zinc-300/90 leading-relaxed">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300">{t}</span>
        ))}
      </div>
    </div>
  </motion.a>
);

export default function ProjectsGrid() {
  return (
    <section id="work" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-zinc-400 max-w-2xl">A mix of client work and personal experiments focusing on performance and DX.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Let’s collaborate</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
