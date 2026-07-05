import { stats } from '../data/mockData'
import { imageFallbackHandler, siteImages } from '../lib/siteImages'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper-soft py-24 sm:py-32">
      <img
        src={siteImages.about.background}
        alt=""
        aria-hidden
        onError={imageFallbackHandler}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper-soft/95 via-paper-soft/80 to-paper-soft/35"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              About Us
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
              Dedicated to
              <br />
              <span className="italic">Living Aquascapes</span>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Rainforest Aquarium began as a small studio with a single planted
                display and a belief that well-designed water features belong in
                everyday spaces — not just public aquariums.
              </p>
              <p>
                Today our team designs and maintains installations across
                India: serene office reception tanks, courtyard koi ponds,
                and lush vivarium walls that soften modern architecture.
              </p>
              <p>
                Walk through our gallery to see living layouts in person and
                speak with working aquascapers about trimming, cycling, and
                hardscape composition.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-3xl font-medium text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] uppercase text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src={siteImages.about.founder}
                alt="Aquascaping studio with planted tanks on display"
                loading="lazy"
                onError={imageFallbackHandler}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="glass-panel absolute -bottom-6 -left-4 max-w-xs rounded-sm p-5 sm:-left-8">
              <p className="font-display text-lg font-medium text-ink">
                Ravi Kumar M
              </p>
              <p className="text-sm text-muted">Founder &amp; Lead Aquascaper</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                &ldquo;Every tank tells a story — we just help the plants and
                stone find their voice.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
