/* ------------------------------------------------------------------
   AestheticLogo — Markadeo's brand mark.
   A refined gold-gradient "M" monogram set in a softly lit dark badge,
   paired with a clean wordmark. No gimmicks — just a confident,
   premium identity that holds up at any size.
------------------------------------------------------------------ */

export function AestheticLogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      {/* Soft gold halo for a premium, lit-from-within feel */}
      <div
        className="absolute -inset-1 rounded-[30%] bg-brand-gold/25 blur-md opacity-50"
        aria-hidden
      />

      <svg
        viewBox="0 0 48 48"
        className="relative w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Markadeo"
      >
        <defs>
          {/* Warm-to-deep gold for the monogram */}
          <linearGradient id="mk-gold" x1="12" y1="11" x2="36" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE6A6" />
            <stop offset="0.45" stopColor="#F5B82E" />
            <stop offset="1" stopColor="#B87C12" />
          </linearGradient>
          {/* Subtle top-lit dark badge */}
          <linearGradient id="mk-bg" x1="24" y1="1" x2="24" y2="47" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E1E1E" />
            <stop offset="1" stopColor="#070707" />
          </linearGradient>
          {/* Gold-kissed hairline border */}
          <linearGradient id="mk-border" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5B82E" stopOpacity="0.75" />
            <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.10" />
            <stop offset="1" stopColor="#F5B82E" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Badge */}
        <rect
          x="1.5"
          y="1.5"
          width="45"
          height="45"
          rx="13"
          fill="url(#mk-bg)"
          stroke="url(#mk-border)"
          strokeWidth="1.5"
        />
        {/* Glass top highlight */}
        <rect x="5" y="4.5" width="38" height="18" rx="9" fill="#FFFFFF" opacity="0.04" />

        {/* Monogram "M" */}
        <path
          d="M14.5 33.5 V15.5 L24 26 L33.5 15.5 V33.5"
          stroke="url(#mk-gold)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Gold node where the strokes meet — the brand spark */}
        <circle cx="24" cy="26" r="1.7" fill="#FFE6A6" />
      </svg>
    </div>
  );
}

export function AestheticLogoProduct() {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group">
      <AestheticLogoIcon className="w-9 h-9 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-[1.04]" />
      <div className="flex flex-col text-left leading-none">
        <span className="font-display font-black text-lg sm:text-2xl tracking-tight uppercase text-white leading-none">
          Marka<span className="gold-gradient-text">deo</span>
        </span>
        <span className="mt-1.5 text-[7px] sm:text-[8.5px] font-mono tracking-[0.3em] text-zinc-500 uppercase leading-none">
          Social &amp; Local Search
          <span className="text-brand-gold"> · </span>
          UK
        </span>
      </div>
    </div>
  );
}
