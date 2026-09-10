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
      name: 'Nimbus Analytics',
      category: 'SaaS Dashboard',
      description:
        'A real-time analytics dashboard for marketing teams to track campaign performance, conversions, and ROI across channels.',
      features: [
        'Real-time data visualization with interactive charts',
        'Custom report builder with export to PDF / CSV',
        'Role-based access control for team members',
        'Dark mode and responsive layout',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Recharts'],
      color: 'from-brand-500 to-brand-700',
      mockupType: 'dashboard',
    },
    {
      name: 'Verdant Store',
      category: 'E-Commerce',
      description:
        'A modern online store for a sustainable home goods brand, featuring a smooth checkout and product discovery experience.',
      features: [
        'Product catalog with advanced filtering and search',
        'Secure checkout with Stripe payment integration',
        'Order tracking and customer account portal',
        'Mobile-first responsive design',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
      color: 'from-accent-500 to-accent-700',
      mockupType: 'ecommerce',
    },
    {
      name: 'Helix CRM',
      category: 'Web Application',
      description:
        'A lightweight CRM for small agencies to manage clients, track deals through a pipeline, and automate follow-up reminders.',
      features: [
        'Drag-and-drop kanban deal pipeline',
        'Automated email follow-up sequences',
        'Client contact management with activity timeline',
        'Custom dashboard with revenue tracking',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Dnd Kit'],
      color: 'from-brand-600 to-accent-600',
      mockupType: 'crm',
    },
    {
      name: 'Lumen Landing',
      category: 'Landing Page',
      description:
        'A high-converting landing page for a SaaS product launch, designed around a single clear call-to-action and social proof.',
      features: [
        'Conversion-optimized hero with A/B-ready layout',
        'Animated scroll-triggered sections',
        'Email capture with instant validation',
        'Performance score of 98+ on Lighthouse',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-brand-400 to-brand-600',
      mockupType: 'landing',
    },
    {
      name: 'Atlas Portal',
      category: 'Customer Portal',
      description:
        'A customer self-service portal for a B2B logistics company, letting clients track shipments and manage documentation.',
      features: [
        'Real-time shipment tracking with map integration',
        'Document upload and secure download center',
        'Support ticket system with threaded replies',
        'Multi-language support',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Mapbox'],
      color: 'from-accent-400 to-brand-600',
      mockupType: 'portal',
    },
    {
      name: 'Orbit Redesign',
      category: 'Website Redesign',
      description:
        'A complete redesign of an outdated corporate website for a consulting firm, modernizing their digital presence and lead flow.',
      features: [
        'Complete visual identity refresh',
        'Service pages with lead capture forms',
        'CMS-driven blog with SEO optimization',
        'Accessibility compliance (WCAG 2.1 AA)',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      color: 'from-brand-500 to-accent-500',
      mockupType: 'corporate',
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
