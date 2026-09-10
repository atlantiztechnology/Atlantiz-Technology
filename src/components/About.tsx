import { Check, Code2, Palette, Zap, Users } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { icon: Code2, label: 'Clean, maintainable code', value: 'Built to last' },
  { icon: Palette, label: 'Design tailored to your brand', value: 'Custom design' },
  { icon: Zap, label: 'Optimized for speed and SEO', value: 'Fast by default' },
  { icon: Users, label: 'Work directly with me', value: 'Direct communication' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container-mw container-px">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
          {/* Left: bio */}
          <div>
            <div className="badge">
              <span className="text-brand-500">◆</span>
              About
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {siteConfig.about.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {siteConfig.about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <ul className="mt-6 space-y-3">
              {siteConfig.about.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-950/50">
                    <Check className="h-3 w-3 text-brand-600 dark:text-brand-400" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`card-surface card-hover reveal reveal-delay-${idx + 1} ${isVisible ? 'is-visible' : ''} p-6`}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-base font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
