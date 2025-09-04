import { useMemo } from 'react'
import type { ToolItem } from '@/types'
import { ToolCard } from './ToolCard'
 

type ToolGridProps = {
  tools: ToolItem[]
}

export function ToolGrid({ tools }: ToolGridProps) {
  const items = useMemo(() => tools, [tools])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((t, i) => (
        <div key={t.name + i} className="contents">
          <ToolCard tool={t} />
          
        </div>
      ))}
    </div>
  )
}


