import ScrollReveal from '@/components/ui/ScrollReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function About() {
  return (
    <section id="sobre" className="bg-surface-light px-6 md:px-10 lg:px-15 py-28">
      <div className="@container/content max-w-[1280px] mx-auto">
        <ScrollReveal>
          <h2 className="mt-5 text-[36px] md:text-[44px] font-extrabold text-ink tracking-tight leading-tight mb-14">
            Sobre mim<span className="text-accent">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid @3xl/content:grid-cols-[1fr_1.15fr] gap-10 @3xl/content:gap-16 items-start">

          {/* ── Left: stat cards + role + education ─── */}
          <div className="flex flex-col gap-4">
            {/* Stat row */}
            <div className="grid grid-cols-2 gap-4">
              <ScrollReveal>
                <div className="bg-surface rounded-2xl border border-card-border p-6 shadow-sm">
                  <p className="text-[42px] font-extrabold text-ink leading-none tracking-tightest">2<span className="text-accent">+</span></p>
                  <p className="text-[13px] text-ink-subtle mt-1.5 leading-snug">Anos de<br />experiência</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="bg-surface rounded-2xl border border-card-border p-6 shadow-sm">
                  <p className="text-[42px] font-extrabold text-ink leading-none tracking-tightest">15<span className="text-accent">+</span></p>
                  <p className="text-[13px] text-ink-subtle mt-1.5 leading-snug">Projetos<br />entregues</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Current role card */}
            <ScrollReveal>
              <div className="bg-surface rounded-2xl p-6 border border-card-border shadow-sm">
                <span className="font-mono text-[10px] text-accent-text uppercase tracking-[0.2em] block mb-3">
                  Cargo atual
                </span>
                <p className="text-[15px] font-semibold text-ink leading-snug">
                  Desenvolvedor Front-End
                </p>
                <p className="text-[13px] text-ink-subtle mt-1">
                  Instituto Pedro Ruiz
                </p>
              </div>
            </ScrollReveal>

            {/* Education card */}
            <ScrollReveal>
              <div className="bg-surface rounded-2xl border border-card-border p-6 shadow-sm">
                <span className="font-mono text-[10px] text-accent-text uppercase tracking-[0.2em] block mb-3">
                  Formação
                </span>
                <p className="text-[15px] font-semibold text-ink leading-snug">
                  Ciência da Computação
                </p>
                <p className="text-[13px] text-ink-subtle mt-1">
                  Universidade Federal do ABC — UFABC
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: bio paragraphs ─── */}
          <ScrollReveal className="flex flex-col gap-5 text-[15.5px] text-ink-muted leading-relaxed">
            <p>
              Meu nome é <strong className="text-ink font-semibold">Carlos Eduardo da Silva</strong> e a paixão
              por programação nasceu lá em 2019 quando participei de uma aula de Desenvolvimento Web no meu primeiro
              curso de informática, dali em diante foram anos de muito estudo e prática, os quais hoje me permitem
              estar atuando como <strong className="text-ink font-semibold">Desenvolvedor Front-End</strong> à 2 anos.
            </p>
            <p>
              Como desenvolvedor possuo experiência em criação de sites, landing pages, e-commerces e sistemas web,
              utilizando as mais <strong className="text-ink font-semibold">diversas</strong> tecnologias do mercado.
            </p>

            {/* <p> Front-end, também possuo conhecimentos em Criação e Integração de APIs utilizando{' '}
              <strong className="text-ink font-semibold">C# e Python</strong>, sistemas de versionamento de
              código <strong className="text-ink font-semibold">(Git e GitHub)</strong>, testes unitários e
              depuração de código{' '}
              <strong className="text-ink font-semibold">(Jest e DevTools)</strong>, além da vivência com
              metodologias ágeis <strong className="text-ink font-semibold">(SCRUM e KANBAN)</strong>.
            </p> */}


            <p>
              Atualmente, estou atuando no{' '}
              <a
                href="https://institutopedroruiz.com.br/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink hover:text-accent-text transition-colors underline underline-offset-2"
              >
                Instituto Pedro Ruiz
              </a>
              , onde sou Desenvolvedor Front-End responsável pelo desenvolvimento do CRM próprio do instituto e
              manutenção dos sistemas web utilizados dentro da empresa, além de realizar freelances atuando como{' '}
              <strong className="text-ink font-semibold">Web Developer</strong> na criação de e-commerces,
              landing pages e páginas institucionais. Paralelo a carreira profissional, estou cursando a graduação
              em Ciência de Computação pela{' '}
              <strong className="text-ink font-semibold">Universidade Federal do ABC.</strong>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
