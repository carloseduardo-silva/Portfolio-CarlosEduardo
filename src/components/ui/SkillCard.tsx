import { Skill } from '@/data/skills'

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center justify-center bg-navy w-[100px] px-[7px] pt-[13px] pb-[15px] mx-7 my-7 border-b-[5px] border-blue rounded-tl-3xl rounded-br-sm rounded-bl-sm hover:scale-110 transition-transform duration-300 cursor-pointer">
      <p className="text-blue mb-[7px]" style={{ fontSize: skill.fontSize ?? '1.15rem' }}>
        {skill.name}
      </p>
      <i className={`${skill.icon} text-blue text-6xl`} />
    </div>
  )
}
