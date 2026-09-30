import { Shield, X, CheckCircle2 } from 'lucide-react';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <>
      {/* Backdrop (mobile only) */}
      <div className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-[2px] sm:hidden" />

      {/* Banner — always white card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent"
        className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 animate-slide-up opacity-0 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0"
        style={{ animationFillMode: 'forwards', animationDelay: '0s' }}
      >
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-300/40">
          {/* Top gradient accent line */}
          <div className="h-0.5 w-full bg-gradient-to-r from-brand-500 via-accent-500 to-purple-500" />

          <div className="p-5">
            {/* Header row */}
            <div className="mb-3 flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <Shield className="h-4 w-4 text-brand-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 leading-snug">
                  We value your privacy
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  We collect anonymous visit data (device type, timezone, page path) to understand
                  how visitors find us and improve our site. No personal information is shared.
                </p>
              </div>
              {/* Dismiss quietly (acts as decline) */}
              <button
                onClick={onDecline}
                aria-label="Decline and close"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={onAccept}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-lg active:scale-[0.98]"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Accept &amp; Continue
              </button>
              <button
                onClick={onDecline}
                className="rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 active:scale-[0.98]"
              >
                Decline
              </button>
            </div>

            {/* Fine print */}
            <p className="mt-3 text-[10px] text-gray-400 leading-relaxed">
              Your choice is saved locally. You can change it any time by clearing your browser
              data. We never sell your data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
