type AdBannerProps = {
  label?: string
  className?: string
}

export function AdBanner({ label = 'Ad placeholder', className }: AdBannerProps) {
  return (
    <div
      role="complementary"
      aria-label="Advertisement"
      className={`w-full min-h-[120px] rounded-md border border-dashed text-center grid place-items-center text-sm text-muted-foreground ${className ?? ''}`}
    >
      {label}
    </div>
  )
}


