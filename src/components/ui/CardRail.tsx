'use client'

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: ReactNode
  /** Colunas máximas quando o trilho volta a ser grid (só em `grid-on-desktop`). */
  maxCols: 2 | 3
  gap: 'gap-5' | 'gap-6'
  /** Descreve o conjunto para leitores de tela (ex.: "Habilidades"). */
  label: string
  /**
   * `grid-on-desktop` (padrão): trilho no mobile, grid a partir de `@xl/content`.
   * `rail`: trilho em toda largura, mostrando mais cards conforme o espaço, com
   * setas prev/next no desktop — onde não existe o gesto de arrastar.
   */
  variant?: 'grid-on-desktop' | 'rail'
}

/**
 * Usa `scroll-snap` nativo — sem dependência. As classes de slide são aplicadas
 * pelo pai via seletor de filho, para o call site não precisar saber que está
 * dentro de um carrossel.
 *
 * O `ScrollReveal` deve envolver o trilho inteiro, nunca cada card: num trilho
 * horizontal os cards fora da tela não intersectam o viewport e ficariam
 * invisíveis, inclusive o que espia na borda.
 */

// O `basis` tem que descontar o gap, então as duas coisas andam juntas. Classes
// precisam ser literais completas — o Tailwind não lê concatenação.
const railBasis = {
  'gap-5':
    '@xl/content:[&>*]:basis-[calc((100%-1.25rem)/2)] @4xl/content:[&>*]:basis-[calc((100%-2.5rem)/3)]',
  'gap-6':
    '@xl/content:[&>*]:basis-[calc((100%-1.5rem)/2)] @4xl/content:[&>*]:basis-[calc((100%-3rem)/3)]',
} as const

const arrowBase =
  'hidden @xl/content:flex absolute top-1/2 -translate-y-1/2 z-10 items-center justify-center ' +
  'w-10 h-10 rounded-full bg-surface border border-card-border shadow-sm text-ink-subtle ' +
  'transition-all hover:text-accent-text hover:border-accent/40 hover:shadow-md ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
  'disabled:opacity-0 disabled:pointer-events-none'

export default function CardRail({ children, maxCols, gap, label, variant = 'grid-on-desktop' }: Props) {
  const isRail = variant === 'rail'
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
  }, [])

  // Sem isto o `›` nasceria habilitado mesmo num trilho que não rola.
  useEffect(() => {
    if (!isRail) return
    syncEdges()
    window.addEventListener('resize', syncEdges)
    return () => window.removeEventListener('resize', syncEdges)
  }, [isRail, syncEdges])

  const scrollByPage = (direction: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    // Uma "página" é o que está visível; o `snap-mandatory` encaixa o resto,
    // então não é preciso medir o card.
    el.scrollBy({
      left: direction * el.clientWidth,
      // `prefers-reduced-motion` do globals.css só alcança CSS; isto é JS.
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  const track = (
    <div
      ref={trackRef}
      onScroll={isRail ? syncEdges : undefined}
      role="group"
      aria-label={label}
      // Região rolável precisa ser operável por teclado (WCAG 2.1.1).
      tabIndex={0}
      className={cn(
        gap,
        // ── Trilho ──
        'flex items-stretch snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-px-6',
        // sangra até a borda da tela para o card espiar
        '-mx-6 px-6',
        // overflow-x força o eixo Y a sair de `visible`: a folga evita que as
        // sombras dos cards sejam recortadas, sem mudar o espaçamento externo
        'py-2 -my-2',
        '[&>*]:snap-start [&>*]:shrink-0 [&>*]:basis-[86%]',
        'rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
        // ── Trilho também no desktop, só com mais cards à vista ──
        isRail && '@xl/content:mx-0 @xl/content:px-0 @xl/content:scroll-px-0',
        isRail && railBasis[gap],
        // ── Grid (≥ @xl/content) ──
        !isRail &&
          '@xl/content:mx-0 @xl/content:my-0 @xl/content:grid @xl/content:overflow-visible ' +
            '@xl/content:px-0 @xl/content:py-0 @xl/content:[&>*]:basis-auto @xl/content:grid-cols-2',
        !isRail && maxCols === 3 && '@4xl/content:grid-cols-3',
      )}
    >
      {children}
    </div>
  )

  if (!isRail) return track

  return (
    // Sem `overflow-hidden`: recortaria as sombras dos cards e o anel de foco.
    <div className="relative">
      {track}
      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        aria-label="Anterior"
        className={cn(arrowBase, '-left-4')}
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        aria-label="Próximo"
        className={cn(arrowBase, '-right-4')}
      >
        <Chevron direction="right" />
      </button>
    </div>
  )
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={direction === 'left' ? 'M14.5 6 8.5 12l6 6' : 'M9.5 6l6 6-6 6'} />
    </svg>
  )
}
