import { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useTheme } from './ThemeProvider'
import { GoogleAd } from './GoogleAd'

type HeaderProps = {
  value: string
  onChange: (value: string) => void
}

export function Header({ value, onChange }: HeaderProps) {
  const { theme, toggle } = useTheme()
  const tagline = useMemo(() => 'Fast, simple, and handy web utilities', [])
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[rgb(var(--bg))]/80 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg))]/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Online Tools 4U logo" className="h-9 w-9 dark:invert" />
          <div>
            <div className="text-base font-semibold">Online Tools 4U</div>
            <p className="text-xs text-muted-foreground">{tagline}</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 w-[480px] max-w-[48vw]">
          <Input
            placeholder="Search tools..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-10"
          />
          <Button asChild>
            <a href="#main">Search</a>
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs">
            <span>Light</span>
            <Switch checked={theme === 'dark'} onCheckedChange={() => toggle()} />
            <span>Dark</span>
          </div>
        </div>
      </div>
      <div className="md:hidden container pb-3">
        <Input
          placeholder="Search tools..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10"
        />
      </div>
      <div className="container my-2">
        <GoogleAd slot="YOUR_HEADER_SLOT_ID" className="w-full" style={{ display: 'block' }} />
      </div>
    </header>
  )
}


