import { cn } from '@/lib/cn'

interface SectionLabelProps {
  index: string
  label: string
  dark?: boolean
  centered?: boolean
}

/**
 * Reutilizável: exibe o número da seção + label no padrão do portfólio.
 * Ex: <SectionLabel index="01" label="Quem sou" />
 */
export function SectionLabel({ index, label, dark = false, centered = false }: SectionLabelProps) {
  const textColor = dark ? 'text-accent' : 'text-accent'
  const lineColor = dark ? 'bg-white/[0.07]' : 'bg-[#E0E5F0]'

  return (
    <div className={cn('flex items-center gap-3.5', centered && 'justify-center')}>
      <span className={cn('font-mono text-[11px] font-medium uppercase tracking-[0.25em]', textColor)}>
        {index}. {label}
      </span>
      {!centered && (
        <span className={cn('h-px w-40 flex-shrink-0', lineColor)} />
      )}
    </div>
  )
}
