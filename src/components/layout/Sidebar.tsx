'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems, socialLinks } from '@/data/portfolio'
import { NavIcon, SocialIcon } from '@/components/layout/icons'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'

const sectionIds = navItems.map((item) => item.href.slice(1))

function ProfilePhoto({ size, className = '' }: { size: number; className?: string }) {
  return (
    <Image
      src="/images/foto-kadu-att.webp"
      alt="Carlos Eduardo"
      width={size}
      height={size}
      priority
      className={cn('rounded-full object-cover ring-2 ring-accent/40 shadow-lg', className)}
      style={{ width: size, height: size }}
    />
  )
}

function SocialRow({ className = '' }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-card-border text-ink-subtle transition-all hover:border-accent/40 hover:text-accent-text hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <SocialIcon name={social.icon} />
        </a>
      ))}
    </div>
  )
}

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  // Trava o scroll do body e permite fechar o overlay com Esc.
  useEffect(() => {
    if (!menuOpen) return

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      {/* ── Sidebar desktop (≥1024px) ─────────────────────────────── */}
      <aside
        aria-label="Navegação principal"
        className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-[var(--sidebar-w)] flex-col overflow-y-auto bg-surface border-r border-card-border shadow-[4px_0_24px_rgba(13,24,41,0.05)] px-7 py-8 "
      >
        {/* Identidade */}
        <div className="flex flex-col items-center text-center">
          <Link href="#inicio" className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <ProfilePhoto size={168} className="transition-transform duration-300 hover:scale-[1.03]" />
          </Link>
          {/* <p className="mt-6 text-[19px] font-bold text-ink tracking-tight">
            Carlos Eduardo
          </p> */}

        </div>

        {/* Navegação */}
        <nav className="mt-10">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'flex items-center gap-3.5 rounded-r-lg border-l-[3px] py-3 pl-4 pr-3 text-[14.5px] font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                      isActive
                        ? 'border-accent bg-accent/[0.08] text-ink'
                        : 'border-transparent text-ink-subtle hover:border-card-border hover:bg-surface-muted hover:text-ink',
                    )}
                  >
                    <span className={cn('transition-colors', isActive ? 'text-accent-text' : 'text-ink-subtle/70')}>
                      <NavIcon name={item.icon} />
                    </span>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Rodapé da coluna */}
        <div className="mt-auto pt-4">
          <Link
            href="/images/cv_CARLOS-EDUARDO.pdf"
            target="_blank"
            className="block w-full rounded-lg bg-accent px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Download CV
          </Link>
          <SocialRow className="mt-6" />
        </div>
      </aside>

      {/* ── Barra de topo mobile (<1024px) ────────────────────────── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 bg-surface/95 backdrop-blur-xl border-b border-card-border">
        <Link
          href="#inicio"
          className="font-mono text-base font-medium text-accent-text tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          &lt;CE /&gt;
        </Link>

        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="flex flex-col gap-[5px] p-2"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className={cn('w-6 h-[2px] bg-ink transition-all', menuOpen && 'rotate-45 translate-y-[7px]')} />
          <span className={cn('w-6 h-[2px] bg-ink transition-all', menuOpen && 'opacity-0')} />
          <span className={cn('w-6 h-[2px] bg-ink transition-all', menuOpen && '-rotate-45 -translate-y-[7px]')} />
        </button>
      </header>

      {/* ── Overlay mobile ───────────────────────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 overflow-y-auto bg-surface/98 px-6 pt-20 pb-10 backdrop-blur-xl"
        >
          <ProfilePhoto size={104} />

          <nav>
            <ul className="flex flex-col items-center gap-5">
              {navItems.map((item) => {
                const isActive = activeId === item.href.slice(1)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'flex items-center gap-3 text-2xl font-semibold transition-colors',
                        isActive ? 'text-accent-text' : 'text-ink-subtle hover:text-ink',
                      )}
                    >
                      <NavIcon name={item.icon} />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Link
            href="/images/cv_CARLOS-EDUARDO.pdf"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg bg-accent px-8 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white"
          >
            Download CV
          </Link>

          <SocialRow />
        </div>
      )}
    </>
  )
}
