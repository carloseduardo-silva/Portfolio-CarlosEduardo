import ScrollReveal from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { contactLinks } from '@/data/portfolio'

const icons: Record<string, string> = {
  'Instagram':    'ig',
  'Telefone':  '📞',
  'LinkedIn':  'in',
  'GitHub':    '</>',
}

export default function Contacts() {
  return (
    <section id="contato" className="bg-surface-light px-6 md:px-10 lg:px-15 py-28">
      <div className="@container/content max-w-[1280px] mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <SectionLabel index="05" label="Contato" centered />
          <h2 className="mt-5 text-[36px] md:text-[44px] font-extrabold text-ink tracking-tight leading-tight mb-4">
            Vamos conversar<span className="text-accent">?</span>
          </h2>
          <p className="text-[15px] text-ink-muted max-w-[420px] leading-relaxed mb-14">
            Estou disponível para novas oportunidades, freelas e parcerias.
            Sinta-se à vontade para entrar em contato!
          </p>
        </ScrollReveal>

        {/* Contact cards 2×2 */}
        <div className="grid grid-cols-1 @lg/content:grid-cols-2 gap-4 w-full max-w-[720px]">
          {contactLinks.map((c) => (
            <ScrollReveal key={c.label}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 p-6 bg-surface border border-card-border shadow-sm rounded-2xl transition-all hover:bg-accent/[0.05] hover:border-accent/30 text-left"
              >
                {/* Icon */}
                <div
                  aria-hidden
                  className="flex-none w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20 font-mono text-[15px] font-bold text-accent-text group-hover:bg-accent/20 transition-all"
                >
                  {icons[c.label]}
                </div>

                {/* Text — min-w-0 + break-words para o e-mail, que é um token
                    longo sem espaços e estouraria o card em telas estreitas */}
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-accent-text uppercase tracking-[0.15em] mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-[14px] font-medium text-ink-muted group-hover:text-ink transition-colors break-words">
                    {c.value}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-card-border w-full text-center">
          <p className="font-mono text-[11px] text-ink-subtle tracking-[0.05em]">
            © 2025 Carlos Eduardo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
