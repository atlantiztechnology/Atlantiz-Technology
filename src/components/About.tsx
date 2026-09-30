import { Check, Shield, Cpu, Zap, Users2, Sparkles, Award } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { icon: Cpu, label: 'Clean, modern architecture', value: 'Production Grade' },
  { icon: Award, label: 'Pixel-perfect UI/UX design', value: 'Custom Crafted' },
  { icon: Zap, label: 'High performance & SEO', value: 'Sub-Second Speed' },
  { icon: Users2, label: 'Dedicated engineering squad', value: 'Direct Collaboration' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container-mw container-px">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          {/* Left: bio & philosophy (7 cols) */}
          <div className="lg:col-span-7">
            <div className="badge shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              About Atlantiz Technology
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {siteConfig.about.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {siteConfig.about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-6 space-y-3">
              {siteConfig.about.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-200">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-950/50">
                    <Check className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Agency quick metrics bar */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200/80 pt-6 sm:grid-cols-4 dark:border-gray-800">
              {siteConfig.about.agencyStats.map((item) => (
                <div key={item.label}>
                  <div className="font-display text-2xl font-bold text-brand-600 dark:text-brand-400">
                    {item.value}
                  </div>
                  <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: agency feature cards + visual banner (5 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Visual Team & Tech Banner */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 shadow-md dark:border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Atlantiz Technology Engineering Team"
                className="h-44 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Full-Cycle Engineering Squad</div>
                  <div className="text-[10px] text-gray-300">Strategy • UI/UX • Web & Mobile • Cloud</div>
                </div>
                <span className="rounded-md bg-brand-600/90 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  Agile Delivery
                </span>
              </div>
            </div>

            {/* Grid of 4 Pillars */}
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`card-surface card-hover reveal reveal-delay-${idx + 1} ${isVisible ? 'is-visible' : ''} p-4`}
                  >
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-400">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="font-display text-sm font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
