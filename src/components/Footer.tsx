import { Mail, MessageCircle, Linkedin, Github, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200/80 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-900/30">
      <div className="container-mw container-px py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md shadow-brand-600/10 ring-1 ring-gray-200/80 dark:bg-gray-900 dark:ring-gray-800">
                <img
                  src="/logo.png"
                  alt="Atlantiz Technology"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {siteConfig.name}
                </span>
                <p className="text-[11px] font-medium text-brand-600 dark:text-brand-400">
                  Digital Product & Application Agency
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {siteConfig.title}. Engineering high-performance web applications, SaaS platforms, and enterprise digital solutions.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-600 dark:hover:text-brand-400">
                <Mail className="h-4 w-4" />
              </a>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-600 dark:hover:text-brand-400">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-600 dark:hover:text-brand-400">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-brand-600 dark:hover:text-brand-400">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-600 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.services.map((service) => (
                <li key={service.title}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-left text-sm text-gray-600 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200/80 pt-6 sm:flex-row dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
