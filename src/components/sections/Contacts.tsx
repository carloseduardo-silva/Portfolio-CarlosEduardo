import ScrollReveal from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { contactLinks } from '@/data/portfolio'

const icons: Record<string, string> = {
  'E-mail':    '✉',
  'Telefone':  '📞',
  'LinkedIn':  'in',
  'GitHub':    '</>',
}

export default function Contacts() {
  return (
    <section id="contato" className="bg-navy-950 px-6 md:px-10 lg:px-15 py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <SectionLabel index="05" label="Contato" dark centered />
          <h2 className="mt-5 text-[36px] md:text-[44px] font-extrabold text-[#E8ECF4] tracking-tight leading-tight mb-4">
            Vamos conversar<span className="text-accent">?</span>
          </h2>
          <p className="text-[15px] text-[#E8ECF4]/40 max-w-[420px] leading-relaxed mb-14">
            Estou disponível para novas oportunidades, freelas e parcerias.
            Sinta-se à vontade para entrar em contato!
          </p>
        </ScrollReveal>

        {/* Contact cards 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[720px]">
          {contactLinks.map((c) => (
            <ScrollReveal key={c.label}>
              <a
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 p-6 bg-white/[0.04] border border-white/[0.08] rounded-2xl transition-all hover:bg-accent/[0.08] hover:border-accent/25 text-left"
              >
                {/* Icon */}
                <div
                  aria-hidden
                  className="flex-none w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20 font-mono text-[15px] font-bold text-accent group-hover:bg-accent/20 transition-all"
                >
                  {icons[c.label]}
                </div>

                {/* Text */}
                <div>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-[0.15em] mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-[14px] font-medium text-[#E8ECF4]/70 group-hover:text-[#E8ECF4] transition-colors">
                    {c.value}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] w-full text-center">
          <p className="font-mono text-[11px] text-[#E8ECF4]/25 tracking-[0.05em]">
            © 2025 Carlos Eduardo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
