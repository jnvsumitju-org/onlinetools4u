export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t mt-10">
      <div className="container py-6 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
        <p>© {year} Online Tools 4U. All rights reserved.</p>
        <div className="w-[280px] min-h-[60px] rounded-md border border-dashed text-center grid place-items-center text-xs text-neutral-500">
          Ad placeholder (Footer)
        </div>
      </div>
    </footer>
  )
}


