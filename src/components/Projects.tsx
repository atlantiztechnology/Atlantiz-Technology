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
            Concept Projects
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
        {type === 'restaurant' && <RestaurantMockup />}
        {type === 'fitness' && <FitnessMockup />}
        {type === 'saas-landing' && <SaasLandingMockup />}
      </div>
    </div>
  );
}

function RestaurantMockup() {
  return (
    <div className="space-y-3">
      {/* Hero with restaurant name */}
      <div className="rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 p-5">
        <div className="h-2.5 w-28 rounded bg-white/80" />
        <div className="mt-2 h-2 w-20 rounded bg-white/50" />
        <div className="mt-3 flex items-center gap-2">
          <div className="inline-flex h-6 w-20 items-center justify-center rounded-md bg-white text-[9px] font-bold text-accent-700">
            Reserve a Table
          </div>
          <div className="inline-flex h-6 w-16 items-center justify-center rounded-md bg-green-500 text-[9px] font-bold text-white">
            WhatsApp
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="space-y-2">
        {[
          { name: 'Margherita Pizza', price: '₹320', w: 'w-24' },
          { name: 'Pasta Carbonara', price: '₹280', w: 'w-20' },
          { name: 'Caesar Salad', price: '₹220', w: 'w-16' },
        ].map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 dark:border-gray-800 dark:bg-gray-800/50">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-accent-300 to-accent-400 dark:from-accent-700 dark:to-accent-800" />
              <div>
                <div className="h-1.5 w-20 rounded bg-gray-300 dark:bg-gray-600" />
                <div className="mt-1 h-1.5 w-12 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
            <div className="text-[10px] font-bold text-accent-600 dark:text-accent-400">{item.price}</div>
          </div>
        ))}
      </div>

      {/* Location bar */}
      <div className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="h-3 w-3 rounded-full bg-accent-500" />
        <div className="h-1.5 flex-1 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-5 w-14 rounded-md bg-accent-500" />
      </div>
    </div>
  );
}

function FitnessMockup() {
  return (
    <div className="space-y-3">
      {/* Hero */}
      <div className="rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 p-5">
        <div className="h-3 w-32 rounded bg-white/80" />
        <div className="mt-2 h-2 w-24 rounded bg-white/50" />
        <div className="mt-3 inline-flex h-6 w-24 items-center justify-center rounded-md bg-white text-[9px] font-bold text-brand-700">
          Join Now
        </div>
      </div>

      {/* Program cards */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Strength', color: 'from-brand-400 to-brand-500' },
          { label: 'Cardio', color: 'from-accent-400 to-accent-500' },
        ].map((prog) => (
          <div key={prog.label} className="rounded-lg border border-gray-100 p-3 dark:border-gray-800">
            <div className={`mb-2 h-12 rounded-md bg-gradient-to-br ${prog.color}`} />
            <div className="h-1.5 w-16 rounded bg-gray-300 dark:bg-gray-600" />
            <div className="mt-1 h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        ))}
      </div>

      {/* Membership plans */}
      <div className="grid grid-cols-3 gap-2">
        {['Basic', 'Pro', 'Elite'].map((plan, i) => (
          <div key={plan} className={`rounded-lg border p-2.5 text-center ${i === 1 ? 'border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950/30' : 'border-gray-100 dark:border-gray-800'}`}>
            <div className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{plan}</div>
            <div className="mt-1.5 h-2 w-12 mx-auto rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-2 h-4 w-16 mx-auto rounded-md bg-brand-500" />
          </div>
        ))}
      </div>

      {/* Schedule bar */}
      <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="h-2 w-16 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-5 w-18 rounded-md bg-brand-500" />
      </div>
    </div>
  );
}

function SaasLandingMockup() {
  return (
    <div className="space-y-3">
      {/* Hero with CTA */}
      <div className="rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-5">
        <div className="h-3 w-32 rounded bg-white/80" />
        <div className="mt-2 h-2 w-24 rounded bg-white/50" />
        <div className="mt-3 flex items-center gap-2">
          <div className="inline-flex h-6 w-24 items-center justify-center rounded-md bg-white text-[9px] font-bold text-brand-600">
            Start Free Trial
          </div>
          <div className="inline-flex h-6 w-16 items-center justify-center rounded-md bg-white/30 text-[9px] font-medium text-white">
            Book Demo
          </div>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
        <div className="mb-2 flex gap-2">
          {['Overview', 'Tasks', 'Team'].map((tab, i) => (
            <div key={tab} className={`rounded-md px-2 py-1 text-[9px] font-medium ${i === 0 ? 'bg-brand-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'}`}>
              {tab}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-gray-100 bg-white p-2 dark:border-gray-800 dark:bg-gray-900">
              <div className="h-1.5 w-10 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="mt-1.5 h-2 w-8 rounded bg-brand-400" />
            </div>
          ))}
        </div>
        <div className="mt-2 flex h-12 items-end gap-1 rounded-md border border-gray-100 bg-white p-2 dark:border-gray-800 dark:bg-gray-900">
          {[50, 70, 45, 85, 60, 90, 55].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-400" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      {/* Pricing toggle */}
      <div className="flex items-center justify-center gap-2">
        <div className="h-1.5 w-10 rounded bg-gray-300 dark:bg-gray-600" />
        <div className="flex h-5 w-10 items-center rounded-full bg-brand-500 px-0.5">
          <div className="ml-auto h-4 w-4 rounded-full bg-white" />
        </div>
        <div className="h-1.5 w-10 rounded bg-gray-300 dark:bg-gray-600" />
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-3 gap-2">
        {['Free', 'Pro', 'Team'].map((plan, i) => (
          <div key={plan} className={`rounded-lg border p-2.5 text-center ${i === 1 ? 'border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950/30' : 'border-gray-100 dark:border-gray-800'}`}>
            <div className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{plan}</div>
            <div className="mt-1.5 h-2 w-12 mx-auto rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mt-2 h-4 w-14 mx-auto rounded-md bg-brand-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
