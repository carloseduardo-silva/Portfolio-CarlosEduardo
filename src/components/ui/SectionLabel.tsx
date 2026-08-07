import { cn } from '@/lib/cn'

interface SectionLabelProps {
  index: string
  label: string
  centered?: boolean
}

export function SectionLabel({ index, label, centered = false }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3.5', centered && 'justify-center')}>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-accent-text">
        {index}. {label}
      </span>
      {!centered && (
        <span className="h-px w-40 flex-shrink-0 bg-card-border" />
      )}
    </div>
  )
}
