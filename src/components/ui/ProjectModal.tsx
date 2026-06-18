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
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Prev arrow */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="hidden lg:flex fixed top-1/2 left-6 -translate-y-1/2 z-50 w-11 h-11 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-accent/20 hover:border-accent/40 transition-all"
        >
          ←
        </button>
      )}

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col w-[90vw] max-w-[860px] max-h-[85vh] bg-surface-light rounded-2xl border border-card-border shadow-[0_32px_64px_rgba(13,24,41,0.18)] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-card-border">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] block mb-1">
              {project.type}
            </span>
            <h2 className="text-xl font-bold text-navy-900 tracking-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-card-border text-[#8896A8] hover:border-accent/40 hover:text-accent transition-all text-lg"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-6 p-7">
          {/* Media */}
          <div className="lg:w-[52%] flex-none">
            {project.mediaType === 'image' ? (
              <img
                src={project.mediaSrc}
                alt={project.title}
                className="w-full rounded-xl border border-card-border object-cover"
              />
            ) : (
              <video
                controls
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
          className="hidden lg:flex fixed top-1/2 right-6 -translate-y-1/2 z-50 w-11 h-11 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-accent/20 hover:border-accent/40 transition-all"
        >
          →
        </button>
      )}
    </>
  )
}
