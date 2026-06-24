import { type ReactNode, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, BarChart3, Clapperboard, Sparkles } from 'lucide-react';

const heroImages = {
  backdrop:
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=80',
  studio:
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
  social:
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80',
  brand:
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
};

export default function CreativeHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const imageA = useTransform(scrollYProgress, [0, 1], ['0%', '-13%']);
  const imageB = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageC = useTransform(scrollYProgress, [0, 1], ['0%', '-24%']);
  const barsY = useTransform(scrollYProgress, [0, 1], ['0%', '34%']);

  const motionStyle = (style: object) => (reduced ? undefined : style);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white flex items-center"
    >
      <div className="absolute inset-0 -z-10">
        <motion.img
          src={heroImages.backdrop}
          alt=""
          aria-hidden
          referrerPolicy="no-referrer"
          style={motionStyle({ y: bgY, scale: bgScale })}
          className="absolute inset-0 h-[112%] w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,12,0.92)_0%,rgba(11,11,12,0.74)_42%,rgba(11,11,12,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,0.30)_0%,rgba(11,11,12,0.10)_46%,rgba(11,11,12,0.92)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
        <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
        <div className="absolute right-[12%] top-0 hidden h-full w-px bg-white/10 lg:block" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          style={motionStyle({ y: copyY, opacity: copyOpacity })}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 border-l-2 border-brand-gold pl-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-7 font-display text-5xl font-bold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-100/88 sm:text-lg"
          >
            {subtitle}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-9"
            >
              {children}
            </motion.div>
          )}
        </motion.div>

        <div className="relative min-h-[470px] sm:min-h-[560px] lg:min-h-[640px]" aria-hidden>
          <motion.div
            style={motionStyle({ y: barsY })}
            className="absolute right-2 top-0 hidden items-end gap-2 lg:flex"
          >
            {[72, 108, 146, 188, 236].map((height, index) => (
              <span
                key={height}
                className="block w-4 bg-brand-gold shadow-gold"
                style={{ height, opacity: 0.5 + index * 0.1 }}
              />
            ))}
          </motion.div>

          <motion.figure
            style={motionStyle({ y: imageA })}
            className="absolute right-0 top-8 h-[66%] w-[72%] overflow-hidden border border-white/16 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
          >
            <img
              src={heroImages.studio}
              alt=""
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
              style={{ clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          </motion.figure>

          <motion.figure
            style={motionStyle({ y: imageB })}
            className="absolute bottom-8 left-0 h-[42%] w-[52%] overflow-hidden border border-white/16 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.36)]"
          >
            <img
              src={heroImages.social}
              alt=""
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
              style={{ clipPath: 'polygon(0 0, 94% 0, 100% 100%, 8% 100%)' }}
            />
            <div className="absolute inset-0 bg-ink/20" />
          </motion.figure>

          <motion.figure
            style={motionStyle({ y: imageC })}
            className="absolute left-[17%] top-[8%] h-[34%] w-[34%] overflow-hidden border border-brand-gold/60 bg-brand-gold shadow-gold"
          >
            <img
              src={heroImages.brand}
              alt=""
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover mix-blend-luminosity"
            />
          </motion.figure>

          <div className="absolute bottom-[12%] right-[6%] hidden w-56 border-l-2 border-brand-gold bg-ink/72 p-4 backdrop-blur md:block">
            <div className="flex items-center gap-2 text-brand-gold">
              <BarChart3 className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Rising reach</span>
            </div>
            <div className="mt-4 flex h-20 items-end gap-2">
              {[28, 40, 54, 68, 86].map((height) => (
                <span key={height} className="w-full bg-white" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="absolute left-[9%] top-[48%] hidden border-y border-white/18 bg-white/[0.08] px-4 py-3 backdrop-blur sm:block">
            <div className="flex items-center gap-3 text-sm font-semibold text-white">
              <Clapperboard className="h-4 w-4 text-brand-gold" />
              Shoot. Edit. Publish. Repeat with intent.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/65 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-scroll-cue text-brand-gold" />
      </div>
    </section>
  );
}
