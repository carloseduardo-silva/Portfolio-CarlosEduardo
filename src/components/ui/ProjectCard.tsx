import Image from 'next/image'
import { Project } from '@/data/projects'

type Props = {
  project: Project
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      aria-haspopup="dialog"
      aria-label={`Ver detalhes do projeto ${project.title}`}
      className="group block text-left bg-surface rounded-2xl overflow-hidden border-[1.5px] border-card-border shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(13,24,41,0.10)] hover:border-accent/25 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* Gradient header */}
      <div
        className="relative h-[188px] flex items-end px-5 py-5"
        style={{ background: project.bg }}
      >
        <Image
          src={project.mediaType === 'video' ? project.thumbnail : project.mediaSrc}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 86vw, 420px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative z-10">
          <span className="font-mono text-[9.5px] text-white/50 uppercase tracking-[0.15em] block mb-1">
            {project.type}
          </span>
          <h3 className="text-[17px] font-bold text-white leading-tight tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Footer — min-w-0 deixa a lista de techs quebrar em vez de empurrar
          o "Ver", que fica fixo à direita */}
      <div className="flex items-center justify-between gap-3 px-5 py-3.5">
        <span className="min-w-0 font-mono text-[11.5px] leading-snug text-ink-subtle">
          {project.techs.join(' · ')}
        </span>
        <span className="flex flex-none items-center gap-1.5 text-[12.5px] font-semibold text-accent-text transition-all group-hover:gap-2.5">
          Ver <span aria-hidden>→</span>
        </span>
      </div>
    </button>
  )
}
