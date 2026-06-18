// ─── Portfolio Data ──────────────────────────────────────────────────────────
// Edite este arquivo para atualizar todo o conteúdo do portfólio em um só lugar.

export const navItems = [
  { label: 'Início',       href: '#inicio' },
  { label: 'Sobre',        href: '#sobre' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Tecnologias',  href: '#tecnologias' },
  { label: 'Projetos',     href: '#projetos' },
  { label: 'Contato',      href: '#contato' },
]

// ─── Experience ───────────────────────────────────────────────────────────────
export interface Experience {
  company: string
  role: string
  period: string
  tags: string[]
  description: string
}

export const experiences: Experience[] = [
  {
    company: 'Instituto Pedro Ruiz',
    role: 'Desenvolvedor Front-End',
    period: 'Jul 2025 – Atualmente',
    tags: ['React', 'TypeScript', 'CRM', 'UI|UX'],
    description:
      'Responsável por todo o desenvolvimento do Front-End do CRM próprio do instituto, desde o Design UI|UX das telas até a produção e integração com as APIs do backend. Realizo também a manutenção dos sistemas web da empresa, como site institucional e landing pages.',
  },
  {
    company: 'Prefeitura Municipal de Santo André/SP',
    role: 'Desenvolvedor Web',
    period: '2024',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    description:
      'Desenvolvimento e manutenção de sistemas web para a Prefeitura Municipal de Santo André/SP, com foco em usabilidade, performance e acessibilidade das interfaces digitais.',
  },
  {
    company: 'Endolife HealthTech',
    role: 'Web Developer',
    period: '2023 – 2024',
    tags: ['React', 'Landing Pages', 'E-commerce'],
    description:
      'Freelance atuando como Web Developer na criação de e-commerces, landing pages e páginas institucionais para empresa da área de saúde feminina, do design à implementação final.',
  },
  {
    company: 'Digital Max',
    role: 'Web Developer',
    period: '2022 – 2023',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    description:
      'Criação de websites e landing pages institucionais para clientes, com foco em design responsivo, boas práticas de desenvolvimento web e experiência do usuário.',
  },
]

// ─── Technologies ─────────────────────────────────────────────────────────────
export interface TechGroup {
  category: string
  items: string[]
}

export const techGroups: TechGroup[] = [
  { category: 'Frontend Core',             items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks & Libs',         items: ['React', 'Next.js', 'jQuery', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Backend & Banco de Dados',  items: ['C#', 'Python', 'MySQL', 'Firebase', 'SQL'] },
  { category: 'Ferramentas & Metodologias', items: ['Git', 'GitHub', 'Jest', 'DevTools', 'Canva', 'SCRUM', 'KANBAN'] },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export interface Project {
  name: string
  type: string
  featured: boolean
  bg: string          // CSS gradient string used as inline background
  techs: string[]
  href?: string
}

export const projects: Project[] = [
  {
    name: 'Controle de Frotas',
    type: 'Sistema Web',
    featured: true,
    bg: 'linear-gradient(135deg, #1A3C70 0%, #0D1829 100%)',
    techs: ['React', 'TypeScript', 'API REST'],
  },
  {
    name: 'Apostila Virtual — Adélia',
    type: 'Plataforma Educacional',
    featured: true,
    bg: 'linear-gradient(135deg, #2C5899 0%, #192E5C 100%)',
    techs: ['React', 'Firebase', 'CSS3'],
  },
  {
    name: 'Endolife',
    type: 'Site Institucional',
    featured: true,
    bg: 'linear-gradient(135deg, #BF1C1C 0%, #7F1A1A 100%)',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'PUMP GYM',
    type: 'Landing Page',
    featured: false,
    bg: 'linear-gradient(135deg, #262626 0%, #111111 100%)',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: "Barbearia Kadu Corte's",
    type: 'Site Institucional',
    featured: false,
    bg: 'linear-gradient(135deg, #2C2018 0%, #1A1008 100%)',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'Restaurante Bucéfalus',
    type: 'Site Institucional',
    featured: false,
    bg: 'linear-gradient(135deg, #1A4828 0%, #0D2014 100%)',
    techs: ['HTML5', 'CSS3', 'JavaScript'],
  },
]

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contactLinks = [
  {
    label: 'E-mail',
    value: 'desenvolvedorcarloseduardo@gmail.com',
    href: 'mailto:desenvolvedorcarloseduardo@gmail.com',
  },
  {
    label: 'Telefone',
    value: '(13) 97402-2220',
    href: 'tel:+5513974022220',
  },
  {
    label: 'LinkedIn',
    value: '@carloseduardodasilva',
    href: 'https://linkedin.com/in/carloseduardodasilva',
    external: true,
  },
  {
    label: 'GitHub',
    value: '@carloseduardo-silva',
    href: 'https://github.com/carloseduardo-silva',
    external: true,
  },
]

// ─── Typewriter roles ─────────────────────────────────────────────────────────
export const typewriterRoles = [
  'Desenvolvedor Front-End',
  'Web Developer',
  'Engenheiro de Software',
]
