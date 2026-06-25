import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AestheticLogoProduct } from './AestheticLogo';
import { navItems } from './siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock page scroll while drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-yellow border-b border-black/10 shadow-md py-3'
            : 'bg-brand-yellow/95 backdrop-blur-sm border-b border-black/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center animate-fade-in" aria-label="Markadeo home">
              <AestheticLogoProduct tone="dark" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-black tracking-wider uppercase transition-all duration-200 hover:text-black/70 ${
                      isActive ? 'text-black border-b-2 border-black pb-1' : 'text-zinc-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-zinc-900 hover:text-black transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="bg-black hover:bg-zinc-900 text-white p-3 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Open navigation drawer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 h-full w-full sm:w-[480px] z-50 bg-brand-yellow text-ink shadow-2xl flex flex-col p-8 justify-between overflow-y-auto"
            >
              {/* Top Row: Close button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-black hover:bg-zinc-900 text-white p-3 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content */}
              <div className="flex flex-col items-center text-center my-auto py-8">
                {/* Large custom logo */}
                <div className="mb-8 scale-[1.25]">
                  <AestheticLogoProduct tone="dark" />
                </div>

                {/* Subtitle statement */}
                <p className="font-display font-black text-ink text-xs sm:text-sm tracking-[0.1em] leading-relaxed max-w-sm mb-12 uppercase">
                  WE CREATE POWERFUL, INNOVATIVE, FUN, AND MEMORABLE CONTENT.
                </p>

                {/* Navigation Links inside Drawer */}
                <nav className="flex flex-col gap-5 w-full max-w-xs mb-8">
                  {navItems.map((item, i) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-2 border-b border-black/10 hover:border-black font-display font-black text-xl tracking-wider uppercase text-ink transition-all"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono opacity-50">0{i + 1}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Bottom Row: Instagram Icon */}
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://instagram.com/markadeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-ink/75">
                  Follow us on instagram
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
