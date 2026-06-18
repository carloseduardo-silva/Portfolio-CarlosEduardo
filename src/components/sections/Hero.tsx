'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { typewriterRoles } from '@/data/portfolio'

export default function Hero() {
  const [typeText, setTypeText] = useState('')
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)
  const pauseRef = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (pauseRef.current > 0) { pauseRef.current--; return }

      const role = typewriterRoles[roleIdx.current]

      if (!deleting.current) {
        charIdx.current++
        setTypeText(role.slice(0, charIdx.current))
        if (charIdx.current === role.length) {
          deleting.current = true
          pauseRef.current = 24
        }
      } else {
        charIdx.current--
        setTypeText(role.slice(0, charIdx.current))
        if (charIdx.current === 0) {
          deleting.current = false
          roleIdx.current = (roleIdx.current + 1) % typewriterRoles.length
          pauseRef.current = 5
        }
      }
    }, 88)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-navy-950 flex items-center px-6 md:px-10 lg:px-15 pt-20 pb-16 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-[5%] right-[5%] w-[720px] h-[720px] rounded-full glow-hero pointer-events-none" />
      <div
        className="absolute bottom-0 left-[20%] w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(75,123,229,0.04) 0%, transparent 70%)' }}
      />

      <div className="flex flex-col items-center gap-3 mx-auto text-center pt-10">

        {/* Typewriter */}
        <div className="flex items-center h-12 mb-3">
          <span className="text-[20px] md:text-[24px] font-light text-[#E8ECF4]/50 tracking-tight">
            {typeText}
          </span>
          <span className="inline-block w-[2.5px] h-7 bg-accent ml-[3px] rounded-sm animate-blink" />
        </div>

        {/* Heading */}
        <h1 className="text-center text-[52px] md:text-[64px] lg:text-[70px] font-extrabold leading-none tracking-tightest text-[#E8ECF4] mb-5">
          Desenvolvedor
          <br />
          Carlos
          Eduardo<span className="text-accent">.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] text-[#E8ECF4]/40 leading-relaxed max-w-[460px] mb-11">
          Desenvolvedor Front-End com 2+ anos de experiência construindo
          aplicações web modernas, performáticas e com foco em UI/UX de qualidade.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-13">
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg text-sm font-semibold transition-all hover:bg-accent-dark hover:-translate-y-0.5"
          >
            Contate-me <span aria-hidden>→</span>
          </Link>
          <Link
            href="#projetos"
            className="px-8 py-3.5 border border-white/10 text-[#E8ECF4]/70 rounded-lg text-sm font-medium transition-all hover:border-accent/50 hover:text-accent-light"
          >
            Ver Projetos
          </Link>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5">
          <span className="font-mono text-[10px] text-[#E8ECF4]/20 uppercase tracking-[0.2em]">
            Social
          </span>
          <span className="w-5 h-px bg-white/10" />
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/carlos-eduardo-da-silva-050403235' },
            { label: 'GitHub', href: 'https://github.com/carloseduardo-silva' },
            { label: 'WhatsApp', href: 'https://wa.me/5513974022220' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#E8ECF4]/40 transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 pointer-events-none select-none">
        <div className="w-px h-8 scroll-line" />
      </div>
    </section>
  )
}
