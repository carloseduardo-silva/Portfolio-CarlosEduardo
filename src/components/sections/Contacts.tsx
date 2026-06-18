import ScrollReveal from '@/components/ui/ScrollReveal'

const contacts = [
  {
    icon: <span className="material-symbols-outlined text-[40px] text-blue bg-navy p-[0.3em] rounded-full mb-[14px]">mail</span>,
    label: 'E-mail',
    value: 'desenvolvedorcarloseduardo@gmail.com',
    href: 'mailto:desenvolvedorcarloseduardo@gmail.com',
  },
  {
    icon: <span className="material-symbols-outlined text-[40px] text-blue bg-navy p-[0.3em] rounded-full mb-[14px]">call</span>,
    label: 'Telefone',
    value: '(13) 97402-2220',
    href: 'https://api.whatsapp.com/send/?phone=5513974022220&text&type=phone_number&app_absent=0',
  },
  {
    icon: <img height="45" src="/images/icons8-linkedin-30.png" alt="linkedin" className="bg-navy p-[0.7em] rounded-full mb-[5px]" />,
    label: 'Linkedin',
    value: '@carloseduardodasilva',
    href: 'https://linkedin.com/in/carlos-eduardo-da-silva-050403235',
  },
  {
    icon: <img style={{ height: '46.5px' }} src="/images/icons8-github-30.png" alt="github" className="bg-navy p-[0.7em] rounded-full mb-[5px]" />,
    label: 'Github',
    value: '@carloseduardo-silva',
    href: 'https://github.com/carloseduardo-silva',
  },
]

export default function Contacts() {
  return (
    <ScrollReveal>
      <section
        id="contacts"
        className="flex justify-center items-center flex-col px-0 py-4 lg:h-[85vh] lg:py-8 lg:px-4"
      >
        <h2 className="text-[2.3em] text-navy mb-[5px]">Contato</h2>

        <div className="flex flex-col flex-wrap justify-center items-center mx-4 my-12 md:flex-row md:my-4 md:mx-[1.3em] md:mb-12 lg:my-4 lg:mx-8 lg:mb-12">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="flex justify-center items-center flex-col mx-8 my-12 md:mx-8 md:my-12 gap-[10px] hover:scale-110 transition-transform duration-[220ms] cursor-pointer"
            >
              <a target="_blank" rel="noreferrer" href={c.href}>
                {c.icon}
              </a>
              <a target="_blank" rel="noreferrer" className="font-bold no-underline text-navy" href={c.href}>
                {c.label}
              </a>
              <a target="_blank" rel="noreferrer" className="no-underline text-navy text-[16px]" href={c.href}>
                {c.value}
              </a>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}
