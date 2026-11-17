/* ==========================================================================
   Horizon Designs — Centralized configuration
   Single source of truth for brand details, colors, fonts and project data.
   The homepage markup mirrors this data as static HTML so the site works
   without JavaScript; keep both in sync when editing (see README.md).
   ========================================================================== */

export const BRAND = {
  name: 'Horizon Designs',
  founder: 'Vishal & Pratyush',
  founderRole: 'Founders',
  tagline: 'Beyond websites. Into experiences.',
  altTagline: 'Digital experiences, designed to stand apart.',
  description:
    'Horizon Designs creates distinctive digital experiences through premium web design, modern development and thoughtful interaction.',
  email: 'gamerzdeadshot52@gmail.com',
  instagram: 'https://www.instagram.com/horizon___designs/',
  /* Availability indicator shown in the hero — flip to false to hide it. */
  availability: {
    show: true,
    label: 'Available for select projects',
  },
  colors: {
    obsidian: '#0A0A0C',
    graphite: '#151519',
    elevated: '#1D1C21',
    ivory: '#F1EDE5',
    stone: '#85838A',
    bronze: '#C6A675',
    bronzeDeep: '#35271D',
    border: 'rgba(241,237,229,0.12)',
  },
  fonts: {
    display: 'Space Grotesk',
    body: 'Manrope',
  },
};

/* Featured projects — live URLs verified at build time. */
export const PROJECTS = [
  {
    id: 'dhruva-infra',
    index: '01',
    title: 'Dhruva Infra and Energy Solutions',
    category: 'Energy & Infrastructure',
    url: 'https://vermillion-crepe-007be0.netlify.app/',
    image: 'assets/images/dhruva-infra.webp',
    imageAlt:
      'Screenshot of the Dhruva Infra and Energy Solutions website homepage showing a solar panel field hero image',
    width: 1090,
    height: 830,
    platform: 'Netlify · Static',
    focus: 'Solar services',
    summary:
      'A bright, confident site for a solar energy company — residential and commercial solar offerings, government subsidy guidance and product highlights, presented with strong photography and a direct enquiry path.',
    designDirection:
      'Bold, optimistic energy-brand presentation built on large photography, strong navy-and-amber contrast and clear service signposting.',
    note: 'Live at the URL above; the hosting account was redeployed with this project.',
    caseStudy: 'projects/dhruva-infra.html',
  },
  {
    id: 'fairdeal-agencies',
    index: '02',
    title: 'Fairdeal Agencies',
    category: 'Business & Retail',
    url: 'https://fairdeal-agencies.ai.studio/',
    image: 'assets/images/fairdeal-agencies.webp',
    imageAlt:
      'Screenshot of the Fairdeal Agencies website homepage with the headline Smart Appliances. Better Living.',
    width: 1101,
    height: 819,
    platform: 'React · Vite',
    summary:
      'A polished retail identity for a multi-brand appliances and electronics showroom — category-first browsing, offer highlights and a confident blue system that guides shoppers from discovery to enquiry.',
    designDirection:
      'Professional business identity with a confident blue palette, clear information hierarchy and a category-first browsing structure.',
    caseStudy: 'projects/fairdeal-agencies.html',
  },
  {
    id: 'star-electronics',
    index: '03',
    title: 'Star Electronics',
    category: 'Electronics & Retail',
    url: 'https://gamerzdeadshot52-beep.github.io/Star-electronics-4/',
    image: 'assets/images/star-electronics.webp',
    imageAlt:
      'Screenshot of the Star Electronics website homepage with the headline Mobiles. Electronics. Furniture. All Brands, One Store.',
    width: 1090,
    height: 830,
    platform: 'GitHub Pages · Static',
    languages: 'English · हिन्दी',
    summary:
      'A bilingual, product-first site for a local electronics and furniture store — three departments, featured weekly products, sale moments and store details in a dark, high-contrast interface with an English / हिन्दी switch.',
    designDirection:
      'Modern technology aesthetic with a dark high-contrast canvas, yellow accent system and product-forward browsing hierarchy.',
    caseStudy: 'projects/star-electronics.html',
  },
  {
    id: 'creator-sphere',
    index: '04',
    title: 'CreatorSphere',
    category: 'Creator Economy',
    url: 'https://gamerzdeadshot52-beep.github.io/Creator-sphere/',
    image: 'assets/images/creator-sphere.webp',
    imageAlt:
      'Screenshot of the CreatorSphere website homepage with the headline Where Creators Grow and Brands Connect beside a creator-brand growth-loop diagram',
    width: 1090,
    height: 830,
    platform: 'GitHub Pages · Static',
    summary:
      'A creator-management platform built for two audiences at once — separate pathways for creators and brands, a six-step growth loop and a fourteen-service catalogue that turns brand partnerships into a clear, guided journey.',
    designDirection:
      'Dark, confident creator-economy presentation with a purple accent system, dual-audience signposting and a process-led narrative from discovery to collaboration.',
    caseStudy: 'projects/creator-sphere.html',
  },
  {
    id: 'aviclicks',
    index: '05',
    title: 'AVI CLICKS',
    category: 'Photography & Film',
    url: 'https://gamerzdeadshot52-beep.github.io/Aviclicks/#portfolio',
    image: 'assets/images/aviclicks.webp',
    imageAlt:
      'Screenshot of the AVI CLICKS website homepage with the headline AVI Clicks over a wedding portrait and the quote We don’t just capture moments. We preserve how they felt.',
    width: 1090,
    height: 830,
    platform: 'GitHub Pages · Static',
    summary:
      'A cinematic wedding-photography portfolio for Avinash in Lucknow, working worldwide — an emotional full-bleed hero, a ten-image work gallery and three service lines that lead into a direct enquiry path.',
    designDirection:
      'Editorial photography presentation with a serif display face, warm full-bleed imagery and a quiet, gallery-first rhythm that lets the pictures carry the page.',
    caseStudy: 'projects/aviclicks.html',
  },
];

/* Primary navigation — real pages (the site is multi-page).
   The active page is marked statically in each page's markup with
   class "is-active" + aria-current="page"; keep both in sync when editing. */
export const NAV_LINKS = [
  { label: 'Work', href: 'work.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'About', href: 'about.html' },
  { label: 'Process', href: 'process.html' },
  { label: 'Contact', href: 'contact.html' },
];

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isFinePointer = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;
