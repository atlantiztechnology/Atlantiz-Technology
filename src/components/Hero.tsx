import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, Sparkles, ShieldCheck, Zap, Layers,
  CheckCircle2, TrendingUp, Star, HeartHandshake,
  Building2, Palette, Dumbbell, Code2, Cpu, Globe,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const heroApps = [
  {
    id: 'realestate',
    name: 'Estatly Real Estate',
    category: 'Real Estate Platform',
    domain: 'estatly.demo.app',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    tag: 'Concept Project',
    liveUrl: 'https://estatly-real-estate-pznm.bolt.host/',
    icon: Building2,
    accentColor: 'from-emerald-500 to-teal-600',
    glowColor: 'bg-emerald-500/20',
    highlight: 'Map Search & Virtual 3D Tours',
  },
  {
    id: 'decor',
    name: 'Elara Decor Studio',
    category: 'Interior Design & Decor',
    domain: 'elara-decor.demo.app',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    tag: 'Concept Project',
    liveUrl: 'https://elara-decor-website-ccm7.bolt.host/',
    icon: Palette,
    accentColor: 'from-rose-500 to-amber-600',
    glowColor: 'bg-rose-500/20',
    highlight: 'Design Galleries & Consultation Booking',
  },
  {
    id: 'fitness',
    name: 'FitSpace Fitness App',
    category: 'Health & Fitness Platform',
    domain: 'fitspace.demo.app',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    tag: 'Concept Project',
    liveUrl: 'https://fitspace-fitness-web-pywl.bolt.host/',
    icon: Dumbbell,
    accentColor: 'from-blue-500 to-indigo-600',
    glowColor: 'bg-blue-500/20',
    highlight: 'Trainer Booking & Member Plans',
  },
];

const marqueeItems = [
  { icon: Building2, text: 'Real Estate Apps' },
  { icon: Palette, text: 'Interior Decor Sites' },
  { icon: Dumbbell, text: 'Fitness Apps' },
  { icon: Globe, text: 'SaaS Products' },
  { icon: Code2, text: 'Custom Web Apps' },
  { icon: Cpu, text: 'AI Integrations' },
  { icon: ShieldCheck, text: 'Secure Systems' },
  { icon: Sparkles, text: 'Brand Experiences' },
];

const pills = [
  { icon: Zap, text: 'Fast Delivery' },
  { icon: ShieldCheck, text: 'Enterprise Security' },
  { icon: Layers, text: 'Custom UI/UX' },
  { icon: HeartHandshake, text: '1-on-1 Support' },
];

