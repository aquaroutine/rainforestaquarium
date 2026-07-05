import { contact } from '../data/mockData'

export function Contact() {
  return (
    <section id="contact" className="relative bg-paper py-24 sm:py-32">
      <div className="section-divider mx-auto mb-16 max-w-7xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
            Get In Touch
          </p>
          <h2 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
            Visit Us Today
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title={`Google Map showing Rainforest Aquarium at ${contact.address}`}
                src={contact.mapEmbedUrl}
                className="h-72 w-full border-0 sm:h-96"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={contact.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-muted"
            >
              Open in Google Maps
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="glass-panel rounded-sm p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm border border-border">
                <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-medium text-ink">Location</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{contact.address}</p>
              <p className="mt-3 text-xs text-muted-light">{contact.hours}</p>
            </div>

            <div className="glass-panel rounded-sm p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm border border-border">
                <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-medium text-ink">Phone</h3>
              <div className="mt-2 flex flex-col gap-1">
                {contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-sm text-ink transition hover:text-muted"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-sm p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm border border-border">
                <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-medium text-ink">Email</h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-sm text-ink transition hover:text-muted"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
