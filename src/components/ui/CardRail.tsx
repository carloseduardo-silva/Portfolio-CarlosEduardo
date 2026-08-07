import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: ReactNode
  /** Colunas máximas quando o trilho volta a ser grid. */
  maxCols: 2 | 3
  gap: 'gap-5' | 'gap-6'
  /** Descreve o conjunto para leitores de tela (ex.: "Habilidades"). */
  label: string
}

/**
 * No mobile, exibe os cards como um trilho horizontal deslizável; a partir de
 * `@xl/content` volta a ser o mesmo grid de antes.
 *
 * Usa `scroll-snap` nativo — sem JS e sem dependência. As classes de slide são
 * aplicadas pelo pai via seletor de filho, para o call site não precisar saber
 * que está dentro de um carrossel.
 *
 * O `ScrollReveal` deve envolver o trilho inteiro, nunca cada card: num trilho
 * horizontal os cards fora da tela não intersectam o viewport e ficariam
 * invisíveis, inclusive o que espia na borda.
 */
export default function CardRail({ children, maxCols, gap, label }: Props) {
  return (
    <div
      role="group"
      aria-label={label}
      // Região rolável precisa ser operável por teclado (WCAG 2.1.1).
      tabIndex={0}
      className={cn(
        gap,
        // ── Trilho (mobile) ──
        'flex snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-px-6',
        // sangra até a borda da tela para o card espiar
        '-mx-6 px-6',
        // overflow-x força o eixo Y a sair de `visible`: a folga evita que as
        // sombras dos cards sejam recortadas, sem mudar o espaçamento externo
        'py-2 -my-2',
        '[&>*]:snap-start [&>*]:shrink-0 [&>*]:basis-[86%]',
        'rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
        // ── Grid (≥ @xl/content) ──
        '@xl/content:mx-0 @xl/content:my-0 @xl/content:grid @xl/content:overflow-visible',
        '@xl/content:px-0 @xl/content:py-0 @xl/content:[&>*]:basis-auto',
        '@xl/content:grid-cols-2',
        maxCols === 3 && '@4xl/content:grid-cols-3',
      )}
    >
      {children}
    </div>
  )
}
