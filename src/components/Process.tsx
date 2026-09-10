import { siteConfig } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Process() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="process" className="section-pad">
      <div className="container-mw container-px">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <div className="badge mx-auto">
            <span className="text-brand-500">◆</span>
            How It Works
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            A clear, step-by-step process
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            From first conversation to launch and beyond, here is how we will work together.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.process.map((step, idx) => (
            <div
              key={step.step}
              className={`reveal reveal-delay-${idx + 1} ${isVisible ? 'is-visible' : ''} relative`}
            >
              {/* Connector line */}
              {idx < siteConfig.process.length - 1 && (
                <div className="absolute left-full top-12 hidden h-px w-full -translate-x-3 lg:block">
                  <div className="h-px w-full bg-gradient-to-r from-brand-300 to-transparent dark:from-brand-700" />
                </div>
              )}

              <div className="card-surface card-hover h-full p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 font-display text-base font-bold text-white shadow-lg shadow-brand-600/20">
                  {step.step}
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
