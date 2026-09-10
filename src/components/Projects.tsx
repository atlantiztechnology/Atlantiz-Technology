import { ExternalLink, ArrowRight, Check } from 'lucide-react';
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
          <div className="badge mx-auto">
            <span className="text-brand-500">◆</span>
            Selected Work
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Projects that deliver real business results
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Each project is built from the ground up — designed, developed, and shipped with a clear focus on the business behind it.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-14 flex flex-col gap-8">
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
      className={`card-surface card-hover reveal reveal-delay-${index % 2 + 1} ${visible ? 'is-visible' : ''} overflow-hidden`}
    >
      <div className={`grid lg:grid-cols-2 ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
        {/* Mockup */}
        <div className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-8 sm:p-10 lg:p-12 [direction:ltr]`}>
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <ProjectMockup type={project.mockupType} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 [direction:ltr]">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-2xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Features */}
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tech */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn-primary group">
              Live Demo
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="btn-secondary group">
              View Details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMockup({ type }: { type: string }) {
  const base = "rounded-xl border border-white/30 bg-white shadow-2xl shadow-black/20 overflow-hidden dark:bg-gray-900";

  return (
    <div className={base}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 border-b border-gray-200/80 px-3 py-2.5 dark:border-gray-800">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-2 flex-1">
          <div className="h-3.5 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>

      {/* Content per type */}
      <div className="p-4">
        {type === 'dashboard' && <DashboardMockup />}
        {type === 'ecommerce' && <EcommerceMockup />}
        {type === 'crm' && <CrmMockup />}
        {type === 'landing' && <LandingMockup />}
        {type === 'portal' && <PortalMockup />}
        {type === 'corporate' && <CorporateMockup />}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {['12.4k', '₹84k', '342'].map((v, i) => (
          <div key={i} className="rounded-lg border border-gray-100 bg-gray-50 p-2.5 dark:border-gray-800 dark:bg-gray-800/50">
            <div className="text-sm font-bold text-gray-900 dark:text-white">{v}</div>
            <div className="h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        ))}
      </div>
      <div className="flex h-28 items-end gap-1.5 rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
        {[40, 55, 35, 70, 50, 80, 60, 90, 65, 85, 75, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-400" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg border border-gray-100 p-2.5 dark:border-gray-800">
          <div className="h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mt-1.5 h-2 w-10 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
        <div className="flex-1 rounded-lg border border-gray-100 p-2.5 dark:border-gray-800">
          <div className="h-2 w-12 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mt-1.5 h-2 w-8 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500 text-[8px] text-white">🛒</div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-gray-100 p-2 dark:border-gray-800">
            <div className="mb-2 h-16 rounded-md bg-gradient-to-br from-accent-200 to-accent-300 dark:from-accent-800 dark:to-accent-900" />
            <div className="h-1.5 w-12 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-1 h-1.5 w-8 rounded bg-gray-100 dark:bg-gray-800" />
            <div className="mt-2 h-4 w-14 rounded-md bg-brand-500" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-5 w-20 rounded-md bg-brand-500" />
      </div>
    </div>
  );
}

function CrmMockup() {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {['Pipeline', 'Contacts', 'Reports'].map((t, i) => (
          <div key={t} className={`rounded-md px-2.5 py-1.5 text-[10px] font-medium ${i === 0 ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}>
            {t}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['New', 'In Touch', 'Won'].map((stage, si) => (
          <div key={stage} className="rounded-lg border border-gray-100 bg-gray-50 p-2 dark:border-gray-800 dark:bg-gray-800/50">
            <div className="mb-2 text-[9px] font-semibold text-gray-500 dark:text-gray-400">{stage}</div>
            {[0, 1].map((j) => (
              <div key={j} className="mb-1.5 rounded-md border border-gray-100 bg-white p-1.5 dark:border-gray-800 dark:bg-gray-900">
                <div className="h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="mt-1 h-1.5 w-6 rounded bg-gray-100 dark:bg-gray-800" />
                <div className="mt-1.5 flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-brand-400" />
                  <div className="h-1.5 w-8 rounded bg-gray-100 dark:bg-gray-800" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function LandingMockup() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-4">
        <div className="h-2.5 w-28 rounded bg-white/70" />
        <div className="mt-2 h-2 w-20 rounded bg-white/50" />
        <div className="mt-3 inline-flex h-6 w-24 items-center justify-center rounded-md bg-white text-[9px] font-bold text-brand-600">
          Get Started
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-gray-100 p-2.5 dark:border-gray-800">
            <div className="mb-1.5 h-3 w-3 rounded-full bg-brand-500" />
            <div className="h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-1 h-1.5 w-7 rounded bg-gray-100 dark:bg-gray-800" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-5 w-16 rounded-md bg-brand-500" />
      </div>
    </div>
  );
}

function PortalMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="h-2 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="flex gap-1">
          <div className="h-5 w-12 rounded-md bg-brand-500" />
          <div className="h-5 w-10 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
      <div className="rounded-lg border border-gray-100 p-3 dark:border-gray-800">
        <div className="mb-2 h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent-500" />
              <div className="h-1.5 flex-1 rounded bg-gray-100 dark:bg-gray-800" />
              <div className="h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg border border-gray-100 p-2.5 dark:border-gray-800">
          <div className="h-1.5 w-12 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mt-1 h-1.5 w-8 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
        <div className="flex-1 rounded-lg border border-gray-100 p-2.5 dark:border-gray-800">
          <div className="h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mt-1 h-1.5 w-6 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}

function CorporateMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-brand-600" />
          <div className="h-2 w-12 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-1.5 w-8 rounded bg-gray-200 dark:bg-gray-700" />
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 p-5 dark:from-gray-800 dark:to-gray-900">
        <div className="h-3 w-32 rounded bg-gray-300 dark:bg-gray-600" />
        <div className="mt-2 h-2 w-24 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mt-3 inline-flex h-6 w-24 items-center justify-center rounded-md bg-brand-600 text-[9px] font-bold text-white">
          Get in Touch
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-gray-100 p-2.5 dark:border-gray-800">
            <div className="mb-1.5 h-3 w-3 rounded bg-brand-500" />
            <div className="h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-1 h-1.5 w-7 rounded bg-gray-100 dark:bg-gray-800" />
          </div>
        ))}
      </div>
    </div>
  );
}
