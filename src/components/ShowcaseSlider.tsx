import { useCallback, useEffect, useRef, useState } from 'react'
import { imageFallbackHandler, siteImages } from '../lib/siteImages'

const showcaseSlides = [
  {
    src: siteImages.gallery[0],
    alt: 'Planted aquarium with emerald green aquascape and natural stone hardscape',
  },
  {
    src: siteImages.gallery[1],
    alt: 'Terrarium with layered moss, ferns, and miniature waterfall feature',
  },
  {
    src: siteImages.gallery[2],
    alt: 'Koi pond with clear water, stone edging, and surrounding greenery',
  },
  {
    src: siteImages.gallery[3],
    alt: 'Rainforest vivarium with tropical plants and misting atmosphere',
  },
  {
    src: siteImages.gallery[13],
    alt: 'Custom aquascape installation with dramatic lighting and layered planting',
  },
] as const

const AUTO_ADVANCE_MS = 6000
const SWIPE_THRESHOLD_PX = 40

export function ShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const regionRef = useRef<HTMLDivElement>(null)
  const pointerStartX = useRef<number | null>(null)
  const didSwipe = useRef(false)

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + showcaseSlides.length) % showcaseSlides.length)
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % showcaseSlides.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length,
    )
  }, [])

  useEffect(() => {
    if (isPaused) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS)
    return () => window.clearInterval(timer)
  }, [goNext, isPaused])

  useEffect(() => {
    const region = regionRef.current
    if (!region) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      } else if (event.key === 'Home') {
        event.preventDefault()
        goTo(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        goTo(showcaseSlides.length - 1)
      }
    }

    region.addEventListener('keydown', onKeyDown)
    return () => region.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev, goTo])

  const handlePointerDown = (clientX: number) => {
    pointerStartX.current = clientX
    didSwipe.current = false
  }

  const handlePointerEnd = (clientX: number) => {
    const startX = pointerStartX.current
    pointerStartX.current = null
    if (startX === null) return

    const delta = clientX - startX
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return

    didSwipe.current = true
    if (delta < 0) goNext()
    else goPrev()
  }

  const handleSlideTap = (side: 'prev' | 'next') => {
    if (didSwipe.current) {
      didSwipe.current = false
      return
    }
    if (side === 'prev') goPrev()
    else goNext()
  }

  return (
    <section
      aria-label="Featured project showcase"
      className="relative bg-paper py-24 sm:py-32"
    >
      <div className="section-divider mx-auto mb-16 max-w-7xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted">
            Featured Work
          </p>
          <h2 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">
            Craft in Motion
          </h2>
        </div>

        <div
          ref={regionRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Gallery showcase"
          tabIndex={0}
          className="relative mt-12 w-full outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false)
            }
          }}
        >
          <div
            className="relative overflow-hidden rounded-sm border border-border bg-subtle touch-pan-y"
            onTouchStart={(event) =>
              handlePointerDown(event.changedTouches[0]?.clientX ?? 0)
            }
            onTouchEnd={(event) =>
              handlePointerEnd(event.changedTouches[0]?.clientX ?? 0)
            }
            onPointerDown={(event) => {
              if (event.pointerType === 'mouse') handlePointerDown(event.clientX)
            }}
            onPointerUp={(event) => {
              if (event.pointerType === 'mouse') handlePointerEnd(event.clientX)
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              aria-live="polite"
            >
              {showcaseSlides.map((slide, index) => (
                <figure
                  key={slide.src}
                  className="relative min-w-full shrink-0"
                  aria-hidden={index !== activeIndex}
                >
                  <div className="relative aspect-[5/2] w-full overflow-hidden bg-subtle">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      draggable={false}
                      onError={imageFallbackHandler}
                      className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
                    />
                  </div>
                </figure>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => handleSlideTap('prev')}
              className="absolute inset-y-0 left-0 z-10 w-1/2 cursor-w-resize border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink/30"
            />
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => handleSlideTap('next')}
              className="absolute inset-y-0 right-0 z-10 w-1/2 cursor-e-resize border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink/30"
            />
          </div>

          <div
            className="mt-6 flex items-center justify-center gap-1"
            role="tablist"
            aria-label="Choose slide"
          >
            {showcaseSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to slide ${index + 1} of ${showcaseSlides.length}`}
                onClick={() => goTo(index)}
                className="flex h-11 min-w-11 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                <span
                  aria-hidden
                  className={`block rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'h-2 w-8 bg-ink'
                      : 'h-2 w-2 bg-border hover:bg-muted-light'
                  }`}
                />
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-xs tracking-wide text-muted-light">
            {activeIndex + 1} / {showcaseSlides.length}
          </p>
        </div>
      </div>
    </section>
  )
}
