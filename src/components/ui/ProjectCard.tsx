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
      className="group block w-full text-left bg-white rounded-2xl overflow-hidden border-[1.5px] border-card-border shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(13,24,41,0.10)] hover:border-accent/25 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* Gradient header */}
      <div
        className="relative h-[188px] flex items-end px-5 py-5"
        style={{ background: project.bg }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="relative z-10">
          <span className="font-mono text-[9.5px] text-white/50 uppercase tracking-[0.15em] block mb-1">
            {project.type}
          </span>
          <h3 className="text-[17px] font-bold text-white leading-tight tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3.5">
        <span className="font-mono text-[11.5px] text-[#9AAABB]">
          {project.techs.join(' · ')}
        </span>
        <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-accent transition-all group-hover:gap-2.5">
          Ver <span aria-hidden>→</span>
        </span>
      </div>
    </button>
  )
}
