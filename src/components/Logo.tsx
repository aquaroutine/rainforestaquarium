type LogoProps = {
  /** `dark` = black monogram on light backgrounds; `light` = white on dark (transparent PNG) */
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Rainforest Aquarium"
      width={120}
      height={40}
      className={`h-9 w-auto object-contain sm:h-10 ${variant === 'light' ? 'logo-on-dark' : ''} ${className}`}
    />
  )
}
