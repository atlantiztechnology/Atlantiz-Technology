import { Smartphone, Cloud, Sparkles, ShieldCheck, Users2, type LucideIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';

const icons: Record<string, LucideIcon> = {
  'Custom Web & Mobile Apps': Smartphone,
  'Scalable Cloud Architecture': Cloud,
  'Modern UI/UX Product Design': Sparkles,
  'Enterprise Security & Speed': ShieldCheck,
  'Dedicated Engineering Team': Users2,
};

export default function TrustStrip() {
  return (
    <section className="border-y border-gray-200/80 bg-white/70 py-6 backdrop-blur-sm dark:border-gray-800/80 dark:bg-gray-900/50">
      <div className="container-mw container-px">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {siteConfig.trustStrip.map((item) => {
            const Icon = icons[item] ?? Sparkles;
            return (
              <div
                key={item}
                className="group flex items-center gap-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/50 dark:text-brand-400 dark:group-hover:bg-brand-600 dark:group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
