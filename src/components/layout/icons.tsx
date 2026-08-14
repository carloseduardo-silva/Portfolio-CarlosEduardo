import type { NavIconName, SocialName } from '@/data/portfolio'

// SVGs inline: o legado carregava Iconify e Material Symbols por CDN, o que o
// CLAUDE.md agora proíbe. Todos herdam `currentColor` e são decorativos —
// o rótulo textual ao lado já carrega a semântica.
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const navPaths: Record<NavIconName, React.ReactNode> = {
  inicio: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v9.5h13V10" /></>,
  sobre: <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>,
  experiencias: <><rect x="3" y="7.5" width="18" height="12.5" rx="2" /><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" /><path d="M3 12.5h18" /></>,
  tecnologias: <><rect x="2.5" y="4.5" width="19" height="12" rx="2" /><path d="M8.5 20h7M12 16.5V20" /></>,
  projetos: <><path d="M3 7a2 2 0 0 1 2-2h3.6l2 2.5H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
  contato: <><path d="M4 6.5C4 5.1 5.1 4 6.5 4h1.2c.6 0 1.1.4 1.2 1l.7 3c.1.5-.1 1-.5 1.3l-1.3 1a12 12 0 0 0 5.9 5.9l1-1.3c.3-.4.8-.6 1.3-.5l3 .7c.6.1 1 .6 1 1.2v1.2c0 1.4-1.1 2.5-2.5 2.5A15.5 15.5 0 0 1 4 6.5" /></>,
}

export function NavIcon({ name }: { name: NavIconName }) {
  return <svg {...base}>{navPaths[name]}</svg>
}

const socialPaths: Record<SocialName, React.ReactNode> = {
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M8 10.5V17M8 7.4v.1" /><path d="M12 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" /></>,
  github: <><path d="M9 19c-4 1.3-4-2.2-5.5-2.7M15 21v-3.4c0-.9-.1-1.6-.6-2.1 2.3-.3 4.6-1.2 4.6-5.1a4 4 0 0 0-1.1-2.8 3.7 3.7 0 0 0-.1-2.8s-.9-.3-3 1.1a10.2 10.2 0 0 0-5.4 0C7.3 4.5 6.4 4.8 6.4 4.8a3.7 3.7 0 0 0-.1 2.8A4 4 0 0 0 5.2 10.4c0 3.9 2.3 4.8 4.6 5.1-.4.4-.6 1-.6 1.7V21" /></>,
  whatsapp: <><path d="M3.5 20.5 4.8 16A8.2 8.2 0 1 1 8 19.2z" /><path d="M9 9.2c0 3 2.4 5.5 5.4 5.5.5 0 1-.4 1-.9v-.9l-1.8-.7-.9.9a5.6 5.6 0 0 1-2.1-2.1l.9-.9-.7-1.8h-.9c-.5 0-.9.4-.9 1z" /></>,
}

export function SocialIcon({ name }: { name: SocialName }) {
  return <svg {...base} width={18} height={18}>{socialPaths[name]}</svg>
}
