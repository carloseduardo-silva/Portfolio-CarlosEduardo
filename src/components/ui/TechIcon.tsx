'use client'

import type { ComponentType, SVGProps } from 'react'
import {
  SiBootstrap,
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiDotnet,
  SiJest,
  SiJquery,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

/**
 * Ícones das tecnologias de `data/skills.ts`.
 *
 * `'use client'` não é preferência: o `IconBase` do react-icons renderiza um
 * `IconContext.Consumer`, e Context não existe em Server Component. A fronteira
 * fica aqui, num único componente que recebe só a string do nome — assim
 * `Skills.tsx` continua sendo Server Component.
 *
 * O legado carregava esses logos por CDN (Devicon), o que o CLAUDE.md proíbe;
 * o react-icons entrega os mesmos glifos como SVG inline e com tree-shaking.
 */

type IconProps = SVGProps<SVGSVGElement>

// Mesmo traço de layout/icons.tsx. Os glifos de marca do Simple Icons são
// preenchidos; `strokeWidth 2` deixa os desenhados aqui com peso equivalente
// no tamanho em que as pills os exibem.
const outline = {
  viewBox: '0 0 24 24',
  width: '1em',
  height: '1em',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** SQL — sem logo de marca (é a linguagem, não um produto). */
function SqlIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </svg>
  )
}

/** DevTools — o inspetor do browser não tem marca própria. */
function DevToolsIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <path d="M9 7.5 4 12l5 4.5" />
      <path d="M15 7.5 20 12l-5 4.5" />
    </svg>
  )
}

/** Canva — o Simple Icons removeu a marca; aproximação do monograma. */
function CanvaIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M15 9.6a3.4 3.4 0 0 0-4.8.5c-1.3 1.7-1.2 4 .2 5 1 .8 2.4.4 3.2-.6" />
    </svg>
  )
}



/** SCRUM — metodologia: quadro de colunas. */
function ScrumIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16M15 4v16" />
    </svg>
  )
}

/**
 * Indexado pelo nome exato do item em `data/skills.ts` — os dados seguem sem
 * lógica, e qualquer renomeação de export do react-icons se conserta só aqui.
 */
const techIcons: Record<string, ComponentType<IconProps>> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  jQuery: SiJquery,
  Bootstrap: SiBootstrap,
  'Tailwind CSS': SiTailwindcss,
  'C#': SiSharp,
  Python: SiPython,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  SQL: SqlIcon,
  Git: SiGit,
  GitHub: SiGithub,
  Jest: SiJest,
  DevTools: DevToolsIcon,
  Canva: CanvaIcon,
  SCRUM: ScrumIcon,
  PostgreSQL: SiPostgresql,
  Playwright: DevToolsIcon,
  '.NET': SiDotnet
}

/**
 * Decorativo: o rótulo da pill ao lado já carrega a semântica.
 * Herda `currentColor`, então acompanha o hover da pill sem cor própria.
 */
export default function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = techIcons[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden />
}
