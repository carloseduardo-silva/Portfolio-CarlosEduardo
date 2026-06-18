import { Project } from '@/data/projects'

type Props = {
  project: Project
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      className="flex flex-col justify-center items-center m-4 mb-[5px] cursor-pointer group hover:scale-110 transition-transform duration-[550ms]"
      onClick={() => onClick(project)}
    >
      <div className="flex flex-col items-center mb-[-16.85px] relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-[300px] h-[190px] border border-blue object-cover"
        />
        <div className="absolute bottom-[106px] text-mint font-bold text-[21px]">
          <p>{project.title}</p>
        </div>
      </div>

      <div className="opacity-0 group-hover:opacity-100 group-hover:flex hidden bg-navy px-[1.06rem] pt-[0.85rem] pb-4 relative bottom-[15px] w-[90%] items-center justify-between rounded-b-[2rem] animate-[showDown_0.55s_forwards]">
        <p className="text-mint text-[13px]">{project.dateLabel}</p>
        <span className="no-underline px-[10px] py-2 border border-blue text-mint rounded-[10px] text-[13px] hover:text-blue cursor-pointer">
          Ver Mais
        </span>
      </div>
    </div>
  )
}
