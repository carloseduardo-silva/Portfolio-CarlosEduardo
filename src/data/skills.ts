export type Skill = {
  name: string
  icon: string
  fontSize?: string
}

export const skills: Skill[] = [
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', fontSize: '15px' },
  { name: 'Jquey', icon: 'devicon-jquery-plain', fontSize: '15px' },
  { name: 'React', icon: 'devicon-react-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'Github', icon: 'devicon-github-plain' },
  { name: 'Jest', icon: 'devicon-jest-plain' },
  { name: 'MySQL', icon: 'devicon-mysql-plain' },
  { name: 'Firebase', icon: 'devicon-firebase-plain' },
  { name: 'SQL', icon: 'devicon-redis-plain' },
  { name: 'BootStrap', icon: 'devicon-bootstrap-plain', fontSize: '14px' },
  { name: 'TailWind', icon: 'devicon-tailwindcss-plain' },
  { name: 'Canva', icon: 'devicon-canva-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'WordPress', icon: 'devicon-wordpress-plain' },
  { name: 'C#', icon: 'devicon-csharp-plain' },
  { name: '.NET', icon: 'devicon-dotnetcore-plain' },
  { name: 'Next', icon: 'devicon-nextjs-line' },
]

export type Service = {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'desktop_windows',
    title: 'Web Development',
    description:
      'Desenvolvo sistemas web, sites instituicionais, blogs, portfólios, landing pages de alta conversão de forma responsiva e atrativa, além de apresentar uma estrutura de código sempre limpa e organizada.',
  },
  {
    icon: 'design_services',
    title: 'UI/UX Design',
    description:
      'Produção de interfaces harmônicas, objetivas e principalmente interativas a fim de proporcionar a melhor experiência para o usuário',
  },
  {
    icon: 'mobile_friendly',
    title: 'Mobile First',
    description:
      'Desenvolvimento de aplicações 100% responsivas, adaptativas para mobile seja ele tablet ou smartphone.',
  },
  {
    icon: 'database',
    title: 'Banco de Dados',
    description:
      'Possuo conhecimentos em Banco de Dados e pratica com SQL, o qual pode ser aplicado em sistemas web através de sistemas de login, filtros de consulta, paginação de dados, exibição assíncrona e muito mais.',
  },
  {
    icon: 'network_intelligence_update',
    title: 'Integração com APIs',
    description:
      'Experiência com manutenção e integração de APIs em Sistemas Web. Atualmente as APIs possuem um papel fundamental nos sistemas, pois elas são o "meio de campo" entre a Base de Dados e a Tela exibida ao cliente. ',
  },
]
