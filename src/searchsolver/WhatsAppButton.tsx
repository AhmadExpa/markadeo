import { motion } from 'motion/react';
import { waLink, DEFAULT_WA_MESSAGE } from './siteData';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="fixed bottom-6 left-6 z-[55] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] cursor-pointer group"
    >
      {/* Dynamic pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
      
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 fill-current transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.588 1.451 5.352 1.452 5.518 0 10.014-4.493 10.017-10.011.002-2.673-1.03-5.184-2.907-7.062C17.18 1.655 14.675.626 12.008.626 6.49.626 1.996 5.12 1.994 10.64c-.001 1.83.477 3.619 1.385 5.188L2.399 21.9l6.23-1.635zM17.47 15.3c-.316-.16-1.874-.925-2.163-1.03-.29-.104-.5-.16-.708.156-.208.317-.807.155-1.03.41-.22.254-.44.286-.756.126-.315-.16-1.333-.491-2.539-1.567-.938-.837-1.57-1.871-1.753-2.187-.183-.317-.02-.489.137-.648.142-.143.315-.367.473-.55.158-.184.21-.317.316-.53.105-.21.052-.397-.026-.554-.079-.158-.708-1.705-.97-2.33-.255-.612-.513-.53-.708-.54-.184-.01-.395-.01-.605-.01-.21 0-.553.079-.843.395-.29.316-1.106 1.08-1.106 2.632 0 1.553 1.133 3.053 1.29 3.264.159.21 2.23 3.405 5.397 4.77.754.325 1.343.52 1.8.665.757.24 1.445.207 1.99.126.608-.09 1.875-.765 2.137-1.468.264-.7 0-1.3-.078-1.42-.08-.122-.29-.21-.606-.37z" />
      </svg>
      
      {/* Tooltip on hover */}
      <span className="absolute left-16 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 whitespace-nowrap shadow-lg">
        Chat with us
      </span>
    </motion.a>
  );
}
