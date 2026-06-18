'use client'

import { useState } from 'react'
import { projects } from '@/data/portfolio'
import { SectionLabel } from './ui/SectionLabel'
import { cn } from '@/lib/cn'

type Filter = 'destaques' | 'todos'

export function Projects() {
  const [filter, setFilter] = useState<Filter>('destaques')

  const filtered =
    filter === 'destaques' ? projects.filter((p) => p.featured) : projects

  return (
    <section id="projetos" className="py-28 px-15 bg-surface-muted">
      <div className="max-w-[1280px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between gap-8 flex-wrap mb-12">
          <div>
            <SectionLabel index="04" label="Projetos" />
            <h2 className="text-[52px] font-extrabold text-navy-900 tracking-tightest leading-none mt-3">
              Trabalhos Recentes.
            </h2>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-1 p-1 bg-white border-[1.5px] border-card-border rounded-[10px] shadow-sm flex-none">
            {(['destaques', 'todos'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-5 py-2 rounded-[7px] text-[13px] font-semibold capitalize transition-all',
                  filter === f
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-[#8896A8] hover:text-navy-900',
                )}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-5">
          {filtered.map((project) => (
            <article
              key={project.name}
              className="group bg-white rounded-2xl overflow-hidden border-[1.5px] border-card-border shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(13,24,41,0.10)] hover:border-accent/25"
            >
              {/* Card image */}
              <div
                className="relative h-[188px] flex items-end px-5 py-5"
                style={{ background: project.bg }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="relative z-10">
                  <span className="font-mono text-[9.5px] text-white/50 uppercase tracking-[0.15em] block mb-1">
                    {project.type}
                  </span>
                  <h3 className="text-[17px] font-bold text-white leading-tight tracking-tight">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between px-5 py-3.5">
                <span className="font-mono text-[11.5px] text-[#9AAABB]">
                  {project.techs.join(' · ')}
                </span>
                <a
                  href={project.href ?? '#'}
                  className="flex items-center gap-1.5 text-[12.5px] font-semibold text-accent transition-all group-hover:gap-2.5"
                >
                  Ver <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
