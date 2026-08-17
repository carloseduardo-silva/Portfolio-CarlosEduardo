'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import { experiences } from '@/data/experiences'
import { cn } from '@/lib/cn'
import { useState } from 'react'

export default function Experience() {
  const [activeId, setActiveId] = useState('ipr')
  const active = experiences.find((e) => e.id === activeId) ?? experiences[0]

  return (
    <section id="experiencias" className="bg-surface-light px-6 md:px-10 lg:px-15 py-18 md:py-24">
      <div className="@container/content max-w-[1280px] mx-auto">
        <ScrollReveal>
          <h2 className="mt-5 text-[36px] md:text-[44px] font-extrabold text-ink tracking-tight leading-tight mb-14">
            Trajetória<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid @3xl/content:grid-cols-[280px_1fr] gap-0 @3xl/content:gap-10 bg-surface border border-card-border shadow-sm rounded-2xl overflow-hidden">

          {/* ── Company list — linha do tempo ─── */}
          <div className="border-b @3xl/content:border-b-0 @3xl/content:border-r border-card-border">
            {experiences.map((exp, i) => {
              const isActive = activeId === exp.id
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={cn(
                    'group relative w-full text-left pl-12 pr-6 py-5 transition-all duration-150',
                    'hover:bg-surface-muted hover:text-ink',
                    isActive ? 'bg-accent/[0.08] text-ink' : 'text-ink-subtle',
                  )}
                >
                  {/* Trilho desenhado por item: os cards têm alturas distintas,
                      então uma linha única não acertaria os marcadores. */}
                  {i > 0 && (
                    <span aria-hidden className="absolute left-[27px] top-0 h-6 w-px bg-card-border" />
                  )}
                  {i < experiences.length - 1 && (
                    <span aria-hidden className="absolute left-[27px] top-[34px] bottom-0 w-px bg-card-border" />
                  )}
                  <span
                    aria-hidden
                    className={cn(
                      'absolute left-[22px] top-6 w-2.5 h-2.5 rounded-full transition-all duration-150',
                      isActive
                        ? 'bg-accent ring-4 ring-accent/15'
                        : 'bg-surface border border-card-border group-hover:border-accent/40',
                    )}
                  />

                  <span className="text-[14px] font-medium leading-snug block">{exp.company}</span>
                  <span
                    className={cn(
                      'font-mono text-[10px] mt-0.5 block tracking-[0.05em] transition-colors',
                      isActive ? 'text-accent-text' : 'text-ink-subtle',
                    )}
                  >
                    {exp.period}
                  </span>
                </button>
              )
            })}
          </div>

          {/* ── Detail panel ─── */}
          <ScrollReveal key={active.id} className="p-8 @3xl/content:p-10 flex flex-col gap-5">
            {/* Role + period */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="text-[22px] md:text-[26px] font-bold text-ink tracking-tight leading-snug">
                {active.role}
              </h3>
              <span className="font-mono text-[11px] text-accent-text px-3 py-1 bg-accent/10 border border-accent/20 rounded-full whitespace-nowrap self-start">
                {active.period}
              </span>
            </div>

            {/* Company */}
            <p className="text-[15px] font-medium text-ink-muted">{active.company}</p>

            {/* Separator */}
            <div className="h-px bg-card-border" />

            {/* Description */}
            <p className="text-[15px] text-ink-muted leading-relaxed">{active.description}</p>

            {/* Tags */}
            {active.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-[11px] text-accent-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
