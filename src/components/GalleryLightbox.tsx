import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { imageFallbackHandler } from '../lib/siteImages'

type GalleryLightboxItem = {
  id: number
  title: string
  image: string
}

type GalleryLightboxProps = {
  items: readonly GalleryLightboxItem[]
  activeIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
      />
    </svg>
  )
}

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const total = items.length
  const item = items[activeIndex]

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + total) % total)
  }, [activeIndex, onNavigate, total])

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % total)
  }, [activeIndex, onNavigate, total])

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
      previousFocusRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
        return
      }

      if (event.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return

      const focusable = getFocusableElements(panel)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev, onClose])

  if (!item) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-black/92"
        onClick={onClose}
        aria-hidden
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Gallery image ${activeIndex + 1} of ${total}: ${item.title}`}
        className="relative z-10 flex w-full max-w-7xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute -top-2 right-0 flex items-center gap-3 sm:-top-4">
          <p
            className="hidden text-xs font-medium tracking-[0.2em] text-paper/50 uppercase sm:block"
            aria-live="polite"
          >
            {activeIndex + 1} / {total}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-paper/15 bg-charcoal/80 text-paper backdrop-blur-sm transition duration-300 hover:border-paper/30 hover:bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
          >
            <CloseIcon />
          </button>
        </div>

        <figure className="flex w-full flex-col items-center">
          <img
            src={item.image}
            alt={item.title}
            onError={imageFallbackHandler}
            className="max-h-[calc(100vh-8rem)] w-full max-w-full object-contain"
          />
          <figcaption className="sr-only">{item.title}</figcaption>
        </figure>

        <p
          className="mt-4 text-xs font-medium tracking-[0.2em] text-paper/50 uppercase sm:hidden"
          aria-hidden
        >
          {activeIndex + 1} / {total}
        </p>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute top-1/2 left-0 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-paper/15 bg-charcoal/80 text-paper backdrop-blur-sm transition duration-300 hover:border-paper/30 hover:bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40 sm:-left-14 sm:h-12 sm:w-12"
        >
          <ChevronIcon direction="left" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute top-1/2 right-0 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-paper/15 bg-charcoal/80 text-paper backdrop-blur-sm transition duration-300 hover:border-paper/30 hover:bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40 sm:-right-14 sm:h-12 sm:w-12"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>,
    document.body,
  )
}
