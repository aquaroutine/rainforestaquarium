import { useState } from 'react'
import { productCategories, products, type ProductCategory } from '../data/mockData'
import { aquaroutineShopUrl } from '../lib/shopUrl'

export function Shop() {
  const [active, setActive] = useState<ProductCategory>('Fish')
  const items = products[active]

  return (
    <section id="products" className="relative bg-paper py-24 sm:py-32">
      <div className="section-divider mx-auto mb-16 max-w-7xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
            Shop
          </p>
          <h2 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-muted">
            Livestock, plants, gear, and hardscape under one roof — curated for
            serious aquascapers and curious beginners alike.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Product categories"
        >
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition duration-300 ${
                active === category
                  ? 'bg-ink text-paper'
                  : 'border border-border text-muted hover:border-ink/30 hover:text-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="tabpanel"
          aria-label={`${active} products`}
        >
          {items.map((item) => (
            <article
              key={item.name}
              className="group rounded-sm border border-border bg-paper p-5 transition duration-300 hover:border-ink/20"
            >
              <div className="mb-4 flex h-32 items-center justify-center rounded-sm border border-border bg-subtle">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border-strong">
                  <svg
                    className="h-7 w-7 text-muted-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium leading-snug text-ink">
                  {item.name}
                </h3>
                {item.badge ? (
                  <span className="shrink-0 rounded-full border border-ink/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ink">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 font-display text-xl font-medium text-ink">
                {item.price}
              </p>
              <button
                type="button"
                className="mt-4 w-full rounded-sm border border-border py-2 text-xs font-medium uppercase tracking-wide text-muted opacity-0 transition duration-300 group-hover:opacity-100 hover:border-ink hover:text-ink"
              >
                View Details
              </button>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href={aquaroutineShopUrl} className="btn-outline-dark inline-flex items-center gap-2">
            Visit Our Online Store
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
