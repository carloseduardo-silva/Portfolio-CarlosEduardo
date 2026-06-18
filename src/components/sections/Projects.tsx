'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects, highlightProjects, Project } from '@/data/projects'

type Tab = 'highlights' | 'all'

export default function Projects() {
  const [tab, setTab] = useState<Tab>('highlights')
  const [selected, setSelected] = useState<Project | null>(null)

  const displayedProjects = tab === 'highlights' ? highlightProjects : projects

  const currentIndex = selected ? displayedProjects.findIndex((p) => p.id === selected.id) : -1

  const handlePrev = currentIndex > 0 ? () => setSelected(displayedProjects[currentIndex - 1]) : null
  const handleNext =
    currentIndex < displayedProjects.length - 1 ? () => setSelected(displayedProjects[currentIndex + 1]) : null

  return (
    <ScrollReveal>
      <section
        id="projects"
        className="flex flex-col items-center justify-center p-4 lg:mt-[11.4em] lg:mb-20"
      >
        <h2 className="text-[2.3em] text-navy mb-7">Projetos</h2>

        {/* Filter nav */}
        <nav className="flex flex-row items-center justify-center gap-8 text-navy mb-8">
          <div
            onClick={() => setTab('highlights')}
            className={`px-3 py-[6px] cursor-pointer hover:text-blue-mid transition-colors ${
              tab === 'highlights' ? 'border-b-[2.2px] border-blue-mid' : ''
            }`}
          >
            Destaques
          </div>
          <div
            onClick={() => setTab('all')}
            className={`px-3 py-[6px] cursor-pointer hover:text-blue-mid transition-colors ${
              tab === 'all' ? 'border-b-[2.2px] border-blue-mid' : ''
            }`}
          >
            Todos
          </div>
        </nav>

        {/* Project grid */}
        <div className="flex flex-row items-center justify-center flex-wrap">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} />
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </section>
    </ScrollReveal>
  )
}
