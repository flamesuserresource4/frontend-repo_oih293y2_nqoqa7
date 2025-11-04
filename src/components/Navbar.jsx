import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-400 ring-1 ring-inset ring-fuchsia-500/30">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">Fullstack Next.js Dev</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-zinc-300 hover:text-white">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-zinc-300 hover:text-white">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-white/5 text-zinc-300 hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
