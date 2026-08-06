import ScrollReveal from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { techGroups, services } from '@/data/skills'

export default function Skills() {
  return (
    <section id="tecnologias" className="bg-surface-light px-6 md:px-10 lg:px-15 py-28">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <SectionLabel index="03" label="Stack & Ferramentas" />
          <h2 className="mt-5 text-[36px] md:text-[44px] font-extrabold text-navy-900 tracking-tight leading-tight mb-14">
            Stack & Ferramentas<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {techGroups.map((group) => (
            <ScrollReveal key={group.category}>
              <div className="bg-white rounded-2xl border border-card-border p-7 shadow-sm">
                <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-5">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-surface-muted border border-card-border text-[13px] font-medium text-navy-900 transition-all hover:bg-accent/10 hover:border-accent/30 hover:text-accent cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
