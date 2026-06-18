'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects, highlightProjects, Project } from '@/data/projects'
import { cn } from '@/lib/cn'

type Filter = 'highlights' | 'all'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('highlights')
  const [selected, setSelected] = useState<Project | null>(null)

  const displayed = filter === 'highlights' ? highlightProjects : projects
  const currentIndex = selected ? displayed.findIndex((p) => p.id === selected.id) : -1
  const onPrev = currentIndex > 0 ? () => setSelected(displayed[currentIndex - 1]) : null
  const onNext = currentIndex < displayed.length - 1 ? () => setSelected(displayed[currentIndex + 1]) : null

  return (
    <section id="projetos" className="bg-surface-muted px-6 md:px-10 lg:px-15 py-28">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <SectionLabel index="04" label="Trabalhos Recentes" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-5 mb-14">
            <h2 className="text-[36px] md:text-[44px] font-extrabold text-navy-900 tracking-tight leading-tight">
              Trabalhos Recentes<span className="text-accent">.</span>
            </h2>

            {/* Filter toggle */}
            <div className="flex items-center bg-white border border-card-border rounded-xl p-1 gap-1 self-start">
              {(['highlights', 'all'] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'px-5 py-2 rounded-lg text-[13px] font-medium transition-all',
                    filter === f
                      ? 'bg-navy-950 text-[#E8ECF4] shadow-sm'
                      : 'text-[#8896A8] hover:text-navy-900',
                  )}
                >
                  {f === 'highlights' ? 'Destaques' : 'Todos'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} onClick={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  )
}
