import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <Mail size={14} /> Get in touch
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something great</h2>
          <p className="mt-2 text-zinc-400">Drop a message about your idea, timeline and budget. I’ll reply within 24 hours.</p>
        </div>

        <motion.form
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 2500); }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-zinc-400">Name</label>
              <input required type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 outline-none ring-0 focus:border-fuchsia-400/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-xs text-zinc-400">Email</label>
              <input required type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 outline-none ring-0 focus:border-fuchsia-400/50" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-zinc-400">Project details</label>
              <textarea required rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 outline-none ring-0 focus:border-fuchsia-400/50" placeholder="Tell me about your project, goals and timeline..." />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-zinc-400">Prefer email? <a className="underline decoration-dotted underline-offset-4 hover:text-zinc-300" href="mailto:hello@example.com">hello@example.com</a></p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-5 py-2.5 text-sm font-medium hover:bg-fuchsia-400 transition-colors">
              {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
              {sent ? 'Sent!' : 'Send message'}
            </button>
          </div>
        </motion.form>
      </div>

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-xs text-zinc-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Fullstack Next.js Dev</span>
          <span>Built with React, Tailwind & Spline</span>
        </div>
      </footer>
    </section>
  );
}
