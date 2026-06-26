/* ==================================================================
   siteData.ts — single source of truth for the whole Markadeo site.

   Markadeo is a full-service creative digital agency — branding &
   print, websites, WordPress, Shopify/eCommerce, Amazon creatives,
   TikTok & AI video, and custom software — delivering solutions
   designed to generate measurable results. Tagline: Design. Develop.
   Dominate.

   NOTE: contact details are PLACEHOLDERS. Swap WHATSAPP_NUMBER and
   EMAIL below for the real values. waLink()/mailLink() build the URLs.
   ================================================================== */

/* Brand tagline — surfaced in the hero eyebrow and footer. */
export const TAGLINE = 'Design. Develop. Dominate.';

export const CONTACT = {
  /* Digits only, full international format, NO +, spaces or dashes.
     e.g. UK "44 7700 900123" -> "447700900123" */
  WHATSAPP_NUMBER: '447000000000',
  EMAIL: 'hello@markadeo.com',
  INSTAGRAM: 'https://instagram.com/markadeo',
  TIKTOK: 'https://tiktok.com/@markadeo',
  PHONE_DISPLAY: '+44 7000 000000',
} as const;

export function waLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailLink(subject?: string): string {
  const base = `mailto:${CONTACT.EMAIL}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export const DEFAULT_WA_MESSAGE =
  "Hi Markadeo — I'd like a free consultation about growing my business with creative digital solutions.";

/* ------------------------------------------------------------------
   Navigation — multi-page, Trifid-style (no "Club").
------------------------------------------------------------------ */
export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Web & App', to: '/web-app-design' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;

/* ------------------------------------------------------------------
   Stock media (hotlinked — Unsplash images + Coverr/Pexels video).
   All royalty-free / no attribution required. Muted, looping video.
------------------------------------------------------------------ */
/* Pexels CDN direct MP4s — royalty-free, no attribution required,
   hotlinkable and verified loading. All depict content creation /
   filming / studio work (marketing-relevant). Muted/looping in <video>. */
export const MEDIA = {
  // Woman setting up / fixing a camera before filming — studio/content vibe
  heroVideo: 'https://videos.pexels.com/video-files/9032611/9032611-uhd_2560_1440_25fps.mp4',
  heroPoster:
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
  // Creator talking to camera
  reelVideo: 'https://videos.pexels.com/video-files/9032398/9032398-uhd_2560_1440_25fps.mp4',
  // Recording / studio session
  studioVideo: 'https://videos.pexels.com/video-files/8993415/8993415-uhd_2560_1440_30fps.mp4',
  // Creator explaining to camera (used as a subtle dark backdrop)
  threeDVideo: 'https://videos.pexels.com/video-files/6332572/6332572-uhd_2732_1440_25fps.mp4',
  // Working at a laptop / desk
  webVideo: 'https://videos.pexels.com/video-files/8126733/8126733-hd_1920_1080_25fps.mp4',
} as const;

/* ------------------------------------------------------------------
   Services — full-service agency (8 numbered service areas).
   Mirrors the Markadeo service spec: short = the section "Heading",
   description = the "Content", features = the "Services" bullets.
------------------------------------------------------------------ */
export interface Service {
  id: string;
  no: string;
  title: string;
  icon: string; // lucide icon name, mapped in components
  short: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: 'print',
    no: '01',
    title: 'Digital & Print Media',
    icon: 'PenTool',
    short: 'Creative Design That Builds Strong Brands',
    description:
      'Our design team creates impactful visual experiences that strengthen your brand identity across digital and print platforms. We ensure consistency, professionalism, and creativity in every touchpoint.',
    features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Marketing Materials', 'Packaging Design', 'Brochures & Flyers', 'Business Cards', 'Large Format Printing'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A brand design moodboard with colour swatches and type.',
  },
  {
    id: 'web',
    no: '02',
    title: 'Website Design & Development',
    icon: 'Globe',
    short: 'High-Converting Websites Built For Growth',
    description:
      'Your website should do more than look great — it should generate leads and sales. We design and develop modern, responsive websites that deliver exceptional user experiences and measurable business results.',
    features: ['Corporate Websites', 'Business Websites', 'Landing Pages', 'Portfolio Websites', 'Custom Web Applications', 'Website Maintenance'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A laptop and phone showing a sleek website design.',
  },
  {
    id: 'wordpress',
    no: '03',
    title: 'WordPress Development',
    icon: 'Layout',
    short: 'Flexible WordPress Solutions',
    description:
      'We build scalable WordPress websites designed for speed, security, and conversions. Whether you need a business website or a custom solution, our developers create experiences that perform.',
    features: ['Business Websites', 'Custom Themes', 'Speed & Security', 'Plugin Integration'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A WordPress website being built on screen.',
  },
  {
    id: 'ecommerce',
    no: '04',
    title: 'Shopify & eCommerce Solutions',
    icon: 'ShoppingBag',
    short: 'Sell More With Powerful eCommerce Stores',
    description:
      'We create conversion-focused Shopify and WooCommerce stores that help businesses maximize sales and improve customer experience.',
    features: ['Shopify Store Design', 'Shopify Development', 'WooCommerce Development', 'Product Uploads', 'Payment Integration', 'Conversion Optimisation'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'An online store displayed on a laptop.',
  },
  {
    id: 'amazon',
    no: '05',
    title: 'Amazon Creative Services',
    icon: 'Package',
    short: 'Maximise Your Amazon Sales Potential',
    description:
      'Our Amazon experts help brands stand out with professional listing optimisation and premium visual content that improves conversion rates and customer trust.',
    features: ['Amazon Listing Images', 'A+ Content', 'Amazon Storefront Design', 'Product Infographics', 'Brand Story Design', 'Product Photography Editing'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Product packages prepared for online marketplace listing.',
  },
  {
    id: 'tiktok',
    no: '06',
    title: 'TikTok Ads & Video Production',
    icon: 'Video',
    short: 'Content Designed To Stop The Scroll',
    description:
      'Capture attention with engaging TikTok and social media videos created specifically for modern audiences. Our creatives combine storytelling with performance marketing principles to drive engagement and conversions.',
    features: ['TikTok Video Ads', 'UGC Style Ads', 'Product Demonstrations', 'Social Media Reels', 'Promotional Videos'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A creator filming a short-form video on a smartphone.',
  },
  {
    id: 'ai',
    no: '07',
    title: 'AI Ads & AI Videos',
    icon: 'Wand2',
    short: 'Future-Ready AI-Powered Marketing',
    description:
      'Leverage artificial intelligence to produce high-quality ad creatives, promotional videos, product showcases, and branded content faster and more efficiently than traditional production methods.',
    features: ['AI Video Ads', 'AI Product Videos', 'AI Influencer Content', 'AI Voiceovers', 'AI Commercial Production'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Abstract AI-generated visual content.',
  },
  {
    id: 'software',
    no: '08',
    title: 'Software Development',
    icon: 'Code',
    short: 'Custom Software Built Around Your Business',
    description:
      'We develop tailored software solutions that improve productivity, automate workflows, and support business growth. Our solutions are designed to solve real operational challenges and create long-term value.',
    features: ['CRM Systems', 'ERP Solutions', 'SaaS Applications', 'Mobile Apps', 'Custom Portals', 'API Integrations', 'Business Automation'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A developer writing code on a laptop.',
  },
];

/* ------------------------------------------------------------------
   Clients & Brands section copy.
------------------------------------------------------------------ */
export const clientsCopy = {
  heading: 'Trusted By Ambitious Brands',
  body: 'Businesses choose Markadeo because we combine creativity, technology, and performance marketing to help brands stand out in competitive markets. From startups to established companies, we create solutions that drive visibility, engagement, and growth.',
} as const;

/* ------------------------------------------------------------------
   About — "Your Growth Partner" + Why Choose Us bullets.
------------------------------------------------------------------ */
export const aboutCopy = {
  heading: 'Your Growth Partner In The Digital World',
  body: "Markadeo is a creative agency helping businesses establish, grow, and scale their digital presence. Our team combines innovative design, strategic marketing, cutting-edge AI technology, and custom software solutions to create powerful customer experiences. Whether you're launching a new brand, growing your online store, or automating operations, we provide solutions tailored to your business goals.",
} as const;

export const whyChooseUs: string[] = [
  'Results-Driven Approach',
  'Dedicated Project Managers',
  'UK Market Expertise',
  'AI-Powered Creative Production',
  'Transparent Communication',
  'Long-Term Growth Strategies',
];

/* ------------------------------------------------------------------
   Why Markadeo Is Different — value propositions.
------------------------------------------------------------------ */
export const differentiators: { title: string; body: string }[] = [
  { title: 'Strategy First', body: 'Every project begins with understanding your business goals.' },
  { title: 'Creative Meets Technology', body: 'We combine design excellence with technical expertise.' },
  { title: 'AI-Powered Innovation', body: 'Faster production without compromising quality.' },
  { title: 'Conversion-Focused Approach', body: 'Every design and campaign is built to generate results.' },
  { title: 'End-To-End Solutions', body: 'One partner for design, development, marketing, and software.' },
  { title: 'Dedicated Support', body: 'Long-term collaboration and ongoing optimisation.' },
];

/* ------------------------------------------------------------------
   Our Proven Process — 6 steps.
------------------------------------------------------------------ */
export const processSteps: { no: string; title: string }[] = [
  { no: '01', title: 'Discover & Strategy' },
  { no: '02', title: 'Planning & Research' },
  { no: '03', title: 'Creative Development' },
  { no: '04', title: 'Implementation' },
  { no: '05', title: 'Testing & Optimisation' },
  { no: '06', title: 'Launch & Growth' },
];

/* ------------------------------------------------------------------
   FAQ — frequently asked questions.
------------------------------------------------------------------ */
export const faqs: { q: string; a: string }[] = [
  { q: 'What services does Markadeo offer?', a: 'We provide web design, Shopify & WordPress development, Amazon creatives, digital marketing, AI content creation, branding, and custom software solutions.' },
  { q: 'Do you work with startups and established businesses?', a: 'Yes, we work with businesses of all sizes, from startups to large enterprises.' },
  { q: 'How long does a website project take?', a: 'Most websites are completed within 2–6 weeks, depending on the project scope.' },
  { q: 'Do you build Shopify stores?', a: 'Yes, we design and develop high-converting Shopify and WooCommerce stores.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely. We can refresh, optimise, or completely rebuild your current website.' },
  { q: 'Do you create Amazon A+ Content?', a: 'Yes, we design Amazon listing images, A+ Content, Brand Stories, and Storefronts.' },
  { q: 'Do you create TikTok and social media ads?', a: 'Yes, we produce engaging TikTok ads, reels, and social media video content.' },
  { q: 'What are AI-powered ads?', a: 'AI-powered ads use advanced technology to create high-quality videos, visuals, and marketing content faster and more efficiently.' },
  { q: 'Do you offer custom software development?', a: 'Yes, we build custom CRM systems, SaaS platforms, web applications, and business automation tools.' },
  { q: 'Will my website be mobile-friendly?', a: 'Yes, every website we create is fully responsive across all devices.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, we offer maintenance, updates, and technical support after launch.' },
  { q: 'Is SEO included in your websites?', a: 'Yes, all websites are built with SEO best practices in mind.' },
  { q: 'Can you help improve my online sales?', a: 'Yes, we focus on creating conversion-driven solutions that help increase leads and sales.' },
  { q: 'Do you offer free consultations?', a: 'Yes, we provide a free consultation to discuss your goals and requirements.' },
  { q: 'Why choose Markadeo?', a: 'Because we combine creativity, technology, and strategy to deliver solutions that help businesses grow.' },
];

/* ------------------------------------------------------------------
   Contact form — project budget options for the enquiry form.
------------------------------------------------------------------ */
export const budgetOptions: string[] = [
  'Under £1,000',
  '£1,000 – £5,000',
  '£5,000 – £10,000',
  '£10,000 – £25,000',
  '£25,000+',
  'Not sure yet',
];

/* ------------------------------------------------------------------
   Core values (Trifid-style: Creativity / Unique / Innovation / Youth).
------------------------------------------------------------------ */
export const values = [
  { icon: 'Lightbulb', title: 'Creativity', body: 'We take creative risks and experiment, because forgettable content is the only real failure.' },
  { icon: 'Fingerprint', title: 'Unique', body: 'No templates, no copies. Everything we make is built to make you stand apart.' },
  { icon: 'Rocket', title: 'Innovation', body: 'We use AI-driven workflows, new formats and new platforms to move faster, test more and get you seen more consistently.' },
  { icon: 'Heart', title: 'Content-first', body: 'Great content is the engine. Get that right and real audience and visits follow.' },
] as const;

/* ------------------------------------------------------------------
   Work / portfolio — framed as our craft, no fabricated client stats.
------------------------------------------------------------------ */
export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  span?: 'wide' | 'tall' | 'normal';
}

export const workItems: WorkItem[] = [
  { id: 'w1', title: 'Brand Film', category: 'Content Production', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80', imageAlt: 'Cinematic brand film still.', span: 'wide' },
  { id: 'w2', title: 'Product 3D', category: '3D & Motion', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=900&q=80', imageAlt: 'Abstract 3D render.', span: 'tall' },
  { id: 'w3', title: 'Social Series', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80', imageAlt: 'Social media content series.' },
  { id: 'w4', title: 'Short-Form', category: 'TikTok', image: 'https://images.unsplash.com/photo-1622151834677-70f982c9adef?auto=format&fit=crop&w=900&q=80', imageAlt: 'Short-form video creator.' },
  { id: 'w5', title: 'Identity System', category: 'Branding', image: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=900&q=80', imageAlt: 'Brand identity system.' },
  { id: 'w6', title: 'Web Build', category: 'Web & App', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80', imageAlt: 'Website design on screens.', span: 'wide' },
  { id: 'w7', title: 'Campaign Shoot', category: 'Content Production', image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=900&q=80', imageAlt: 'Studio campaign photoshoot.' },
  { id: 'w8', title: 'Motion Reel', category: '3D & Motion', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80', imageAlt: 'Motion and content production reel.' },
];

export const workCategories = ['All', 'Content Production', '3D & Motion', 'Social Media', 'TikTok', 'Branding', 'Web & App'];

/* Real brands we've produced work for — shown as a "worked with" strip. */
export const clientBrands = ["Kaspa's", 'You Want Beef', 'MCB Bank'];

/* ------------------------------------------------------------------
   Pricing — weekly plans (front-page pricing table).
------------------------------------------------------------------ */
export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  per: string;
  features: string[];
  note: string;
  recommended?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'essentials',
    name: 'Essentials Pack',
    tagline: 'Basic — Social Media Essentials',
    price: '£59',
    per: '/week',
    features: [
      '2 static posts per week',
      '1 GIF creative',
      '1–2 reels per week',
      'Generic festival & holiday campaigns',
      'Email support for queries & assistance',
    ],
    note: "A cost-effective way to keep your outlet's presence consistent. Content follows a standardised branding approach and may be shared across similar franchise outlets, with customised location tagging where required.",
  },
  {
    id: 'extra',
    name: 'Extra Plan',
    tagline: 'A stronger, tailored presence',
    price: '£109',
    per: '/week',
    features: [
      'Everything in the Essentials Pack, plus:',
      'Editing, compiling & posting of client-provided raw media',
      'Personalised annual content calendar & strategy',
      'Customised post designs tailored to your outlet',
      'Up to 4 strategy / content planning sessions per month',
      'Official-hours on-call account support',
    ],
    note: 'Builds a more unique, audience-specific identity while keeping brand communication consistent. Personalised content is produced where the client supplies the raw media.',
  },
  {
    id: 'ultra',
    name: 'Ultra — Premium',
    tagline: 'Fully managed premium growth',
    price: '£159',
    per: '/week',
    recommended: true,
    features: [
      '2 monthly outlet visits for pro content & engagement coverage',
      'All essential services, fully personalised & exclusive content',
      'Dedicated Customer Success Manager (CSM)',
      'End-to-end account supervision & management',
      'Detailed performance reporting twice per month',
      'Personalised annual calendar, festive campaigns & strategy',
      '24/7 priority support',
    ],
    note: 'All content is exclusively customised and copyrighted for your outlet — a unique, premium brand identity across every platform.',
  },
];

/* ------------------------------------------------------------------
   Client / platform marquee (logos as wordmarks — no fake brands).
------------------------------------------------------------------ */
export const platformChips = [
  'Instagram', 'TikTok', 'YouTube', 'Meta', 'Pinterest', 'LinkedIn', 'Google', 'Snapchat',
];
