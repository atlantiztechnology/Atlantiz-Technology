export const siteConfig = {
  name: 'Balaji',
  title: 'Freelance Full-Stack Developer',
  location: 'India',
  contact: {
    email: '[YOUR_EMAIL]',
    whatsapp: '[YOUR_WHATSAPP]',
    linkedin: '[YOUR_LINKEDIN]',
    github: '[YOUR_GITHUB]',
  },
  hero: {
    badge: 'Freelance Full-Stack Developer',
    headline: 'Websites That Make Your Business Look Better Online.',
    subtext:
      'I design and develop modern, responsive websites and web applications for businesses, startups, and entrepreneurs.',
    primaryCta: 'Start a Project',
    secondaryCta: 'View My Work',
    availability: 'Available for selected freelance projects',
  },
  trustStrip: [
    'Modern Design',
    'Responsive Development',
    'Fast Performance',
    'Business-Focused',
    'Direct Communication',
  ],
  services: [
    {
      icon: 'Globe',
      title: 'Business Websites',
      description:
        'Professional websites that help businesses build credibility and generate customer enquiries.',
      examples: ['Company sites', 'Local business sites', 'Service sites'],
    },
    {
      icon: 'LayoutTemplate',
      title: 'Landing Pages',
      description:
        'High-quality landing pages designed around your product, campaign, or business goal.',
      examples: ['Product launches', 'Campaign pages', 'Lead capture'],
    },
    {
      icon: 'AppWindow',
      title: 'Web Applications',
      description:
        'Custom web applications designed around your business workflow.',
      examples: ['Dashboards', 'Customer portals', 'SaaS products'],
    },
    {
      icon: 'ShoppingCart',
      title: 'E-Commerce',
      description:
        'Modern online stores designed to showcase products and create a smooth buying experience.',
      examples: ['Product catalogs', 'Checkout flows', 'Inventory sync'],
    },
    {
      icon: 'RefreshCw',
      title: 'Website Redesign',
      description:
        'Transform an outdated website into a modern, responsive, professional experience.',
      examples: ['UI modernization', 'Performance tuning', 'Mobile rebuild'],
    },
    {
      icon: 'Wrench',
      title: 'Maintenance',
      description:
        'Keep your website updated, secure, optimized, and ready for future improvements.',
      examples: ['Security patches', 'Content updates', 'Performance audits'],
    },
  ],
  projects: [
    {
      name: 'Casa Verde',
      category: 'Restaurant Website',
      description:
        'A premium, responsive restaurant website featuring an online menu, featured dishes, table reservations, location, and WhatsApp enquiry integration.',
      features: [
        'Online menu with categories and featured dishes',
        'Table reservation form with date and party size',
        'Location map and opening hours',
        'WhatsApp enquiry integration for instant contact',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      color: 'from-accent-500 to-accent-700',
      mockupType: 'restaurant',
    },
    {
      name: 'FitSpace',
      category: 'Fitness Website',
      description:
        'A modern fitness and gym website showcasing training programs, trainers, membership plans, class schedules, and customer enquiry forms.',
      features: [
        'Training program cards with details and pricing',
        'Trainer profiles with specialties and availability',
        'Membership plan comparison table',
        'Class schedule calendar and enquiry forms',
      ],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-brand-500 to-brand-700',
      mockupType: 'fitness',
    },
    {
      name: 'FlowDesk',
      category: 'SaaS Landing Page',
      description:
        'A modern SaaS website designed to showcase a productivity platform with product features, dashboard previews, pricing plans, FAQs, and strong conversion-focused CTAs.',
      features: [
        'Conversion-focused hero with clear value proposition',
        'Product feature sections with dashboard previews',
        'Pricing plan comparison with monthly and annual toggle',
        'FAQ section and strong call-to-action throughout',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      color: 'from-brand-600 to-accent-600',
      mockupType: 'saas-landing',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Discovery',
      description:
        'We start with a conversation about your business, goals, and audience. I learn what you need so the result actually serves your business — not just a template.',
    },
    {
      step: '02',
      title: 'Design',
      description:
        'I create a visual direction and layout tailored to your brand. You review and approve the design before any code is written, so there are no surprises.',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'I build the site with modern, maintainable code — responsive, fast, and accessible. You get regular progress updates throughout.',
    },
    {
      step: '04',
      title: 'Launch',
      description:
        'I handle deployment, final testing, and a smooth go-live. Your site is optimized for performance and SEO from day one.',
    },
    {
      step: '05',
      title: 'Support',
      description:
        'After launch, I provide ongoing maintenance and support. Updates, fixes, and improvements are just a message away.',
    },
  ],
  about: {
    heading: 'I help businesses build a stronger presence online.',
    paragraphs: [
      'I am Balaji, a freelance full-stack developer based in India. I work with businesses, startups, and entrepreneurs to design and develop websites and web applications that look professional and perform well.',
      'My focus is on clean design, reliable code, and clear communication. I build sites that are fast, responsive, and easy to manage — so your business looks good and works smoothly online.',
      'I work directly with you throughout the project, from first conversation to launch and beyond. No middlemen, no jargon — just a straightforward process and a site you will be proud to show your customers.',
    ],
    highlights: [
      'Direct communication — you work with me, not a project manager',
      'Modern, maintainable code built to last',
      'Responsive design that works on every device',
      'Ongoing support after your site goes live',
    ],
  },
};

export type SiteConfig = typeof siteConfig;
