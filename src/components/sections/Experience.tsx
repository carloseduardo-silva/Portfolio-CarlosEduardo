'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { experiences } from '@/data/experiences'

export default function Experience() {
  const [activeId, setActiveId] = useState('ipr')

  const active = experiences.find((e) => e.id === activeId) ?? experiences[0]

  return (
    <ScrollReveal>
      <section
        id="experience"
        className="flex flex-col items-center justify-center p-8 mt-16 lg:w-[90%] xl:w-[75%] xl:max-w-[1400px]"
      >
        <h2 className="text-[2.3em] text-navy mb-[5px]">Experiências</h2>

        <div className="flex flex-col xl:flex-row mt-12 xl:mt-[4.25rem] gap-0 xl:gap-[30px]">
          {/* Tabs */}
          <div className="rounded-[4px] min-w-[265px] xl:px-0 px-5 pb-[25px]">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`px-[1.35rem] py-[1.35rem] bg-[#d4d4d4] cursor-pointer ${
                  activeId === exp.id ? 'border-l-[3px] border-navy' : ''
                }`}
              >
                {exp.company}
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-5 mt-6 xl:mt-[0.1rem] px-[6px] xl:px-5 xl:gap-5">
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-0 xl:mb-0">
              <h3 className="text-[24px] text-navy">{active.role}</h3>
              <span className="text-[17.3px]">{active.period}</span>
            </div>
            <h4 className="text-[20px]">{active.location}</h4>
            <p className="text-[18px] xl:text-[18.8px]">{active.description}</p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
