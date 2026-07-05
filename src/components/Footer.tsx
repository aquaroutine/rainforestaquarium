import { navLinks } from '../data/mockData'
import { EcommercePartner } from './EcommercePartner'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-paper-soft py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <Logo variant="dark" />
            <div>
              <p className="font-display text-lg font-medium text-ink">
                Rainforest Aquarium
              </p>
              <p className="text-xs tracking-wide text-muted">Bengaluru</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="section-divider mx-auto my-10 max-w-7xl" />

        <EcommercePartner />

        <div className="section-divider mx-auto my-10 max-w-7xl" />

        <p className="text-center text-sm text-muted-light">
          &copy; {year} Rainforest Aquarium. All rights reserved. Demo storefront UI — no
          live commerce.
        </p>
      </div>
    </footer>
  )
}
