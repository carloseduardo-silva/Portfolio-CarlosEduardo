import { contactLinks } from '@/data/portfolio'
import { SectionLabel } from './ui/SectionLabel'

export function Contact() {
  return (
    <section id="contato" className="py-28 px-15 bg-navy-950">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-18">
          <div className="flex items-center justify-center gap-3.5 mb-5">
            <span className="w-7 h-px bg-accent/40" />
            <SectionLabel index="05" label="Contato" dark centered />
            <span className="w-7 h-px bg-accent/40" />
          </div>
          <h2 className="text-[60px] font-extrabold text-[#E8ECF4] tracking-tightest leading-none mb-4">
            Vamos conversar?
          </h2>
          <p className="text-[15px] text-[#E8ECF4]/38 max-w-[420px] mx-auto leading-relaxed">
            Estou disponível para novos projetos e oportunidades. Entre em contato!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 gap-3.5 max-w-[620px] mx-auto mb-18">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="block p-6 bg-white/[0.03] border border-white/[0.07] rounded-xl transition-all hover:border-accent/40 hover:bg-accent/[0.05] hover:-translate-y-0.5"
            >
              <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-2.5 font-medium">
                {link.label}
              </p>
              <p className="text-[13px] text-[#E8ECF4]/60 break-all">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.05] pt-9 text-center">
          <p className="font-mono text-[12px] text-[#E8ECF4]/18 tracking-wide">
            © 2025 Carlos Eduardo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
