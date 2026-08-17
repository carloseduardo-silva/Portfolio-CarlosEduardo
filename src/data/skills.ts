export type TechGroup = {
  category: string
  items: string[]
}

export const techGroups: TechGroup[] = [
  { category: 'Frontend Core',              items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', '.NET'] },
  { category: 'Frameworks & Libs',          items: ['React', 'Next.js', 'jQuery', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Backend & Banco de Dados',   items: ['C#', 'Python', 'MySQL', 'PostgreSQL', 'Firebase', 'SQL'] },
  { category: 'Ferramentas & Metodologias', items: ['Git', 'GitHub', 'Jest', 'Playwright', 'DevTools', 'Canva', 'SCRUM'] },
]

export type Service = {
  title: string
  description: string
}

export const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Desenvolvo sistemas web, sites instituicionais, blogs, portfólios, landing pages de alta conversão de forma responsiva e atrativa, além de apresentar uma estrutura de código sempre limpa e organizada.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Produção de interfaces harmônicas, objetivas e principalmente interativas a fim de proporcionar a melhor experiência para o usuário',
  },
  {
    title: 'Mobile First',
    description:
      'Desenvolvimento de aplicações 100% responsivas, adaptativas para mobile seja ele tablet ou smartphone.',
  },
  {
    title: 'Banco de Dados',
    description:
      'Possuo conhecimentos em Banco de Dados e pratica com SQL, o qual pode ser aplicado em sistemas web através de sistemas de login, filtros de consulta, paginação de dados, exibição assíncrona e muito mais.',
  },
  {
    title: 'Integração com APIs',
    description:
      'Experiência com manutenção e integração de APIs em Sistemas Web. Atualmente as APIs possuem um papel fundamental nos sistemas, pois elas são o "meio de campo" entre a Base de Dados e a Tela exibida ao cliente. ',
  },
]
