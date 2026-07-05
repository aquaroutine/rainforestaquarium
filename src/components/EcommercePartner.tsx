import { aquaroutineShopUrl } from '../lib/shopUrl'
import { siteImages } from '../lib/siteImages'

export function EcommercePartner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-light">
        E-commerce Partner
      </p>
      <p className="max-w-xs text-center text-sm leading-relaxed text-muted">
        Free product installation on purchases above{' '}
        <strong className="font-medium text-ink">₹10,000</strong>
      </p>
      <a
        href={aquaroutineShopUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center rounded-sm border border-transparent px-4 py-3 transition duration-300 hover:border-border hover:bg-paper"
        aria-label="Visit Aquaroutine online store"
      >
        <img
          src={siteImages.partners.aquaroutine}
          alt="Aquaroutine"
          className="h-8 w-auto max-w-[180px] object-contain opacity-80 transition duration-300 group-hover:opacity-100 sm:h-9"
        />
      </a>
    </div>
  )
}
