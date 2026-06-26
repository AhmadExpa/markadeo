import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Reveal } from './ScrollFX';
import { faqs } from './siteData';

/* ------------------------------------------------------------------
   FAQ — accordion of frequently asked questions (data in siteData).
------------------------------------------------------------------ */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-3 block">
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-ink uppercase">
            Got Questions? We've Got Answers.
          </h2>
        </Reveal>

        <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-ink uppercase tracking-wide group-hover:text-brand-blue transition-colors">
                    {item.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 flex-shrink-0 text-brand-blue transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
