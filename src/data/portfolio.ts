export const typewriterRoles = [
  'Desenvolvedor Front-End',
  'Web Developer',
  'Engenheiro de Software',
]

/** Chave do ícone renderizado por `components/layout/icons.tsx`. */
export type NavIconName = 'inicio' | 'sobre' | 'experiencias' | 'tecnologias' | 'projetos' | 'contato'

export const navItems: { label: string; href: string; icon: NavIconName }[] = [
  { label: 'Início', href: '#inicio', icon: 'inicio' },
  { label: 'Sobre', href: '#sobre', icon: 'sobre' },
  { label: 'Experiências', href: '#experiencias', icon: 'experiencias' },
  { label: 'Tecnologias', href: '#tecnologias', icon: 'tecnologias' },
  { label: 'Projetos', href: '#projetos', icon: 'projetos' },
  { label: 'Contato', href: '#contato', icon: 'contato' },
]

export type SocialName = 'whatsapp' | 'linkedin' | 'github'

/** Compartilhado entre a Sidebar e o Hero. */
export const socialLinks: { label: string; href: string; icon: SocialName }[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/carlos-eduardo-da-silva-050403235', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/carloseduardo-silva', icon: 'github' },
  { label: 'WhatsApp', href: 'https://wa.me/5513974022220', icon: 'whatsapp' },
]

export const contactLinks = [
  {
    label: 'Instagram',
    value: '@dev_carloseduardo',
    href: 'https://instagram.com/dev_carloseduardo',
    external: true,
  },
  {
    label: 'Telefone',
    value: '(13) 97402-2220',
    href: 'https://api.whatsapp.com/send/?phone=5513974022220&text&type=phone_number&app_absent=0',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: '@carloseduardodasilva',
    href: 'https://linkedin.com/in/carlos-eduardo-da-silva-050403235',
    external: true,
  },
  {
    label: 'GitHub',
    value: '@carloseduardo-silva',
    href: 'https://github.com/carloseduardo-silva',
    external: true,
  },
]
