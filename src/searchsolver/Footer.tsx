import { Instagram } from 'lucide-react';
import { TAGLINE } from './siteData';

interface FooterProps {
  onOpenLegal: (id: string) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black text-zinc-500 pt-20 pb-12 text-center select-none border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Large Slogan in Center */}
        <h2 className="font-display font-black text-white text-base sm:text-lg md:text-xl tracking-[0.12em] leading-relaxed max-w-3xl mb-12 uppercase">
          WE CREATE POWERFUL, INNOVATIVE, FUN, AND MEMORABLE CONTENT. FROM CREATIVE CONCEPTUALISATION TO PRODUCTION AND EXECUTION – WE DO IT ALL.
        </h2>

        {/* Primary tagline */}
        <p className="font-display font-black text-brand-yellow text-sm sm:text-base tracking-[0.3em] uppercase mb-10">
          {TAGLINE}
        </p>

        {/* Centered Red Instagram Button */}
        <div className="mb-14">
          <a
            href="https://instagram.com/markadeo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 mx-auto"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-7 h-7" />
          </a>
        </div>

        {/* Divider line */}
        <div className="w-full border-t border-zinc-900 mb-8" />

        {/* Footer bottom details */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-widest uppercase font-semibold text-zinc-600">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>© {currentYear} MARKADEO MEDIA. ALL RIGHTS RESERVED.</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-zinc-400 transition-colors cursor-pointer uppercase">PRIVACY</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-zinc-400 transition-colors cursor-pointer uppercase">TERMS</button>
            <button onClick={() => onOpenLegal('gdpr')} className="hover:text-zinc-400 transition-colors cursor-pointer uppercase">COOKIES</button>
          </div>
          <span>CREATIVE DIGITAL AGENCY · WORLDWIDE</span>
        </div>

      </div>
    </footer>
  );
}