export default function Hero() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-switch tabs, pause briefly on manual click
  useEffect(() => {
    if (userPaused) return;
    const interval = setInterval(() => {
      switchTab((prev) => (prev + 1) % heroApps.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [userPaused]);

  const switchTab = (getNext: (prev: number) => number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveAppIndex((prev) => {
        const next = getNext(prev);
        setPrevIndex(prev);
        return next;
      });
      setIsTransitioning(false);
    }, 250);
  };

  const handleTabClick = (index: number) => {
    setUserPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setUserPaused(false), 8000);

    setIsTransitioning(true);
    setTimeout(() => {
      setPrevIndex(activeAppIndex);
      setActiveAppIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentApp = heroApps[activeAppIndex];
  const CurrentIcon = currentApp.icon;

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32">

      {/* ── Animated background layers ── */}
      <div className="absolute inset-0 bg-grid mask-fade-b" />

      {/* Primary glow — animates continuously */}
      <div className="pointer-events-none absolute -top-56 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-brand-500/12 blur-[180px] animate-glow-pulse" />
      {/* Secondary accent orb */}
      <div className="pointer-events-none absolute top-32 -right-24 h-[480px] w-[560px] rounded-full bg-accent-500/12 blur-[140px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      {/* Tertiary purple orb */}
      <div className="pointer-events-none absolute top-1/2 -left-32 h-[360px] w-[440px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

      {/* Decorative floating dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
        {[
          'top-20 left-[8%] h-2 w-2 bg-brand-400/40',
          'top-36 left-[22%] h-1.5 w-1.5 bg-accent-400/50',
          'top-48 right-[14%] h-2.5 w-2.5 bg-purple-400/35',
          'top-72 right-[30%] h-1.5 w-1.5 bg-brand-300/45',
          'bottom-24 left-[15%] h-2 w-2 bg-accent-400/40',
          'bottom-40 right-[10%] h-1.5 w-1.5 bg-brand-400/35',
        ].map((cls, i) => (
          <span
            key={i}
            className={`absolute rounded-full animate-pulse-slow ${cls}`}
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      {/* ── Marquee industry strip ── */}
      <div className="relative overflow-hidden border-b border-t border-gray-100/60 bg-white/40 backdrop-blur-sm dark:border-gray-800/60 dark:bg-gray-950/40 py-3 mb-6 sm:mb-10">
        <div className="flex w-max animate-marquee gap-8 items-center" style={{ willChange: 'transform' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest whitespace-nowrap dark:text-gray-400 select-none">
                <Icon className="h-3.5 w-3.5 text-brand-500 shrink-0" />
                {item.text}
                <span className="mx-3 text-gray-200 dark:text-gray-700">◆</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="container-mw container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col items-start lg:col-span-6">

            {/* Animated badge */}
            <div className="badge animate-fade-in-down shadow ring-1 ring-brand-500/20 mb-5"
              style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              <span className="font-bold text-gray-900 dark:text-white tracking-tight">Full-Cycle Digital Agency</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-brand-600 dark:text-brand-400 font-semibold">We Build For You</span>
            </div>

            {/* Headline — staggered words */}
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-[54px] xl:text-[60px]">
              <span className="block animate-slide-in-left opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.05s' }}>
                We Build Fast,
              </span>
              <span className="block animate-slide-in-left opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.15s' }}>
                Beautiful{' '}
                <span
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(120deg, #2563eb 0%, #14b8a6 40%, #8b5cf6 80%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 4s linear infinite',
                  }}
                >
                  Applications
                </span>
              </span>
              <span className="block animate-slide-in-left opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.25s' }}>
                Clients Love.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="mt-6 max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-[17px] animate-fade-in-up opacity-0"
              style={{ animationFillMode: 'forwards', animationDelay: '0.35s' }}
            >
              Atlantiz Technology is your dedicated software partner — we design, develop &amp; launch
              high-impact web applications, real estate platforms, event portals, and SaaS products
              that drive real results.
            </p>

            {/* Feature pills */}
            <div
              className="mt-6 flex flex-wrap gap-2 animate-fade-in-up opacity-0"
              style={{ animationFillMode: 'forwards', animationDelay: '0.45s' }}
            >
              {pills.map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-brand-300 hover:text-brand-700 dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-300 dark:hover:border-brand-700"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-500 shrink-0" />
                    {pill.text}
                  </span>
                );
              })}
            </div>

            {/* CTAs */}
            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up opacity-0"
              style={{ animationFillMode: 'forwards', animationDelay: '0.55s' }}
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary group relative overflow-hidden text-base shadow-lg shadow-brand-500/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {siteConfig.hero.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <button
                onClick={() => scrollTo('#projects')}
                className="btn-secondary group text-base hover:border-brand-400"
              >
                View Our Work (3 Apps)
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Social proof row */}
            <div
              className="mt-8 flex flex-wrap items-center gap-5 text-sm animate-fade-in opacity-0"
              style={{ animationFillMode: 'forwards', animationDelay: '0.7s' }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">{siteConfig.hero.availability}</span>
              </div>
              <div className="hidden h-4 w-px bg-gray-200 dark:bg-gray-700 sm:block" />
              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0" />
                <span>100% On-Time Delivery Guarantee</span>
              </div>
              <div className="hidden h-4 w-px bg-gray-200 dark:bg-gray-700 sm:block" />
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <span className="font-bold text-amber-500">★★★★★</span>
                <span>5.0 Rated Agency</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: App Showcase ── */}
          <div className="relative lg:col-span-6 animate-fade-in opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
            <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">

              {/* Dynamic colored glow behind card — changes with active app */}
              <div
                className={`absolute -inset-3 rounded-3xl blur-2xl transition-all duration-700 ${currentApp.glowColor} opacity-40`}
              />
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-500 via-accent-500 to-purple-500 opacity-20 blur-xl" />

              {/* Tab switcher */}
              <div className="relative mb-3 flex items-center gap-1.5 rounded-2xl border border-gray-200/80 bg-white/90 p-1.5 shadow-lg backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90">
                {heroApps.map((app, index) => {
                  const Icon = app.icon;
                  const isActive = activeAppIndex === index;
                  return (
                    <button
                      key={app.id}
                      onClick={() => handleTabClick(index)}
                      className={`relative flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 px-3 text-[11px] font-bold transition-all duration-300 overflow-hidden ${
                        isActive
                          ? 'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-600/30'
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate hidden sm:inline">{app.name.split(' ')[0]}</span>
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-white/60" />
                      )}
                    </button>
                  );
                })}
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-2xl">
                  <div
                    key={activeAppIndex}
                    className="h-full bg-brand-500/40"
                    style={{
                      width: '100%',
                      animation: userPaused ? 'none' : 'progressBar 5.5s linear forwards',
                    }}
                  />
                </div>
              </div>

              {/* Browser Window */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-brand-950/20 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950 dark:shadow-black/60">

                {/* Window chrome bar */}
                <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/95 px-4 py-3 dark:border-gray-800/80 dark:bg-gray-900/95">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/90 hover:bg-red-500 transition-colors cursor-default" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/90 hover:bg-yellow-500 transition-colors cursor-default" />
                    <span className="h-3 w-3 rounded-full bg-green-400/90 hover:bg-green-500 transition-colors cursor-default" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg border border-gray-200/60 bg-white/90 px-3 py-1 text-[11px] font-medium text-gray-500 shadow-inner dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="truncate max-w-[140px]">{currentApp.domain}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-600 ring-1 ring-brand-200 dark:bg-brand-900/30 dark:text-brand-400 dark:ring-brand-800">
                    <Cpu className="h-2.5 w-2.5" />
                    DEMO
                  </span>
                </div>

                {/* App screenshot with smooth fade transition */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-950">
                  {heroApps.map((app, index) => (
                    <img
                      key={app.id}
                      src={app.image}
                      alt={app.name}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700"
                      style={{
                        opacity: activeAppIndex === index ? 1 : 0,
                        transform: activeAppIndex === index ? 'scale(1)' : 'scale(1.04)',
                      }}
                      loading="eager"
                    />
                  ))}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/10 to-transparent pointer-events-none" />

                  {/* App info overlay — transitions with app */}
                  <div
                    className={`absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-gray-950/85 p-3 backdrop-blur-md transition-all duration-500 ${
                      isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${currentApp.accentColor} text-white shadow-md`}>
                        <CurrentIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">{currentApp.name}</div>
                        <div className="text-[10px] text-gray-400 truncate">{currentApp.highlight}</div>
                      </div>
                    </div>
                    <span className="shrink-0 inline-flex items-center rounded-full bg-brand-500/20 px-2.5 py-0.5 text-[10px] font-bold text-brand-300 ring-1 ring-inset ring-brand-500/30 whitespace-nowrap">
                      {currentApp.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Floating widget: Review ── */}
              <div
                className="absolute -bottom-6 -left-5 hidden animate-float rounded-2xl border border-gray-200/90 bg-white/98 px-4 py-3 shadow-xl shadow-gray-300/30 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/98 dark:shadow-black/50 sm:flex sm:items-center sm:gap-3"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950/40">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">5.0 Star Rating</span>
                    <span className="text-[10px] text-amber-400 leading-none">★★★★★</span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 max-w-[160px] leading-snug">"Delivered 2 weeks ahead of schedule!"</p>
                </div>
              </div>

              {/* ── Floating widget: Metric ── */}
              <div
                className="absolute -top-5 -right-5 hidden animate-float-delayed rounded-2xl border border-gray-200/90 bg-white/98 px-4 py-3 shadow-xl shadow-gray-300/30 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/98 dark:shadow-black/50 sm:flex sm:items-center sm:gap-2.5"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/40">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-gray-900 dark:text-white">+180% Engagement</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">High-Conversion UX Design</div>
                </div>
              </div>

              {/* ── Floating widget: Apps count ── */}
              <div
                className="absolute bottom-16 -right-5 hidden animate-float-delayed-2 rounded-2xl border border-gray-200/90 bg-white/98 px-3.5 py-2.5 shadow-xl shadow-gray-300/30 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/98 dark:shadow-black/50 sm:flex sm:items-center sm:gap-2"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-950/40">
                  <Code2 className="h-4 w-4 text-brand-500" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-gray-900 dark:text-white">45+ Projects</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">Successfully Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar keyframe via inline style tag */}
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
