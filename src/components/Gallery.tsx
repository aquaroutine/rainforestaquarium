import { galleryItems } from '../data/mockData'
import { imageFallbackHandler } from '../lib/siteImages'

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-paper-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              Our Work
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
              Gallery
            </h2>
          </div>
          <p className="max-w-md text-muted">
            A glimpse of planted layouts, pond builds, and living walls we have
            crafted for homes, offices, and hospitality spaces.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-sm border border-border ${
                item.span === 'large' ? 'sm:col-span-2 sm:row-span-2 sm:auto-rows-fr' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                onError={imageFallbackHandler}
                className="h-full min-h-[200px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
