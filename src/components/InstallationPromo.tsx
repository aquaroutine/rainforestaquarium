import { installationPromo } from '../data/mockData'
import { aquaroutineShopUrl } from '../lib/shopUrl'

type InstallationPromoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function InstallationPromo({
  variant = 'light',
  className = '',
}: InstallationPromoProps) {
  const isDark = variant === 'dark'

  return (
    <aside
      className={`rounded-sm border ${
        isDark
          ? 'border-paper/25 bg-paper/5 backdrop-blur-sm'
          : 'border-ink bg-paper shadow-[0_0_0_1px_rgba(0,0,0,1)]'
      } p-6 sm:p-8 ${className}`}
    >
      <p
        className={`text-xs font-medium tracking-[0.2em] uppercase ${
          isDark ? 'text-paper/60' : 'text-muted'
        }`}
      >
        {installationPromo.eyebrow}
      </p>
      <h3
        className={`font-display mt-2 text-xl font-medium sm:text-2xl ${
          isDark ? 'text-paper' : 'text-ink'
        }`}
      >
        {installationPromo.headline}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          isDark ? 'text-paper/70' : 'text-muted'
        }`}
      >
        {installationPromo.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={aquaroutineShopUrl}
          className={isDark ? 'btn-outline text-sm' : 'btn-primary text-sm'}
        >
          {installationPromo.shopLabel}
        </a>
        <a
          href="#contact"
          className={isDark ? 'btn-outline text-sm' : 'btn-outline-dark text-sm'}
        >
          {installationPromo.contactLabel}
        </a>
      </div>
    </aside>
  )
}
