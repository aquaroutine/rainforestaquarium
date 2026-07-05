import { aquaroutineShopUrl } from '../lib/shopUrl'
import { imageFallbackHandler, siteImages } from '../lib/siteImages'

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden pt-24">
      <img
        src={siteImages.hero.background}
        alt=""
        aria-hidden
        onError={imageFallbackHandler}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-6 lg:px-8 lg:pt-24">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-paper/80">
          <span className="h-1.5 w-1.5 rounded-full bg-paper/60" />
          Bengaluru
        </p>

        <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.1] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          Living Water,
          <br />
          <span className="italic text-paper/90">Crafted With Care</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70 sm:text-xl">
          We design planted aquariums, koi ponds,
          rainforest vivariums, and terrariums — turning rooms into calm, green
          sanctuaries across Karnataka.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="btn-primary">
            Explore Services
          </a>
          <a href={aquaroutineShopUrl} className="btn-outline">
            Visit Our Online Store
          </a>
        </div>

        <div className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-paper/15 pt-10">
          {[
            { label: 'Custom Installs', value: '500+' },
            { label: 'Species in Stock', value: '200+' },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display text-2xl font-medium text-paper sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs tracking-[0.15em] uppercase text-paper/50 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
