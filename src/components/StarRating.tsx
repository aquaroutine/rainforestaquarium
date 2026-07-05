type StarRatingProps = {
  rating: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'h-3.5 w-3.5',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
} as const

function StarIcon({ filled, className }: { filled: boolean; className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.25}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z"
      />
    </svg>
  )
}

export function StarRating({
  rating,
  max = 5,
  size = 'md',
  className = '',
}: StarRatingProps) {
  const starClass = sizeClasses[size]
  const clamped = Math.min(max, Math.max(0, rating))

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${clamped} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, index) => {
        const fill = clamped - index
        const filled = fill >= 1
        const partial = fill > 0 && fill < 1

        if (partial) {
          return (
            <span key={index} className={`relative ${starClass}`}>
              <StarIcon filled={false} className={`${starClass} text-current opacity-30`} />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <StarIcon filled className={`${starClass} text-current`} />
              </span>
            </span>
          )
        }

        return (
          <StarIcon
            key={index}
            filled={filled}
            className={`${starClass} ${filled ? 'text-current' : 'text-current opacity-30'}`}
          />
        )
      })}
    </div>
  )
}
