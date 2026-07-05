import { services } from '../data/mockData'
import { imageFallbackHandler } from '../lib/siteImages'

const iconPaths: Record<string, string> = {
  leaf: 'M12 2C8 8 4 10 4 14a8 8 0 0016 0c0-4-4-6-8-12z',
  pond: 'M4 14c2-4 6-6 8-6s6 2 8 6M6 18h12',
  forest: 'M12 2l-2 6h4l-2-6zM6 14l3 8h6l3-8H6z',
  jar: 'M9 3h6v2H9V3zM8 7h8v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V7z',
  tools: 'M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.5 2.5-2.8-2.8 2.5-2.5z',
  blueprint: 'M4 4h16v16H4V4zm4 4h8v2H8V8zm0 4h12v2H8v-2z',
  class: 'M12 3L2 8l10 5 10-5-10-5zM4 10v6l8 4 8-4v-6',
  store: 'M3 9l2-4h14l2 4v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9zM9 21V12h6v9',
}

function ServiceIcon({ icon }: { icon: string }) {
  const d = iconPaths[icon] ?? iconPaths.leaf
  return (
    <svg
      className="h-6 w-6 text-ink"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  )
}

export function Services() {
  return (
    <section id="services" className="relative bg-paper py-24 sm:py-32">
      <div className="section-divider mx-auto mb-16 max-w-7xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
            What We Do
          </p>
          <h2 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-muted">
            From nano shrimp cubes to full-room rainforest walls — every project
            is designed, built, and maintained in-house.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-sm border border-border bg-paper transition duration-300 hover:border-ink/20"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  onError={imageFallbackHandler}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-sm border border-paper/20 bg-paper/90 backdrop-blur-sm">
                  <ServiceIcon icon={service.icon} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
