import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  MessageCircle,
  Play,
  Boxes,
  Wand2,
  Layers,
  AlertTriangle,
  CheckCircle2,
  BrainCircuit,
  CalendarDays,
  Megaphone,
  TrendingUp,
  MessageSquare,
  Target,
} from 'lucide-react';
import CreativeHero from '../CreativeHero';
import ServiceSlider from '../ServiceSlider';
import Pricing from '../Pricing';
import Testimonials from '../Testimonials';
import MarqueeLogos from '../MarqueeLogos';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import Object3D from '../Object3D';
import { Reveal, Stagger, RevealItem, Marker, Parallax, Magnetic } from '../ScrollFX';
import { MEDIA, values, waLink, DEFAULT_WA_MESSAGE } from '../siteData';
import { iconMap } from '../icons';

const socialProblems = [
  {
    icon: CalendarDays,
    title: 'Inconsistent posting',
    body: 'The page goes quiet, then posts in bursts. Customers see gaps instead of a living brand.',
  },
  {
    icon: MessageSquare,
    title: 'No clear content angle',
    body: 'Posts are made just to post, without hooks, offers, storytelling or a reason to follow.',
  },
  {
    icon: TrendingUp,
    title: 'Weak feedback loop',
    body: 'Nobody is reading the results properly, so the account keeps repeating what is not working.',
  },
];

const socialFixes = [
  'Audit the current accounts, content gaps and customer journey.',
  'Build an AI-assisted calendar with clear hooks, captions and creative direction.',
  'Produce fresh content, publish consistently and keep the brand active daily.',
  'Report what is working in plain English, then adjust the next batch.',
];

const creativeDirections = [
  {
    no: '01',
    icon: MessageCircle,
    title: 'Human conversation',
    body: 'Captions, replies and hooks that sound like a real brand, not a template.',
  },
  {
    no: '02',
    icon: TrendingUp,
    title: 'Sharper signal',
    body: 'We read the account, the audience and the platform before the next post goes out.',
  },
  {
    no: '03',
    icon: Play,
    title: 'Short-form rhythm',
    body: 'Edits, cuts and content series built for feeds that move quickly.',
  },
  {
    no: '04',
    icon: Wand2,
    title: 'Visual craft',
    body: 'Sharper art direction, production polish and design consistency across every asset.',
  },
  {
    no: '05',
    icon: Megaphone,
    title: 'Launch pacing',
    body: 'Campaign-ready assets, posting rhythm and optional ad planning laid out before launch.',
  },
  {
    no: '06',
    icon: Target,
    title: 'Platform fit',
    body: 'Built to land where the audience already looks: social feeds, search, shorts and stories.',
  },
];

