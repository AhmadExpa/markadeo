/* ------------------------------------------------------------------
   AestheticLogo — Markadeo's rising-bar brand mark paired with a
   clean wordmark. The badge reads well on light or dark surfaces;
   the wordmark adapts via the `tone` prop.
------------------------------------------------------------------ */

export function AestheticLogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="relative w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Markadeo"
      >
        <defs>
          <linearGradient id="mk-gold" x1="12" y1="11" x2="36" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBCB57" />
            <stop offset="0.5" stopColor="#F5B82E" />
            <stop offset="1" stopColor="#E0A516" />
          </linearGradient>
          <linearGradient id="mk-bg" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#202022" />
            <stop offset="1" stopColor="#0B0B0C" />
          </linearGradient>
        </defs>

        {/* Badge */}
        <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#mk-bg)" />
        <rect x="2.5" y="2.5" width="43" height="43" rx="9.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" />
        {/* Glass top highlight */}
        <rect x="6" y="5" width="36" height="14" rx="7" fill="#FFFFFF" opacity="0.05" />

        {/* Rising bar signal */}
        <rect x="12" y="29" width="4.5" height="7" rx="2.25" fill="#FBCB57" />
        <rect x="19" y="25" width="4.5" height="11" rx="2.25" fill="#F8BE39" />
        <rect x="26" y="20" width="4.5" height="16" rx="2.25" fill="#F5B82E" />
        <rect x="33" y="14" width="4.5" height="22" rx="2.25" fill="#E5A412" />
        <path
          d="M11.5 23.5 L19.5 18.5 L26.5 20.5 L37 10.5"
          stroke="url(#mk-gold)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.5 10.5 H37 V15"
          stroke="#FBCB57"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function AestheticLogoProduct({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const wordColor = tone === 'light' ? 'text-white' : 'text-ink';
  const tagColor = tone === 'light' ? 'text-zinc-400' : 'text-zinc-500';

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group">
      <AestheticLogoIcon className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-[1.05]" />
      <div className="flex flex-col text-left leading-none">
        <span className={`font-display font-bold text-lg sm:text-xl tracking-tight ${wordColor} leading-none`}>
          Marka<span className="gold-gradient-text">deo</span>
        </span>
        <span className={`mt-1 text-[8px] sm:text-[9px] font-medium tracking-[0.18em] ${tagColor} uppercase leading-none`}>
          Creative Content House
        </span>
      </div>
    </div>
  );
}
