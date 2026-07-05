import { useEffect, useState } from 'react'
import { navLinks, contact } from '../data/mockData'
import { Logo } from './Logo'

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const onHero = !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-paper/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <Logo variant={onHero && !menuOpen ? 'light' : 'dark'} />
          <div className="hidden sm:block">
            <p
              className={`font-display text-lg font-medium leading-tight transition-colors ${
                onHero ? 'text-paper group-hover:text-paper/80' : 'text-ink group-hover:text-muted'
              }`}
            >
              Rainforest Aquarium
            </p>
            <p
              className={`text-xs tracking-[0.2em] uppercase ${
                onHero ? 'text-paper/60' : 'text-muted'
              }`}
            >
              Living Art &amp; Aquascaping
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                onHero
                  ? 'text-paper/80 hover:text-paper'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, '')}`}
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition sm:inline-flex ${
              onHero
                ? 'border border-paper/30 text-paper hover:bg-paper/10'
                : 'border border-ink bg-ink text-paper hover:bg-charcoal-soft'
            }`}
          >
            Call Now
          </a>
          <button
            type="button"
            className={`rounded-lg p-2 transition lg:hidden ${
              onHero
                ? 'text-paper/80 ring-1 ring-paper/20 hover:bg-paper/10'
                : 'text-ink ring-1 ring-border hover:bg-subtle'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-ink transition hover:bg-subtle"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${contact.phones[0].replace(/\s/g, '')}`}
              className="mt-2 rounded-full border border-ink bg-ink px-4 py-3 text-center text-sm font-medium text-paper"
            >
              Call Now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
