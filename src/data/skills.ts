export type TechGroup = {
  category: string
  items: string[]
}

export const techGroups: TechGroup[] = [
  { category: 'Frontend Core',              items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks & Libs',          items: ['React', 'Next.js', 'jQuery', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Backend & Banco de Dados',   items: ['C#', 'Python', 'MySQL', 'Firebase', 'SQL'] },
  { category: 'Ferramentas & Metodologias', items: ['Git', 'GitHub', 'Jest', 'DevTools', 'Canva', 'SCRUM', 'KANBAN'] },
]
