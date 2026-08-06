'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Project } from '@/data/projects'

type Props = {
  project: Project
  onClose: () => void
  onPrev: (() => void) | null
  onNext: (() => void) | null
}

const FOCUSABLE = 'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])'

export default function ProjectModal({ project, onClose, onPrev, onNext }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // Guarda quem abriu o modal para devolver o foco ao fechar.
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()

      if (e.key !== 'Tab') return

      // Focus trap: mantém o Tab circulando dentro do diálogo.
      const items = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (!items || items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Prev arrow */}
      {onPrev && (
        <button
          onClick={onPrev}
          aria-label="Projeto anterior"
          className="hidden lg:flex fixed top-1/2 left-6 -translate-y-1/2 z-50 w-11 h-11 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-accent/20 hover:border-accent/40 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span aria-hidden>←</span>
        </button>
      )}

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col w-[90vw] max-w-[860px] max-h-[85vh] bg-surface-light rounded-2xl border border-card-border shadow-[0_32px_64px_rgba(13,24,41,0.18)] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-card-border">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-1">
              {project.type}
            </span>
            <h2 id="project-modal-title" className="text-xl font-bold text-navy-900 tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Fechar"
            className="w-9 h-9 flex-none flex items-center justify-center rounded-lg border border-card-border text-[#8896A8] hover:border-accent/40 hover:text-accent transition-all text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden>✕</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-6 p-7">
          {/* Media */}
          <div className="lg:w-[52%] flex-none">
            {project.mediaType === 'image' ? (
              <Image
                src={project.mediaSrc}
                alt={`Captura de tela do projeto ${project.title}`}
                width={860}
                height={540}
                sizes="(max-width: 1024px) 90vw, 450px"
                className="w-full h-auto rounded-xl border border-card-border object-cover"
              />
            ) : (
              <video
                controls
                preload="metadata"
                playsInline
                poster={project.thumbnail}
                aria-label={`Demonstração em vídeo do projeto ${project.title}`}
                className="w-full rounded-xl border border-card-border"
              >
                <source src={project.mediaSrc} type="video/mp4" />
              </video>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-[14.5px] text-[#4A5568] leading-relaxed">{project.info}</p>

            <div className="flex flex-col gap-3">
              <div className="p-4 bg-card-bg rounded-xl border border-card-border-blue">
                <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-1.5">Tecnologias</p>
                <p className="text-[13px] text-navy-900">{project.technologies}</p>
              </div>
              <div className="p-4 bg-card-bg rounded-xl border border-card-border-blue">
                <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-1.5">Data</p>
                <p className="text-[13px] text-navy-900">{project.date}</p>
              </div>
              <div className="p-4 bg-card-bg rounded-xl border border-card-border-blue">
                <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-1.5">URL</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.url}
                  className="text-[13px] text-accent hover:underline break-all"
                >
                  {project.urlLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next arrow */}
      {onNext && (
        <button
          onClick={onNext}
          aria-label="Próximo projeto"
          className="hidden lg:flex fixed top-1/2 right-6 -translate-y-1/2 z-50 w-11 h-11 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-accent/20 hover:border-accent/40 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span aria-hidden>→</span>
        </button>
      )}
    </>
  )
}
