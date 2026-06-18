'use client'

type Props = {
  onClose: () => void
}

const links = [
  { href: '#', label: 'Início' },
  { href: '#about', label: 'Quem sou' },
  { href: '#skills', label: 'Tecnologias' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contacts', label: 'Contato' },
]

export default function MobileNav({ onClose }: Props) {
  return (
    <nav
      id="mobile-nav"
      className="flex flex-col justify-center items-center p-4 animate-[fade_1s] fixed top-[53%] left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center w-[99%]"
    >
      <h1 className="text-mint text-center mb-4 mt-4 text-[37px] hover:cursor-pointer hover:text-blue transition-colors duration-[350ms]">
        {'< Bem vindo ao meu PortFólio />'}
      </h1>

      <ul className="list-none">
        {links.map((link) => (
          <li key={link.href} className="my-6 mx-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <a
              href={link.href}
              onClick={onClose}
              className="no-underline text-[32px] text-mint hover:text-blue transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
