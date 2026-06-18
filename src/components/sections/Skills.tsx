import ScrollReveal from '@/components/ui/ScrollReveal'
import SkillCard from '@/components/ui/SkillCard'
import { skills, services } from '@/data/skills'

export default function Skills() {
  return (
    <ScrollReveal>
      <section
        id="skills"
        className="flex flex-col items-center justify-center p-4 mt-4 lg:mt-40"
      >
        <h2 className="text-[2.3em] text-navy mt-5 lg:mt-8">Tecnologias</h2>

        <div className="flex justify-center items-center flex-wrap w-[75%] max-w-[600px]:w-[98%] my-12 mx-2">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <h2 className="text-[2.3em] text-navy mb-[-20px]">Habilidades</h2>

        <div className="flex flex-col items-center justify-center px-[18px] py-6 sm:px-14 mt-4 w-full lg:w-[75%] lg:max-w-[835px] lg:px-14">
          {services.map((service) => (
            <div key={service.title} className="flex flex-row items-center gap-[1.15em] my-[1.6em]">
              <span className="material-symbols-outlined text-navy text-[4.5em] lg:text-[4.75em] lg:mt-[25px]">
                {service.icon}
              </span>
              <div>
                <h2 className="text-[1.5em] lg:text-[2.02em] text-navy">{service.title}</h2>
                <p className="text-[14px] lg:text-[16px]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}
