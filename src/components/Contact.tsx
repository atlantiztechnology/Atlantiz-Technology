import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { supabase } from '@/lib/supabase';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

const projectTypes = [
  'Business Website',
  'Landing Page',
  'Web Application',
  'E-Commerce Store',
  'Website Redesign',
  'Maintenance',
  'Not sure yet',
];

const budgetRanges = [
  'Under ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Let us discuss',
];

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: siteConfig.contact.linkedin,
    href: siteConfig.contact.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: siteConfig.contact.github,
    href: siteConfig.contact.github,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const projectType = formData.get('projectType') as string;
    const budget = formData.get('budget') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    if (supabase) {
      const { error } = await supabase.from('contact_submissions').insert({
        name,
        email,
        project_type: projectType || null,
        budget: budget || null,
        message,
      });

      if (error) {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again or email us directly.');
        return;
      }
    } else {
      // Supabase is not configured yet in local/preview environment: simulate smooth response
      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    setStatus('success');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-mw container-px">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <div className="badge mx-auto shadow-sm">
            <span className="text-brand-500">◆</span>
            Start a Consultation
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Let us build your next application together
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Tell us about your project vision, timeline, and requirements. Our engineering team will get back to you within 24 hours with actionable next steps.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-surface p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/40">
                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                    Message received!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. Our team will review your requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name / Company <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name or company"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Work Email <span className="text-brand-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Project Scope / Category
                      </label>
                      <select id="projectType" name="projectType" className="input-field">
                        <option value="">Select scope</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Budget Range
                      </label>
                      <select id="budget" name="budget" className="input-field">
                        <option value="">Select a range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Project Details & Goals <span className="text-brand-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your application requirements, desired features, goals, and target launch timeline..."
                      className="input-field resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact links */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card-surface card-hover group flex items-center gap-4 p-5"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/40 dark:text-brand-400 dark:group-hover:bg-brand-600 dark:group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {link.label}
                      </div>
                      <div className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {link.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
