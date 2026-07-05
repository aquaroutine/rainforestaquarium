import { googleReviews } from '../data/mockData'
import { StarRating } from './StarRating'

function GoogleMapsIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      />
      <circle cx="12" cy="9" r="2.5" fill="#fff" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

export function Reviews() {
  const { rating, totalReviews, readUrl, writeUrl, highlights } = googleReviews

  return (
    <section id="reviews" className="relative bg-charcoal py-24 sm:py-32">
      <div className="section-divider-light mx-auto mb-16 max-w-7xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-paper/50">
              Google Reviews
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium text-paper sm:text-5xl">
              Trusted by
              <br />
              <span className="italic">Local Aquarists</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-paper/70">
              Our Google Maps rating reflects visits from hobbyists, planted-tank
              enthusiasts, and families across Bengaluru. Read verified feedback or
              share your own experience after a visit.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <p className="font-display text-5xl font-medium tabular-nums text-paper">
                  {rating.toFixed(1)}
                </p>
                <div>
                  <StarRating rating={rating} size="lg" className="text-paper" />
                  <p className="mt-1.5 text-sm text-paper/60">
                    {totalReviews.toLocaleString('en-IN')} reviews on Google Maps
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={readUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 bg-paper text-ink hover:bg-paper/90"
              >
                <GoogleMapsIcon />
                Read all reviews on Google
              </a>
              <a
                href={writeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-8 py-3.5 text-sm font-medium tracking-wide text-paper transition hover:border-paper/60 hover:bg-paper/10"
              >
                Leave a review
                <ExternalLinkIcon />
              </a>
            </div>
          </div>

          {highlights.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((review) => (
                <article
                  key={review.id}
                  className="glass-panel-dark flex flex-col rounded-sm p-6"
                >
                  <StarRating rating={review.rating} size="sm" className="text-paper" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-paper/80">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <footer className="mt-5 flex items-end justify-between gap-3 border-t border-paper/10 pt-4">
                    <div>
                      <p className="text-sm font-medium text-paper">{review.author}</p>
                      <p className="text-xs text-paper/50">{review.date}</p>
                    </div>
                    <a
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-paper/60 transition hover:text-paper"
                    >
                      View on Google
                      <ExternalLinkIcon />
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={readUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel-dark group rounded-sm p-6 transition hover:border-paper/25 sm:col-span-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <GoogleMapsIcon />
                      <p className="text-sm font-medium tracking-wide text-paper">
                        Verified Google Reviews
                      </p>
                    </div>
                    <p className="mt-4 font-display text-2xl font-medium text-paper">
                      {totalReviews}+ customer reviews
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">
                      Full review text, photos, and recent ratings live on our Google
                      Business Profile — updated by real visitors.
                    </p>
                  </div>
                  <StarRating rating={rating} size="md" className="shrink-0 text-paper" />
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition group-hover:text-paper">
                  Open reviews on Google Maps
                  <ExternalLinkIcon />
                </p>
              </a>

              <a
                href={writeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel-dark group rounded-sm p-6 transition hover:border-paper/25"
              >
                <p className="text-sm font-medium tracking-wide text-paper">
                  Visited our showroom?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  Help other aquarists discover Rainforest Aquarium with a quick
                  Google review.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition group-hover:text-paper">
                  Write a review
                  <ExternalLinkIcon />
                </p>
              </a>

              <a
                href={googleReviews.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel-dark group rounded-sm p-6 transition hover:border-paper/25"
              >
                <p className="text-sm font-medium tracking-wide text-paper">
                  Plan your visit
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  Get directions to our Bannerughatta studio near Rajarajeshwari
                  Temple.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition group-hover:text-paper">
                  Open in Google Maps
                  <ExternalLinkIcon />
                </p>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
