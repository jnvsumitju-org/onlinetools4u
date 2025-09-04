import { memo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { ToolItem } from '@/types'
import { motion } from 'framer-motion'

type ToolCardProps = {
  tool: ToolItem
}

export const ToolCard = memo(function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <Card className="h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2 min-w-0">
            <CardTitle
              className="text-base font-semibold leading-tight truncate flex-1 min-w-0 pr-1"
              title={tool.name}
              aria-label={tool.name}
            >
              {tool.name}
            </CardTitle>
            <Badge variant="secondary" className="shrink-0">
              {tool.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {tool.description}
          </p>
          <Button asChild className="mt-auto w-full">
            <a href={tool.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${tool.name} in new tab`}>
              Use Tool
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
})


