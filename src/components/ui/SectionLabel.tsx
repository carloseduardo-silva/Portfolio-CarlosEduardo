import { cn } from '@/lib/cn'

interface SectionLabelProps {
  index: string
  label: string
  dark?: boolean
  centered?: boolean
}

export function SectionLabel({ index, label, dark = false, centered = false }: SectionLabelProps) {
  const lineColor = dark ? 'bg-white/[0.07]' : 'bg-[#E0E5F0]'

  return (
    <div className={cn('flex items-center gap-3.5', centered && 'justify-center')}>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
        {index}. {label}
      </span>
      {!centered && (
        <span className={cn('h-px w-40 flex-shrink-0', lineColor)} />
      )}
    </div>
  )
}
