import { siteConfig } from '@/config/site';

const icons: Record<string, string> = {
  'Modern Design': '✦',
  'Responsive Development': '⌘',
  'Fast Performance': '⚡',
  'Business-Focused': '◆',
  'Direct Communication': '✉',
};

export default function TrustStrip() {
  return (
    <section className="border-y border-gray-200/60 bg-gray-50/50 py-6 dark:border-gray-800/60 dark:bg-gray-900/30">
      <div className="container-mw container-px">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {siteConfig.trustStrip.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              <span className="text-brand-500">{icons[item] ?? '◆'}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
