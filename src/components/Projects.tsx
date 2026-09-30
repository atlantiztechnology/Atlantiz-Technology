import { ExternalLink, ArrowRight, Check, Sparkles, MousePointerClick } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Project = (typeof siteConfig.projects)[number];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-pad bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container-mw container-px">
        {/* Section header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <div className="badge mx-auto shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
            Our Work &amp; Concept Projects
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Custom applications crafted for growing businesses
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Explore a selection of concept and demo apps showcasing our capabilities — from real estate platforms to decor studios and fitness applications.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-14 flex flex-col gap-10">
          {siteConfig.projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} visible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, visible }: { project: Project; index: number; visible: boolean }) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`card-surface card-hover reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''} overflow-hidden border border-gray-200/80 shadow-lg dark:border-gray-800`}
    >
      <div className={`grid items-center lg:grid-cols-12 ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
        {/* Mockup / Image Side (7 cols on lg) */}
        <div className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-6 sm:p-8 lg:col-span-7 lg:p-10 [direction:ltr]`}>
          <div className="absolute inset-0 bg-grid opacity-25" />

          {/* Browser Container — clicking the whole thing opens the demo link */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/browser relative block overflow-hidden rounded-xl border border-white/20 bg-gray-950/90 shadow-2xl shadow-black/40 backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/40"
              title={`View ${project.name} demo`}
            >
              <BrowserChrome project={project} />
            </a>
          ) : (
            <div className="relative overflow-hidden rounded-xl border border-white/20 bg-gray-950/90 shadow-2xl shadow-black/40 backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]">
              <BrowserChrome project={project} />
            </div>
          )}
        </div>

        {/* Content Side (5 cols on lg) */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10 [direction:ltr]">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
              {project.category}
            </span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            {project.name}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.description}
          </p>

          {/* Key Capabilities */}
          <div className="mt-5 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Key Capabilities:
            </span>
            <ul className="grid gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-gray-300">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200/50 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700/50"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-xs sm:text-sm"
              >
                View Demo
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : null}
            <a
              href="#contact"
              className={project.liveUrl ? 'btn-secondary group text-xs sm:text-sm' : 'btn-primary group text-xs sm:text-sm'}
            >
              Build Similar App
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Shared browser chrome + screenshot used inside both the clickable <a> and plain <div> wrappers */
function BrowserChrome({ project }: { project: Project }) {
  return (
    <>
      {/* Browser top bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-gray-900/80 px-3.5 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-gray-800/80 px-3 py-0.5 text-[10px] text-gray-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{project.name.toLowerCase().replace(/\s+/g, '')}.app</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/20 px-2 py-0.5 text-[9px] font-bold text-brand-300 ring-1 ring-inset ring-brand-500/30">
          {project.badge}
        </span>
      </div>

      {/* Screenshot with click-to-open overlay */}
      <div className="group/img relative aspect-[16/10] w-full overflow-hidden bg-gray-950">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/browser:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60" />

        {/* Hover overlay — only shows when the card is a link */}
        {project.liveUrl && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-950/0 opacity-0 transition-all duration-300 group-hover/browser:bg-gray-950/50 group-hover/browser:opacity-100">
            <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-gray-900 shadow-lg">
              <MousePointerClick className="h-4 w-4 text-brand-600" />
              Click to View Demo
            </div>
          </div>
        )}
      </div>
    </>
  );
}
