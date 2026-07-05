/** Local image paths (served from public/images/). Drop matching files to replace placeholders. */
export const siteImages = {
  hero: {
    background: '/images/hero/background.jpeg',
  },
  about: {
    background: '/images/about/background.jpg',
    founder: '/images/about/founder.jpg',
  },
  services: {
    'planted-tanks': '/images/services/planted-tanks.jpg',
    'koi-ponds': '/images/services/koi-ponds.jpg',
    rainforest: '/images/services/rainforest.jpeg',
    terrariums: '/images/services/terrariums.jpeg',
    maintenance: '/images/services/maintenance.jpg',
    custom: '/images/services/custom.jpg',
    store: '/images/services/store.png',
  },
  partners: {
    aquaroutine: '/images/partners/aquaroutine.png',
  },
  gallery: [
    '/images/gallery/01.jpg',
    '/images/gallery/02.jpg',
    '/images/gallery/03.jpg',
    '/images/gallery/04.jpg',
    '/images/gallery/05.jpg',
    '/images/gallery/06.jpg',
    '/images/gallery/07.jpg',
    '/images/gallery/08.jpg',
    '/images/gallery/09.jpg',
    '/images/gallery/10.jpg',
    '/images/gallery/11.jpg',
    '/images/gallery/12.jpg',
    '/images/gallery/13.jpg',
    '/images/gallery/14.jpg',
    '/images/gallery/15.jpg',
    '/images/gallery/16.jpg',
    '/images/gallery/17.jpg',
    '/images/gallery/18.jpg',
    '/images/gallery/19.jpg',
    '/images/gallery/20.jpg',
    '/images/gallery/21.jpg',
    '/images/gallery/22.jpg',
    '/images/gallery/23.jpg',
    '/images/gallery/24.jpg',
    '/images/gallery/25.jpg',
    '/images/gallery/26.jpg',
    '/images/gallery/27.jpg',
    '/images/gallery/28.jpg',
    '/images/gallery/29.jpg',
    '/images/gallery/30.jpg',
    '/images/gallery/31.jpg',
    '/images/gallery/32.jpg',
    '/images/gallery/33.jpg',
    '/images/gallery/34.jpg',
    '/images/gallery/35.jpg',
    '/images/gallery/36.jpg',
    '/images/gallery/37.jpg',
    '/images/gallery/38.jpg',
    '/images/gallery/39.jpg',
  ],
} as const

/** Unsplash placeholders — used until local files exist (via onError fallback). */
export const imageFallbacks: Record<string, string> = {
  [siteImages.hero.background]:
    'https://images.unsplash.com/photo-1522069169874-b58c0057a7e2?w=1920&h=1080&fit=crop&q=60',
  [siteImages.about.background]:
    'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&h=900&fit=crop&q=60',
  [siteImages.about.founder]:
    'https://images.unsplash.com/photo-1520990067671-0d2b0db3a1e8?w=800&h=1000&fit=crop&q=80',
  [siteImages.services['planted-tanks']]:
    'https://images.unsplash.com/photo-1522069169874-b58c0057a7e2?w=600&h=400&fit=crop&q=80',
  [siteImages.services['koi-ponds']]:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&q=80',
  [siteImages.services.rainforest]:
    'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop&q=80',
  [siteImages.services.terrariums]:
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80',
  [siteImages.services.maintenance]:
    'https://images.unsplash.com/photo-1544551763-77a9207e2f4a?w=600&h=400&fit=crop&q=80',
  [siteImages.services.custom]:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80',
  [siteImages.services.store]:
    'https://images.unsplash.com/photo-1520990067671-0d2b0db3a1e8?w=600&h=400&fit=crop&q=80',
  [siteImages.gallery[0]]:
    'https://images.unsplash.com/photo-1522069169874-b58c0057a7e2?w=800&h=600&fit=crop&q=80',
  [siteImages.gallery[1]]:
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=500&fit=crop&q=80',
  [siteImages.gallery[2]]:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=500&fit=crop&q=80',
  [siteImages.gallery[3]]:
    'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=500&fit=crop&q=80',
  [siteImages.gallery[4]]:
    'https://images.unsplash.com/photo-1544551763-77a9207e2f4a?w=800&h=600&fit=crop&q=80',
  [siteImages.gallery[5]]:
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop&q=80',
}

export function imageFallbackHandler(
  event: React.SyntheticEvent<HTMLImageElement>,
): void {
  const img = event.currentTarget
  const path = new URL(img.src, window.location.origin).pathname
  const fallback = imageFallbacks[path]
  if (fallback && !img.src.startsWith(fallback.split('?')[0]!)) {
    img.onerror = null
    img.src = fallback
  }
}
