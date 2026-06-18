'use client'

import { useEffect } from 'react'
import { Project } from '@/data/projects'

type Props = {
  project: Project
  onClose: () => void
  onPrev: (() => void) | null
  onNext: (() => void) | null
}

export default function ProjectModal({ project, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm z-40 animate-[fade_1s]"
        onClick={onClose}
      />

      {/* Prev arrow (desktop) */}
      {onPrev && (
        <span
          onClick={onPrev}
          className="hidden lg:block fixed top-1/2 left-[4%] -translate-y-1/2 z-50 text-[4.5rem] text-mint cursor-pointer material-symbols-outlined hover:text-blue-mid transition-colors duration-300"
        >
          arrow_back_ios
        </span>
      )}

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center max-h-[660px] w-[76%] p-8 gap-[1.85rem] bg-grey rounded-2xl animate-[fade_1s] overflow-y-auto text-navy [scrollbar-width:thin]">
        {/* Header */}
        <div className="flex flex-row justify-center w-full relative">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <span
            onClick={onClose}
            className="absolute right-0 top-0 text-[28px] cursor-pointer material-symbols-outlined hover:scale-103"
          >
            close
          </span>
        </div>

        {/* Container: media + content */}
        <div className="flex flex-col items-center xl:flex-row xl:items-start">
          {project.mediaType === 'image' ? (
            <img
              src={project.mediaSrc}
              alt={project.title}
              className="w-full md:w-[80%] xl:w-[530px] xl:h-[410px] object-cover mt-[10px] mr-[3em] ml-[0.75em] mb-[10px]"
            />
          ) : (
            <video
              controls
              className="w-full md:w-[80%] xl:w-[520px] xl:h-[90%] mt-[50px] mr-[3em] ml-[0.75em] mb-[10px]"
            >
              <source src={project.mediaSrc} type="video/mp4" />
            </video>
          )}

          <div className="mt-[10px] xl:mt-0 xl:mx-0 mx-[3em]">
            <h3 className="my-4 font-semibold">Informações do projeto:</h3>
            <p className="text-[12px] md:text-[13px] lg:text-[15px]">{project.info}</p>
            <h3 className="my-4 font-semibold">Detalhes do Projeto:</h3>
            <ul className="list-none text-left">
              <li className="pb-2 mb-4 border-b border-navy">
                <p className="inline mr-[5px] text-[12px] md:text-[13px] lg:text-[15px] font-bold">Tecnologias:</p>
                <p className="inline text-[12px] md:text-[13px] lg:text-[15px]">{project.technologies}</p>
              </li>
              <li className="pb-2 mb-4 border-b border-navy">
                <p className="inline mr-[5px] text-[12px] md:text-[13px] lg:text-[15px] font-bold">Data:</p>
                <p className="inline text-[12px] md:text-[13px] lg:text-[15px]">{project.date}</p>
              </li>
              <li className="pb-2 mb-4 border-b border-navy">
                <p className="inline mr-[5px] text-[12px] md:text-[13px] lg:text-[15px] font-bold">URL:</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.url}
                  className="text-blue-dark2 text-[12px] md:text-[13px] lg:text-[15px]"
                >
                  {project.urlLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next arrow (desktop) */}
      {onNext && (
        <span
          onClick={onNext}
          className="hidden lg:block fixed top-1/2 right-[1%] -translate-y-1/2 z-50 text-[4.5rem] text-mint cursor-pointer material-symbols-outlined hover:text-blue-mid transition-colors duration-300"
        >
          arrow_forward_ios
        </span>
      )}
    </>
  )
}
