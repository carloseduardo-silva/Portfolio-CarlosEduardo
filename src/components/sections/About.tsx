import ScrollReveal from '@/components/ui/ScrollReveal'

export default function About() {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="flex flex-col items-center justify-center px-3 py-8 mt-16 md:h-screen md:w-[70%]"
      >
        <h2 className="text-[2.3em] text-navy mb-[5px]">Quem sou </h2>

        <p className="text-center mx-4 mb-[10px] text-[rgb(47,47,47)] text-[17px] md:text-[18.5px] leading-[1.6]">
          Meu nome é Carlos Eduardo da Silva e a paixão por programação nasceu lá em 2019 quando participei de uma
          aula de Desenvolvimento Web no meu primeiro curso de informática, dali em diante foram anos de muito
          estudo e prática, os quais hoje me permitem estar atuando como{' '}
          <strong>Desenvolvedor Front-End</strong> à 2 anos.
        </p>

        <p className="text-center mx-4 mb-[10px] text-[rgb(47,47,47)] text-[17px] md:text-[18.5px] leading-[1.6]">
          Como desenvolvedor possuo experiência em criação de Aplicações Web e Design de Interfaces Interativas
          utilizando as mais <strong>diversas</strong> tecnologias de Front-end, também possuo conhecimentos em
          Criação e Integração de APIs utilizando <strong>C# e Python</strong>, sistemas de versionamento de
          código <strong>(Git e GitHub)</strong>, testes unitários e depuração de código <strong>(Jest e
            DevTools)</strong>, além da vivência com metodologias ágeis{' '}
          <strong>(SCRUM e KANBAN)</strong>.
        </p>

        <p className="text-center mx-4 mb-[10px] text-[rgb(47,47,47)] text-[17px] md:text-[18.5px] leading-[1.6]">
          Atualmente, estou atuando no{' '}
          <strong>
            <a style={{ color: 'black' }} target="_blank" rel="noreferrer" href="https://institutopedroruiz.com.br/">
              Instituto Pedro Ruiz
            </a>
          </strong>
          , onde sou Desenvolvedor Front-End responsável pelo desenvolvimento do CRM próprio do instituto e
          manutenção dos sistemas web utilizados dentro da empresa, além de realizar freelances atuando como{' '}
          <strong>Web Developer</strong> na criação de e-commerces, landing pages e páginas institucionais.
          Paralelo a carreira profissional, estou cursando a graduação em Ciência de Computação pela{' '}
          <strong>Universidade Federal do ABC.</strong>
        </p>
      </section>
    </ScrollReveal>
  )
}