const momentumImages = [
  {
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    alt: 'A cinematic production camera on set.',
  },
  {
    src: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80',
    alt: 'A phone showing social content.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=900&q=80',
    alt: 'Brand identity work laid out on a table.',
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <CreativeHero
        eyebrow="Creative content house"
        title={<>Markadeo makes brands impossible to scroll past.</>}
        subtitle="Content, 3D, social, branding and web builds under one roof. We turn quiet channels into a living brand system with stronger visuals, clearer rhythm and content people actually want to watch."
      >
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Magnetic>
            <motion.a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer shadow-gold"
            >
              <MessageCircle className="w-4 h-4" />
              Start your project
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </Magnetic>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer border border-white/20"
          >
            <Play className="w-4 h-4 fill-current" />
            See our work
          </Link>
        </div>
      </CreativeHero>

      {/* ============ SCROLL STORY ============ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 scroll-mt-24">
        <div className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal direction="right" className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
                Six directions
              </p>
              <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-normal text-ink leading-none">
                Make the feed feel alive before anyone reads a caption.
              </h2>
              <p className="mt-6 max-w-xl text-zinc-600 leading-relaxed">
                From the first hook to the final publish, every asset should feel connected: visual
                direction, captions, platform fit and the next action.
              </p>
              <div className="mt-8 flex items-center gap-4 border-y border-line py-5">
                <span className="font-display text-5xl font-black text-ink">06</span>
                <span className="max-w-xs text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                  connected creative moves, one content engine
                </span>
              </div>
            </Reveal>

            <div>
              <div className="relative min-h-[520px] overflow-hidden bg-ink text-white">
                <Parallax speed={-0.08} className="absolute left-0 top-0 h-[62%] w-[56%]">
                  <img
                    src={momentumImages[0].src}
                    alt={momentumImages[0].alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </Parallax>
                <Parallax speed={0.1} className="absolute right-0 top-[18%] h-[62%] w-[58%] border-l-4 border-brand-gold">
                  <img
                    src={momentumImages[1].src}
                    alt={momentumImages[1].alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </Parallax>
                <Parallax speed={-0.04} className="absolute bottom-0 left-[18%] h-[38%] w-[46%] border-t-4 border-white">
                  <img
                    src={momentumImages[2].src}
                    alt={momentumImages[2].alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/20" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
                  <p className="max-w-sm font-display text-2xl font-bold leading-tight">
                    Production, social and identity moving in one direction.
                  </p>
                  <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold sm:block">
                    Scroll-built
                  </span>
                </div>
              </div>

              <Stagger className="mt-10 divide-y divide-line border-y border-line">
                {creativeDirections.map((item) => {
                  const Icon = item.icon;
                  return (
                    <RevealItem key={item.title}>
                      <article className="group grid gap-5 py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-center">
                        <span className="font-display text-3xl font-black text-zinc-300 transition-colors group-hover:text-brand-gold-hover">
                          {item.no}
                        </span>
                        <div>
                          <h3 className="font-display text-2xl font-bold tracking-normal text-ink">
                            {item.title}
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-zinc-600">
                            {item.body}
                          </p>
                        </div>
                        <span className="flex h-11 w-11 items-center justify-center bg-ink text-brand-gold transition-transform group-hover:-translate-y-1">
                          <Icon className="h-5 w-5" />
                        </span>
                      </article>
                    </RevealItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ============ KINETIC STRIP ============ */}
      <div className="py-8 sm:py-10 bg-white border-y border-line overflow-hidden">
        <div className="kinetic-track gap-8">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex items-center gap-8">
              {['Content', '3D & Motion', 'Social', 'TikTok', 'Branding', 'Web & App'].map((w) => (
                <span key={w} className="flex items-center gap-8">
                  <span className="font-display font-black text-3xl sm:text-5xl tracking-tight text-ink">{w}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ INTRO / NEW GENERATION ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
              A new generation of content
            </p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink leading-tight">
              From idea to execution — <Marker>one creative team.</Marker>
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Most brands overpay marketplaces and ad platforms just to be seen for a moment. We do it
              differently: we build your presence so the audience is genuinely <em>yours</em>. AI-driven
              content planning, AI-assisted production and always-on social management all happen in-house,
              so the work stays fast, sharp and consistent.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              No sales promises. No smoke. Just powerful, innovative, memorable content with a clear
              reason behind every post, caption, edit and campaign direction. Paid advertisement campaigns
              are scoped and priced separately.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-start gap-3">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-ink text-white font-semibold px-6 py-3.5 rounded-full hover:bg-black transition-colors">
                Explore services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-white border border-line text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-canvas transition-colors shadow-soft">
                Our story
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" className="relative">
            <Parallax speed={-0.06} className="absolute -top-8 -left-6 hidden sm:block">
              <div className="w-24 h-24 rounded-3xl bg-brand-gold-wash border border-brand-gold/30 rotate-12" />
            </Parallax>
            <Tilt className="relative rounded-[2rem] overflow-hidden border border-line shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                alt="A creator producing content in a studio."
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[340px] sm:h-[520px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/90 backdrop-blur rounded-2xl px-5 py-4 shadow-soft">
                <div>
                  <p className="font-display font-bold text-ink">In-house studio</p>
                  <p className="text-sm text-zinc-500">Shoot · edit · render · publish</p>
                </div>
                <span className="w-11 h-11 rounded-xl bg-brand-gold flex items-center justify-center text-ink">
                  <Wand2 className="w-5 h-5" />
                </span>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-16 sm:py-24 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Reveal direction="right" className="max-w-xl">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">What drives us</p>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-normal text-ink leading-tight">
              The values behind every frame.
            </h2>
            <p className="mt-5 text-zinc-600 leading-relaxed">
              We keep the work focused on what a brand needs to feel active: original thinking, consistent
              production and a visual system people can recognise.
            </p>
          </Reveal>
          <Stagger className="divide-y divide-line border-y border-line">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon];
              return (
                <RevealItem key={v.title}>
                  <article className="group grid gap-4 py-6 sm:grid-cols-[4rem_1fr] sm:items-start">
                    <span className="flex h-12 w-12 items-center justify-center bg-brand-gold-wash text-brand-gold-hover transition-colors group-hover:bg-brand-gold group-hover:text-ink">
                      {Icon && <Icon className="w-6 h-6" />}
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-zinc-400">0{i + 1}</span>
                        <h3 className="font-display font-bold text-2xl text-ink tracking-normal">{v.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{v.body}</p>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ SERVICES SLIDER ============ */}
      <ServiceSlider />

      {/* ============ CONTENT IS KING BAND ============ */}
      <section className="py-16 sm:py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white p-10 sm:p-16">
            <div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-brand-gold/20 blur-[120px] pointer-events-none blob-drift" aria-hidden />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-sm font-semibold text-brand-gold uppercase tracking-[0.18em]">The one rule</span>
                <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tight">
                  Content is <span className="gold-shimmer">king.</span>
                </h2>
                <p className="mt-5 text-zinc-300 leading-relaxed max-w-lg">
                  Rented reach disappears the moment you stop paying. Content you own keeps working.
                  We build a library of work that earns attention, trust and visits — long after it goes live.
                </p>
                <Link to="/services" className="mt-8 inline-flex items-center gap-2 bg-brand-gold text-ink font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold">
                  See what we make <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Layers, label: 'Owned content', sub: 'Works forever' },
                  { icon: Boxes, label: '3D & motion', sub: 'In-house renders' },
                ].map((c) => (
                  <Tilt key={c.label} className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
                    <span className="w-11 h-11 rounded-xl bg-brand-gold flex items-center justify-center text-ink">
                      <c.icon className="w-5 h-5" />
                    </span>
                    <p className="mt-4 font-display font-bold text-lg">{c.label}</p>
                    <p className="text-sm text-zinc-400">{c.sub}</p>
                  </Tilt>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ 3D FEATURE (video + real 3D object) ============ */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-ink">
        {/* Dark base keeps text readable even if the video is slow / blocked */}
        <div className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover opacity-60" autoPlay muted loop playsInline poster={MEDIA.heroPoster}>
            <source src={MEDIA.threeDVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="absolute inset-0 bg-ink/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right" className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <Boxes className="w-3.5 h-3.5 text-brand-gold" /> 3D & Motion
            </span>
            <h2 className="mt-6 font-display font-bold text-4xl sm:text-6xl tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
              Creative 3D animation,<br /> rendered in-house.
            </h2>
            <p className="mt-6 text-lg text-zinc-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Product visualisations, virtual worlds and character design — the kind of motion that makes
              people stop, look and remember. Built by our own animators, not outsourced.
            </p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 bg-brand-gold text-ink font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold">
              Explore 3D production <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          {/* Genuine CSS 3D object — a tumbling gold cube */}
          <Reveal direction="left" className="flex justify-center lg:justify-end">
            <Object3D />
          </Reveal>
        </div>
      </section>

      {/* ============ SOCIAL ACCOUNT DIAGNOSIS ============ */}
      <section id="social-diagnosis" className="py-16 sm:py-24 bg-white border-y border-line scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-stretch">
          <Reveal direction="right">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">Social media diagnosis</p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink leading-tight">
              What is holding your accounts back?
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Most struggling social pages do not have one single problem. They usually lack a clear
              content direction, a consistent rhythm and a team watching the results closely enough to
              improve the next post.
            </p>

            <div className="mt-8 grid gap-3">
              {socialProblems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl bg-canvas border border-line p-5 shadow-soft">
                    <span className="mt-0.5 w-11 h-11 rounded-xl bg-brand-gold-wash text-brand-gold-hover flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-ink text-white p-6 sm:p-8 shadow-soft-lg">
              <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-brand-gold/20 blur-[100px] pointer-events-none" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  <AlertTriangle className="w-3.5 h-3.5 text-brand-gold" /> How we resolve it
                </span>
                <h3 className="mt-5 font-display font-bold text-2xl sm:text-3xl tracking-tight">
                  We turn scattered posting into a managed content system.
                </h3>
                <ul className="mt-6 space-y-4">
                  {socialFixes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-gold flex-shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                    <BrainCircuit className="w-6 h-6 text-brand-gold" />
                    <p className="mt-3 font-display font-bold">AI-driven content</p>
                    <p className="mt-1 text-sm text-zinc-400">Ideas, hooks, captions and optimisations are shaped before production starts.</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                    <Megaphone className="w-6 h-6 text-brand-gold" />
                    <p className="mt-3 font-display font-bold">Paid campaigns</p>
                    <p className="mt-1 text-sm text-zinc-400">Advertisement campaigns, ad creative, targeting and media spend are quoted separately.</p>
                  </div>
                </div>

                <Link to="/services" className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-gold text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold">
                  Fix my social media <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <Pricing />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ MARQUEE ============ */}
      <MarqueeLogos />

      {/* ============ CTA ============ */}
      <CTASection />
    </>
  );
}
