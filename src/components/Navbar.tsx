import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['home', 'services', 'projects', 'process', 'about', 'contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200/80 bg-white/80 backdrop-blur-lg dark:border-gray-800/80 dark:bg-gray-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-mw container-px flex h-16 items-center justify-between lg:h-18">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-md shadow-brand-600/10 ring-1 ring-gray-200/80 transition-transform duration-300 group-hover:scale-105 dark:bg-gray-900 dark:ring-gray-800">
            <img
              src="/logo.png"
              alt="Atlantiz Technology"
              className="h-full w-full object-contain"
              onError={(e) => {
                // Fallback in case image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-gray-900 dark:text-white sm:text-lg">
              {siteConfig.name}
            </span>
            <span className="hidden text-[10px] font-medium tracking-wider uppercase text-brand-600 dark:text-brand-400 sm:block">
              Software & App Agency
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-500 transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {theme === 'light' ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
          </button>

          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 active:scale-[0.98] sm:inline-flex lg:px-5"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gray-200/80 bg-white/95 backdrop-blur-lg transition-all duration-300 dark:border-gray-800 dark:bg-gray-950/95 lg:hidden ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-mw container-px flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                activeId === link.href.slice(1)
                  ? 'bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-400'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-700 active:scale-[0.98]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
