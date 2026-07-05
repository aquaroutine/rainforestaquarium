const configured = import.meta.env.VITE_AQUAROUTINE_SHOP_URL as string | undefined

/** Main Aquaroutine storefront (Category page at `/`). */
export const aquaroutineShopUrl =
  configured?.trim() || 'https://www.aquaroutine.com/'
