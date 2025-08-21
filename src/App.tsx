import { useMemo, useState } from 'react'
import toolsData from '@/tools.json'
import type { ToolItem } from '@/types'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ToolGrid } from '@/components/ToolGrid'
import { AdBanner } from '@/components/AdBanner'

function normalize(text: string) {
  return text.toLowerCase()
}

function App() {
  const [query, setQuery] = useState('')

  const tools = toolsData as ToolItem[]

  const filtered = useMemo(() => {
    const q = normalize(query)
    if (!q) return tools
    return tools.filter((t) =>
      normalize(`${t.name} ${t.description} ${t.category}`).includes(q)
    )
  }, [query, tools])

  const categories = useMemo(() => {
    const set = new Set<string>()
    for (const t of tools) set.add(t.category)
    return Array.from(set).sort()
  }, [tools])

  return (
    <div className="min-h-dvh flex flex-col">
      <Header value={query} onChange={setQuery} />
      <main id="main" className="container flex-1 py-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <section className="min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Popular Tools</h2>
            <span className="text-sm text-muted-foreground">{filtered.length} results</span>
          </div>
          <ToolGrid tools={filtered} />
        </section>
        <aside className="space-y-4">
          <AdBanner label="Ad placeholder (Sidebar)" />
          <div className="rounded-lg border p-4">
            <div className="font-medium mb-2">Categories</div>
            <ul className="text-sm space-y-1">
              <li
                className="text-muted-foreground cursor-pointer hover:underline"
                onClick={() => setQuery("")}
              >
                All
              </li>
              {categories.map((c) => (
                <li
                  key={c}
                  className="text-muted-foreground cursor-pointer hover:underline"
                  onClick={() => setQuery(c)}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}

export default App
