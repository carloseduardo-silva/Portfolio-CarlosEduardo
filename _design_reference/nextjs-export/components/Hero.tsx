'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { typewriterRoles } from '@/data/portfolio'

export function Hero() {
  const [typeText, setTypeText] = useState('')
  const roleIdx   = useRef(0)
  const charIdx   = useRef(0)
  const deleting  = useRef(false)
  const pauseRef  = useRef(0)

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
      className="relative min-h-screen bg-navy-950 flex items-center px-15 pt-20 pb-16 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-[5%] right-[5%] w-[720px] h-[720px] rounded-full glow-hero pointer-events-none" />
      <div
        className="absolute bottom-0 left-[20%] w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(75,123,229,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto flex items-center justify-between gap-12">

        {/* ── Left: copy ────────────────────────────────────────────────── */}
        <div className="flex-1 max-w-[660px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 mb-7 px-3.5 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent-light tracking-[0.08em]">
              Oi, eu sou o Kadu!
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[78px] font-extrabold leading-none tracking-tightest text-[#E8ECF4] mb-5">
            Carlos
            <br />
            Eduardo<span className="text-accent">.</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center h-12 mb-7">
            <span className="text-[26px] font-light text-[#E8ECF4]/50 tracking-tight">
              {typeText}
            </span>
            <span className="inline-block w-[2.5px] h-7 bg-accent ml-[3px] rounded-sm animate-blink" />
          </div>

          {/* Subtitle */}
          <p className="text-[15px] text-[#E8ECF4]/40 leading-relaxed max-w-[460px] mb-11">
            Desenvolvedor Front-End com 2+ anos de experiência construindo
            aplicações web modernas, performáticas e com foco em UI/UX de qualidade.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 mb-13">
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
              { label: 'LinkedIn',  href: 'https://linkedin.com/in/carloseduardodasilva' },
              { label: 'GitHub',    href: 'https://github.com/carloseduardo-silva' },
              { label: 'WhatsApp',  href: 'https://wa.me/5513974022220' },
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

        {/* ── Right: code card ──────────────────────────────────────────── */}
        <div className="flex-none w-[380px] relative flex justify-center items-center">
          {/* Rings */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-accent/10" />
          <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-accent/[0.06]" />

          {/* Card */}
          <div className="relative z-10 bg-[#0B1426]/95 border border-accent/[0.22] rounded-2xl px-7 pt-5 pb-6 shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#FFBD2E]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#28CA42]" />
              <span className="ml-2.5 font-mono text-[11px] text-[#E8ECF4]/25">dev.ts</span>
            </div>

            {/* Code */}
            <div className="font-mono text-[13px] leading-[2]">
              <p>
                <span className="text-[#7CB8FF]">const</span>{' '}
                <span className="text-[#E8ECF4]">dev</span>{' '}
                <span className="text-[#E8ECF4]/35">=</span>{' '}
                <span className="text-[#E8ECF4]/50">{'{'}</span>
              </p>
              <p className="pl-[18px]">
                <span className="text-[#8ACB8A]">name</span>
                <span className="text-[#E8ECF4]/35">:</span>{' '}
                <span className="text-[#F1AA6B]">&apos;Carlos Eduardo&apos;</span>
                <span className="text-[#E8ECF4]/35">,</span>
              </p>
              <p className="pl-[18px]">
                <span className="text-[#8ACB8A]">role</span>
                <span className="text-[#E8ECF4]/35">:</span>{' '}
                <span className="text-[#F1AA6B]">&apos;Front-End Dev&apos;</span>
                <span className="text-[#E8ECF4]/35">,</span>
              </p>
              <p className="pl-[18px]">
                <span className="text-[#8ACB8A]">exp</span>
                <span className="text-[#E8ECF4]/35">:</span>{' '}
                <span className="text-[#CC99FF]">2</span>
                <span className="text-[#E8ECF4]/35">,</span>
              </p>
              <p className="pl-[18px]">
                <span className="text-[#8ACB8A]">stack</span>
                <span className="text-[#E8ECF4]/35">:</span>{' '}
                <span className="text-[#F1AA6B]">&apos;React · TS · Next&apos;</span>
                <span className="text-[#E8ECF4]/35">,</span>
              </p>
              <p className="pl-[18px]">
                <span className="text-[#8ACB8A]">cs</span>
                <span className="text-[#E8ECF4]/35">:</span>{' '}
                <span className="text-[#F1AA6B]">&apos;UFABC&apos;</span>
              </p>
              <p>
                <span className="text-[#E8ECF4]/50">{'}'}</span>
                <span className="text-[#E8ECF4]/35">;</span>
              </p>
            </div>
          </div>

          {/* Floating dots */}
          <div className="absolute top-11 right-[18px] w-2 h-2 rounded-full bg-accent opacity-45" />
          <div className="absolute bottom-[52px] left-3.5 w-[5px] h-[5px] rounded-full bg-accent-light opacity-35" />
          <div className="absolute top-[104px] left-8 w-[3px] h-[3px] rounded-full bg-accent opacity-50" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 pointer-events-none select-none">
        <span className="font-mono text-[9px] text-[#E8ECF4] uppercase tracking-[0.3em]">scroll</span>
        <div className="w-px h-8 scroll-line" />
      </div>
    </section>
  )
}
