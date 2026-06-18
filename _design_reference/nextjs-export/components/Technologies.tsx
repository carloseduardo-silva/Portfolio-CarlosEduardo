import { techGroups } from '@/data/portfolio'
import { SectionLabel } from './ui/SectionLabel'

export function Technologies() {
  return (
    <section id="tecnologias" className="py-28 px-15 bg-surface-light">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel index="03" label="Tecnologias" />
          <h2 className="text-[52px] font-extrabold text-navy-900 tracking-tightest leading-none mt-3">
            Stack &amp; Ferramentas.
          </h2>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-11">
          {techGroups.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-[10.5px] text-[#9AAABB] uppercase tracking-[0.25em] mb-4 font-medium">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 bg-white border-[1.5px] border-card-border rounded-lg text-[13.5px] font-medium text-[#3A4A5E] shadow-sm cursor-default transition-all duration-150 hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(75,123,229,0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
