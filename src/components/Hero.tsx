import { ArrowRight, Sparkles, CircleDot } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px] dark:bg-brand-500/15" />
      <div className="pointer-events-none absolute top-20 right-0 h-[300px] w-[400px] rounded-full bg-accent-500/10 blur-[100px] dark:bg-accent-500/15" />

      <div className="container-mw container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="badge animate-fade-in-down">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              {siteConfig.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 animate-fade-in-up sm:text-5xl lg:text-6xl dark:text-white">
              Websites That Make Your Business{' '}
              <span className="text-gradient">Look Better</span> Online.
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 animate-fade-in-up sm:text-lg dark:text-gray-400" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              {siteConfig.hero.subtext}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 animate-fade-in-up sm:flex-row sm:items-center" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <button onClick={() => scrollTo('#contact')} className="btn-primary group">
                {siteConfig.hero.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo('#projects')} className="btn-secondary group">
                {siteConfig.hero.secondaryCta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Availability tag */}
            <div className="mt-8 flex items-center gap-2.5 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {siteConfig.hero.availability}
              </span>
            </div>
          </div>

          {/* Right: layered browser mockups */}
          <div className="relative hidden h-[480px] lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-full w-full">
      {/* Back card — analytics dashboard */}
      <div className="absolute right-0 top-0 w-[340px] animate-float-delayed rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-gray-300/50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/40" style={{ transform: 'rotate(-4deg)' }}>
        <BrowserBar dark />
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              <div className="h-2.5 w-20 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="h-6 w-16 rounded-md bg-brand-100 dark:bg-brand-950/50" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Visitors', value: '12.4k', color: 'bg-brand-500' },
              { label: 'Revenue', value: '₹84k', color: 'bg-accent-500' },
              { label: 'Orders', value: '342', color: 'bg-brand-400' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-gray-100 bg-gray-50 p-2.5 dark:border-gray-800 dark:bg-gray-800/50">
                <div className={`mb-1.5 h-1.5 w-8 rounded-full ${stat.color}`} />
                <div className="text-[10px] font-semibold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-[9px] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Mini chart */}
          <div className="flex h-24 items-end gap-1.5 rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
            {[40, 55, 35, 70, 50, 80, 60, 90, 65, 85, 75, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Front card — landing page */}
      <div className="absolute bottom-0 left-0 w-[300px] animate-float rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-gray-300/50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/40" style={{ transform: 'rotate(3deg)' }}>
        <BrowserBar />
        <div className="space-y-3 p-4">
          {/* Hero block */}
          <div className="rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-4">
            <div className="h-2 w-24 rounded bg-white/60" />
            <div className="mt-2 h-2 w-16 rounded bg-white/40" />
            <div className="mt-3 inline-flex h-6 w-20 items-center justify-center rounded-md bg-white/90 text-[9px] font-bold text-brand-600">
              Get Started
            </div>
          </div>
          {/* Feature row */}
          <div className="grid grid-cols-2 gap-2">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-lg border border-gray-100 p-2.5 dark:border-gray-800">
                <CircleDot className="mb-1.5 h-3.5 w-3.5 text-brand-500" />
                <div className="h-1.5 w-12 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="mt-1 h-1.5 w-8 rounded bg-gray-100 dark:bg-gray-800" />
              </div>
            ))}
          </div>
          {/* CTA bar */}
          <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 dark:border-gray-800 dark:bg-gray-800/50">
            <div className="h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-5 w-12 rounded-md bg-brand-500" />
          </div>
        </div>
      </div>

      {/* Floating accent dot */}
      <div className="absolute right-1/2 top-1/2 h-3 w-3 animate-pulse-slow rounded-full bg-accent-500 shadow-lg shadow-accent-500/30" />
    </div>
  );
}

function BrowserBar({ dark }: { dark?: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 border-b border-gray-200/80 px-3 py-2.5 ${dark ? 'dark:border-gray-800' : ''}`}>
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      <div className="ml-2 flex-1">
        <div className="h-4 rounded bg-gray-100 dark:bg-gray-800" />
      </div>
    </div>
  );
}
