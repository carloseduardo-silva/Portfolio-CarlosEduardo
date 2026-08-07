'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CardRail from '@/components/ui/CardRail'
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
    <section id="projetos" className="bg-surface-light px-6 md:px-10 lg:px-15 py-28">
      <div className="@container/content max-w-[1280px] mx-auto">
        <ScrollReveal>
          <SectionLabel index="04" label="Trabalhos Recentes" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-5 mb-14">
            <h2 className="text-[36px] md:text-[44px] font-extrabold text-ink tracking-tight leading-tight">
              Trabalhos Recentes<span className="text-accent">.</span>
            </h2>

            {/* Filter toggle */}
            <div className="flex items-center bg-surface border border-card-border rounded-xl p-1 gap-1 self-start">
              {(['highlights', 'all'] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'px-5 py-2 rounded-lg text-[13px] font-medium transition-all',
                    filter === f
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-ink-subtle hover:text-ink',
                  )}
                >
                  {f === 'highlights' ? 'Destaques' : 'Todos'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Grid no desktop, trilho deslizável no mobile */}
        <ScrollReveal>
          <CardRail maxCols={3} gap="gap-5" label="Trabalhos recentes">
            {displayed.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} />
            ))}
          </CardRail>
        </ScrollReveal>
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
