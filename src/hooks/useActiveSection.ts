'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-spy: devolve o id da seção que ocupa a faixa central da tela.
 *
 * O `rootMargin` recorta o viewport para uma faixa fina no meio, então só uma
 * seção é considerada ativa por vez. Nas pontas da página nenhuma seção
 * intersecta essa faixa — nesse caso mantemos o último id conhecido, para o
 * menu nunca ficar sem destaque.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')
  const lastId = useRef(ids[0] ?? '')
  // Serializado para dar uma dependência estável ao efeito mesmo quando o
  // chamador monta o array inline.
  const key = ids.join('|')

  useEffect(() => {
    const sectionIds = key.split('|').filter(Boolean)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting)
        if (hit) {
          lastId.current = hit.target.id
          setActiveId(hit.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return activeId
}
