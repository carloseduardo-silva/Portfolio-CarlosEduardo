'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { experiences } from '@/data/experiences'
import { cn } from '@/lib/cn'

export default function Experience() {
  const [activeId, setActiveId] = useState('ipr')
  const active = experiences.find((e) => e.id === activeId) ?? experiences[0]

  return (
    <section id="experiencias" className="bg-navy-950 px-6 md:px-10 lg:px-15 py-28">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <SectionLabel index="02" label="Trajetória" dark />
          <h2 className="mt-5 text-[36px] md:text-[44px] font-extrabold text-[#E8ECF4] tracking-tight leading-tight mb-14">
            Trajetória<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[280px_1fr] gap-0 lg:gap-10 bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">

          {/* ── Company list ─── */}
          <div className="border-b lg:border-b-0 lg:border-r border-white/[0.06]">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={cn(
                  'w-full text-left px-6 py-5 border-l-[3px] transition-all duration-150',
                  'hover:bg-white/[0.04] hover:text-[#E8ECF4]',
                  activeId === exp.id
                    ? 'border-l-accent bg-accent/[0.07] text-[#E8ECF4]'
                    : 'border-l-transparent text-[#E8ECF4]/40',
                )}
              >
                <span className="text-[14px] font-medium leading-snug block">{exp.company}</span>
                {activeId === exp.id && (
                  <span className="font-mono text-[10px] text-accent mt-0.5 block tracking-[0.05em]">
                    {exp.period}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Detail panel ─── */}
          <ScrollReveal key={active.id} className="p-8 lg:p-10 flex flex-col gap-5">
            {/* Role + period */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="text-[22px] md:text-[26px] font-bold text-[#E8ECF4] tracking-tight leading-snug">
                {active.role}
              </h3>
              <span className="font-mono text-[11px] text-accent px-3 py-1 bg-accent/10 border border-accent/20 rounded-full whitespace-nowrap self-start">
                {active.period}
              </span>
            </div>

            {/* Company */}
            <p className="text-[15px] font-medium text-[#E8ECF4]/55">{active.company}</p>

            {/* Separator */}
            <div className="h-px bg-white/[0.06]" />

            {/* Description */}
            <p className="text-[15px] text-[#E8ECF4]/55 leading-relaxed">{active.description}</p>

            {/* Tags */}
            {active.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-[11px] text-accent-light"
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
