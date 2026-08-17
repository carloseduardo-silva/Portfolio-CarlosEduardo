import CardRail from '@/components/ui/CardRail'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TechIcon from '@/components/ui/TechIcon'
import { services, techGroups } from '@/data/skills'

export default function Skills() {
  return (
    <section id="tecnologias" className="bg-surface-light px-6 md:px-10 lg:px-15 py-18 md:py-24">
      <div className="@container/content max-w-[1280px] mx-auto">
        <ScrollReveal>
          <h2 className="mt-5 text-[36px] md:text-[44px] font-extrabold text-ink tracking-tight leading-tight mb-14">
            Stack & Ferramentas<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        {/* `auto-rows-fr` iguala as duas linhas do grid; o `h-full` no
            ScrollReveal repassa essa altura, senão o card para no conteúdo. */}
        <div className="grid @xl/content:grid-cols-2 @xl/content:auto-rows-fr gap-6">
          {techGroups.map((group) => (
            <ScrollReveal key={group.category} className="h-full">
              <div className="h-full bg-surface rounded-2xl border border-card-border p-7 shadow-sm">
                <span className="font-mono text-[10px] text-accent-text uppercase tracking-[0.2em] block mb-5">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 pl-3 pr-3.5 py-1.5 rounded-full bg-surface-muted border border-card-border text-[13px] font-medium text-ink transition-all hover:bg-accent/10 hover:border-accent/30 hover:text-accent-text cursor-default"
                    >
                      {/* Monocromático: herda `currentColor`, então acompanha o hover da pill */}
                      <TechIcon name={item} className="w-3.5 h-3.5 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Habilidades */}
        <ScrollReveal>
          <h2 className="mt-22 text-[36px] md:text-[40px] font-extrabold text-ink tracking-tight leading-tight mb-12">
            Habilidades
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <CardRail variant="rail" maxCols={3} gap="gap-6" label="Habilidades">
            {services.map((service, i) => (
              <div
                key={service.title}
                // sem `h-full`: altura percentual contra o trilho (altura
                // indefinida) vira cross-size definido e desliga o `items-stretch`
                className="flex flex-col bg-surface rounded-2xl border border-card-border p-7 shadow-sm transition-all hover:border-accent/25 hover:shadow-[0_20px_44px_rgba(13,24,41,0.08)]"
              >
                <span className="font-mono text-[11px] font-medium text-accent-text tracking-[0.25em] block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[17px] font-bold text-ink tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-[14px] text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </CardRail>
        </ScrollReveal>
      </div>
    </section>
  )
}
