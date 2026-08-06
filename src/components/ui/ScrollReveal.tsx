'use client'

import { ReactNode } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ScrollReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, once: true })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'} ${className}`}
    >
      {children}
    </div>
  )
}
