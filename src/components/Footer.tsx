 

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t mt-4">
      <div className="container py-3 text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-center gap-4">
        <p>© {year} onlinetools4u.com — All rights reserved.</p>
      </div>
    </footer>
  )
}


