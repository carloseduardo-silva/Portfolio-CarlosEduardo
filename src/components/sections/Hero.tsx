'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

const particlesOptions = {
  particles: {
    number: { value: 80, density: { enable: true, width: 800 } },
    color: { value: '#0b2545' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 5 } },
    links: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: {
      enable: true,
      speed: 6,
      direction: 'none' as const,
      random: false,
      straight: false,
      outModes: { default: 'out' as const },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: true, mode: 'push' },
      resize: { enable: true },
    },
    modes: { repulse: { distance: 200 }, push: { quantity: 4 } },
  },
  detectRetina: true,
}

function ParticlesCanvas() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const [show, setShow] = useState(false)
  useEffect(() => { setShow(true) }, [])

  if (!show) return null

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-0"
        options={particlesOptions}
      />
    </ParticlesProvider>
  )
}

export default function Hero() {
  return (
    <header
      id="particles-js"
      className="flex flex-col justify-center items-center h-[97vh] md:h-screen px-5 pt-8 md:pt-0 relative w-[93%] whitespace-nowrap"
    >
      <ParticlesCanvas />

      <div className="flex flex-col justify-center items-center absolute gap-[2px] z-10">
        <p className="text-[1em] md:text-[1.5em] font-normal text-navy">Oi, eu sou o Kadu!</p>

        <h1 className="typing-animation text-center text-[1.85em] md:text-[3.85em] text-navy pr-1">
          Desenvolvedor Front-End
        </h1>

        <a target="_blank" rel="noreferrer" href="https://linktr.ee/carlos.eduardo.silva" className="mt-5">
          <button className="looping-border-button px-[1.5em] py-[1.1em] rounded-[20px] text-navy hover:scale-110 hover:text-blue transition-transform duration-[400ms] cursor-pointer">
            Contate-me
          </button>
        </a>
      </div>

      <a href="#about" className="slide-animation mr-[33px] md:mr-[25px] z-10">
        <span className="material-symbols-outlined text-[40px] font-normal text-navy">
          keyboard_double_arrow_down
        </span>
      </a>
    </header>
  )
}
