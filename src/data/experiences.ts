export type Experience = {
  id: string
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'tou',
    company: 'Two Of Us',
    role: 'Partner e Desenvolvedor Front-End',
    period: 'Mai 2026 - Atualmente',
    description:
      'Partner e Front-End developer na empresa de tecnologia Two Of Us BR (TOU), atuando no desenvolvimento de um sistema ERP e um CRM WhatsApp-first. No dia a dia, transformo fluxos de atendimento e processos complexos em telas simples de usar com React, TypeScript e Next.js, além de criar e manter componentes reutilizáveis e escaláveis para o sistema. Também sou responsável por implementar integrações com APIs externas, garantindo que os dados fluam de forma eficiente entre diferentes sistemas.',
    tags: ['React', 'TypeScript', 'CRM', 'UI|UX'],
  },
  {
    id: 'ipr',
    company: 'Instituto Pedro Ruiz',
    role: 'Desenvolvedor Front-End',
    period: 'Jul 2025 - Mai 2026',
    description:
      'Operar no desenvolvimento do CRM próprio do instituto, fui responsável por todo o desenvolvimento do Front-End do sistema desde o Design UI|UX das telas até a produção e integração com as APIs do backend. Além da manutenção dos outros sistemas web utilizados dentro da empresa, como o site institucional e landing pages.',
    tags: ['React', 'TypeScript', 'CRM', 'UI|UX'],
  },
  {
    id: 'prefeitura',
    company: 'Prefeitura Municipal de Santo André/SP',
    role: 'Desenvolvedor Frontend',
    period: 'Mai 2024 - Jul 2025',
    description:
      ' Responsável por operar na criação do conteúdo, estilos, layout, design interativo, funcionalidades e integrações com API dos Sistemas Web da Prefeitura de Santo André. Suporte e manutenção de bugs dos sites apresentados pelos setores da saúde, RH, segurança, frotas, além da vivência e prática atuando sob Metodologias Ágeis (SCRUM e KANBAN).',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'SCRUM'],
  },
  {
    id: 'endolife',
    company: 'Endolife HealthTech',
    role: 'Web Developer e UI Designer',
    period: 'Jan 2024 - Mai 2024',
    description:
      'Webdesign e desenvolvimento de Site Intitucional + Landing Pages de alta conversão para empresa, incluindo a criação do conteúdo, estilos, interatividades, layout e design não só interativo do site, mas também responsivo sendo adaptativo para tablets e celulares.  ',
    tags: ['React', 'Landing Pages', 'E-commerce'],
  },
  {
    id: 'digital-max',
    company: 'Digital Max',
    role: 'Auxiliar de Informática',
    period: 'Jul 2019 - Dez 2019',
    description:
      'Primeira experiência profissional na área, onde era responsável por auxiliar os novos alunos nas aulas de informática e computação, preparação do material das aulas de informática e suporte aos professores durante os plantões de dúvidas. Tive contato com tecnologias como: Pacote Office, Excel, PowerPoint, Word, Sistema Operacional Linux',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
]
