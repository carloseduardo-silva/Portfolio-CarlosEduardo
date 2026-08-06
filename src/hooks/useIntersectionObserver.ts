'use client'

import { useEffect, useRef, useState } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
  /** Para de observar após a primeira interseção — o elemento não volta a esconder. */
  once?: boolean
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px',
  once = false,
}: Options = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  // As opções são desestruturadas em primitivos para que a dependência do efeito
  // seja estável mesmo quando o chamador passa um objeto literal inline.
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
