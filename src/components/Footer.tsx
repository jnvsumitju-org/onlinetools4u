import { GoogleAd } from './GoogleAd'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t mt-10">
      <div className="container py-6 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-between gap-4">
        <p>© {year} Online Tools 4U. All rights reserved.</p>
        <GoogleAd slot="YOUR_FOOTER_SLOT_ID" className="w-[320px]" style={{ display: 'block' }} />
      </div>
    </footer>
  )
}


