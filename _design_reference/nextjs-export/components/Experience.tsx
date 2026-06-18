'use client'

import { useState } from 'react'
import { experiences } from '@/data/portfolio'
import { SectionLabel } from './ui/SectionLabel'
import { cn } from '@/lib/cn'

export function Experience() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = experiences[activeIdx]

  return (
    <section id="experiencias" className="py-28 px-15 bg-navy-950">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel index="02" label="Experiências" dark />
          <h2 className="text-[52px] font-extrabold text-[#E8ECF4] tracking-tightest leading-none mt-3">
            Trajetória.
          </h2>
        </div>

        {/* Panel */}
        <div className="grid grid-cols-[288px_1fr] border border-white/[0.06] rounded-2xl overflow-hidden min-h-[420px]">

          {/* ── Company list ────────────────────────────────────────── */}
          <div className="border-r border-white/[0.06] bg-white/[0.015]">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  'w-full text-left px-6 py-[22px] border-l-[3px] transition-all outline-none',
                  'border-b border-b-white/[0.04]',
                  i === activeIdx
                    ? 'border-l-accent bg-accent/[0.07]'
                    : 'border-l-transparent hover:bg-white/[0.02]',
                )}
              >
                <p
                  className={cn(
                    'text-[13px] font-semibold leading-snug transition-colors',
                    i === activeIdx ? 'text-[#E8ECF4]' : 'text-[#E8ECF4]/38',
                  )}
                >
                  {exp.company}
                </p>
                <p className="font-mono text-[10.5px] text-[#E8ECF4]/28 mt-1.5">
                  {exp.period}
                </p>
              </button>
            ))}
          </div>

          {/* ── Detail panel ────────────────────────────────────────── */}
          <div className="p-11 pl-13">
            <div className="flex items-start justify-between gap-5 mb-2.5">
              <h3 className="text-[26px] font-bold text-[#E8ECF4] tracking-tight leading-tight">
                {current.role}
              </h3>
              <span className="flex-none font-mono text-[11px] text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded mt-1">
                {current.period}
              </span>
            </div>

            <p className="text-[13.5px] font-semibold text-accent mb-6 tracking-wide">
              {current.company}
            </p>

            <p className="text-[15px] text-[#E8ECF4]/52 leading-[1.88] mb-8">
              {current.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent/10 border border-accent/[0.18] text-accent-light rounded-md font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
