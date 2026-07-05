import {
  contact,
  maintenanceIncluded,
  maintenancePackages,
  maintenanceTankTypes,
} from '../data/mockData'
import { imageFallbackHandler, siteImages } from '../lib/siteImages'
import { InstallationPromo } from './InstallationPromo'
import { aquaroutineShopUrl } from '../lib/shopUrl'

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-ink"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function AnnualMaintenance() {
  return (
    <section id="maintenance" className="relative bg-paper-soft py-24 sm:py-32">
      <div className="section-divider mx-auto mb-16 max-w-7xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              Year-Round Care
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
              Annual Maintenance
              <br />
              <span className="italic">Service</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              A planted tank or pond is a living composition — it needs consistent
              care to stay clear, balanced, and beautiful. For over{' '}
              <strong className="font-medium text-ink">16 years</strong>, our team
              has maintained aquariums across India — from home nano cubes and
              cichlid displays to corporate reception features and outdoor koi
              ponds.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Every programme is tailored to your tank type, livestock, and visit
              frequency. The same experienced aquascapers who design your layout
              return for every scheduled service — no outsourced crews.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <div className="flex items-center gap-6 text-sm text-muted">
                <span>
                  <strong className="font-medium text-ink">16+</strong> years
                  experience
                </span>
                <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
                <span>
                  <strong className="font-medium text-ink">In-house</strong> team
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-border">
            <img
              src={siteImages.services.maintenance}
              alt="Aquascaper performing scheduled maintenance on a planted aquarium"
              loading="lazy"
              onError={imageFallbackHandler}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="glass-panel absolute bottom-4 left-4 right-4 rounded-sm p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="font-display text-lg font-medium text-ink">
                Experienced team
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Dedicated aquascapers with over 16 years of hands-on tank care — the
                same people, every visit.
              </p>
            </div>
          </div>
        </div>

        <InstallationPromo className="mt-16" />

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              Tank Types
            </p>
            <h3 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
              What We Maintain
            </h3>
            <p className="mt-4 text-muted">
              Whether your setup is densely planted, stocked with cichlids, or
              running a clean non-planted community tank — our maintenance
              programmes are built around how your system actually runs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {maintenanceTankTypes.map((tank) => (
              <article
                key={tank.id}
                className="flex flex-col rounded-sm border border-border bg-paper p-6 transition duration-300 hover:border-ink/20"
              >
                <div>
                  <h4 className="font-display text-2xl font-medium text-ink">
                    {tank.name}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{tank.tagline}</p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tank.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-muted">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              What&apos;s Included
            </p>
            <h3 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
              Comprehensive Care, Every Visit
            </h3>
            <p className="mt-4 text-muted">
              Each service call follows a structured checklist so nothing critical
              is missed — from water chemistry to equipment reliability.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {maintenanceIncluded.map((item) => (
              <div
                key={item.title}
                className="glass-panel rounded-sm p-5 transition duration-300 hover:border-ink/15"
              >
                <h4 className="font-display text-lg font-medium text-ink">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
              Packages
            </p>
            <h3 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
              With or Without Consumables
            </h3>
            <p className="mt-4 text-muted">
              Choose the package that fits how you prefer to run your tank. Both
              include the same expert on-site service — the difference is whether
              we supply consumables as part of your programme.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {maintenancePackages.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative flex flex-col rounded-sm border bg-paper p-6 transition duration-300 ${
                  pkg.highlight
                    ? 'border-ink shadow-[0_0_0_1px_rgba(0,0,0,1)]'
                    : 'border-border hover:border-ink/20'
                }`}
              >
                {pkg.highlight ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-ink px-3 py-0.5 text-xs font-medium tracking-wide text-paper">
                    Most Flexible
                  </span>
                ) : null}

                <div>
                  <h4 className="font-display text-2xl font-medium text-ink">
                    {pkg.name}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{pkg.tagline}</p>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm text-muted">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block text-center ${
                    pkg.highlight ? 'btn-primary' : 'btn-outline-dark'
                  }`}
                >
                  Contact Us
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-sm border border-ink bg-ink p-8 text-center text-paper sm:p-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-paper/70">
            Online Store Benefit
          </p>
          <h3 className="font-display mt-3 text-2xl font-medium sm:text-3xl">
            Free Product Installation
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-paper/80">
            Purchase equipment or supplies above{' '}
            <strong className="font-medium text-paper">₹10,000</strong> from our
            online store and we will install it for you at no extra charge.
          </p>
          <a
            href={aquaroutineShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-6 inline-block border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink"
          >
            Visit Our Online Store
          </a>
        </div>

        <div className="mt-16 rounded-sm border border-border bg-paper p-8 text-center sm:p-10">
          <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
            Ready to protect your investment?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Share your tank type, dimensions, photos, and location — our
            experienced team will recommend the right package and schedule a
            first assessment within two business days.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
            <a
              href={`mailto:${contact.email}?subject=Annual%20Maintenance%20Enquiry`}
              className="btn-outline-dark"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
