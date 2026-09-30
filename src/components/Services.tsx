import {
  Globe,
  LayoutTemplate,
  AppWindow,
  ShoppingCart,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutTemplate,
  AppWindow,
  ShoppingCart,
  RefreshCw,
  Wrench,
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-pad">
      <div className="container-mw container-px">
        {/* Section header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <div className="badge mx-auto shadow-sm">
            <span className="text-brand-500">◆</span>
            Our Agency Services
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Custom development built for client success
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            From high-conversion web platforms to full-scale SaaS web applications, we design and engineer solutions tailored to your growth goals.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <div
                key={service.title}
                className={`card-surface card-hover group reveal reveal-delay-${idx % 3 + 1} ${isVisible ? 'is-visible' : ''} p-6`}
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/40 dark:text-brand-400 dark:group-hover:bg-brand-600 dark:group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                {/* Examples */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
