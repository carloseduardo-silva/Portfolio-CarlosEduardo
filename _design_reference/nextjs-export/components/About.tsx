import { SectionLabel } from './ui/SectionLabel'

export function About() {
  return (
    <section id="sobre" className="py-28 px-15 bg-surface-light">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel index="01" label="Quem sou" />
          <h2 className="text-[52px] font-extrabold text-navy-900 tracking-tightest leading-none mt-3">
            Sobre mim.
          </h2>
        </div>

        <div className="grid grid-cols-[320px_1fr] gap-20 items-start">

          {/* ── Left: stat cards ─────────────────────────────────────── */}
          <div className="flex flex-col gap-3.5">

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { num: '2+',  desc: 'anos de\nexperiência' },
                { num: '15+', desc: 'projetos\nentregues' },
              ].map((s) => (
                <div
                  key={s.num}
                  className="p-5 bg-card-bg rounded-xl border border-card-border-blue"
                >
                  <p className="text-[40px] font-extrabold text-accent tracking-tightest leading-none">
                    {s.num}
                  </p>
                  <p className="text-xs text-[#7A8CA8] mt-1.5 leading-snug font-medium whitespace-pre-line">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Current role */}
            <div className="p-5 bg-navy-950 rounded-xl">
              <p className="font-mono text-[10px] text-accent uppercase tracking-[0.15em] mb-2.5">
                Atualmente
              </p>
              <p className="text-[15px] font-bold text-[#E8ECF4] leading-tight mb-1">
                Instituto Pedro Ruiz
              </p>
              <p className="text-xs text-[#E8ECF4]/40">Desenvolvedor Front-End</p>
            </div>

            {/* Education */}
            <div className="flex items-center gap-3.5 p-4.5 rounded-xl border border-card-border">
              <div className="flex-none w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-gradient-to-br from-accent to-[#2563EB]">
                🎓
              </div>
              <div>
                <p className="text-[13px] font-semibold text-navy-900 leading-tight">
                  Ciência da Computação
                </p>
                <p className="text-[11.5px] text-[#8896A8] mt-0.5">
                  Universidade Federal do ABC
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: bio text ──────────────────────────────────────── */}
          <div className="flex flex-col gap-5 pt-0.5">
            <p className="text-[16px] text-[#4A5568] leading-[1.88]">
              Meu nome é{' '}
              <strong className="text-navy-900 font-bold">Carlos Eduardo da Silva</strong> e a
              paixão por programação nasceu lá em 2019 quando participei de uma aula de
              Desenvolvimento Web no meu primeiro curso de informática, dali em diante foram anos
              de muito estudo e prática, os quais hoje me permitem estar atuando como{' '}
              <strong className="text-accent font-semibold">Desenvolvedor Front-End</strong> à 2 anos.
            </p>

            <p className="text-[16px] text-[#4A5568] leading-[1.88]">
              Como desenvolvedor possuo experiência em criação de Aplicações Web e Design de
              Interfaces Interativas utilizando as mais diversas tecnologias de Front-end, também
              possuo conhecimentos em Criação e Integração de APIs utilizando{' '}
              <strong className="text-navy-900 font-semibold">C# e Python</strong>, sistemas de
              versionamento de código{' '}
              <strong className="text-navy-900 font-semibold">(Git e GitHub)</strong>, testes
              unitários e depuração de código{' '}
              <strong className="text-navy-900 font-semibold">(Jest e DevTools)</strong>, além da
              vivência com metodologias ágeis{' '}
              <strong className="text-navy-900 font-semibold">(SCRUM e KANBAN)</strong>.
            </p>

            <p className="text-[16px] text-[#4A5568] leading-[1.88]">
              Atualmente, estou atuando no{' '}
              <strong className="text-navy-900 font-semibold">Instituto Pedro Ruiz</strong>, onde
              sou Desenvolvedor Front-End responsável pelo desenvolvimento do CRM próprio do
              instituto e manutenção dos sistemas web utilizados dentro da empresa, além de
              realizar freelances atuando como{' '}
              <strong className="text-accent font-semibold">Web Developer</strong> na criação de
              e-commerces, landing pages e páginas institucionais. Paralelo a carreira profissional,
              estou cursando a graduação em{' '}
              <strong className="text-navy-900 font-semibold">Ciência de Computação</strong> pela{' '}
              <strong className="text-navy-900 font-semibold">Universidade Federal do ABC.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
