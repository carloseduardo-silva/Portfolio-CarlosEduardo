'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { navItems } from '@/data/portfolio'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

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
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 lg:px-15 bg-navy-950/95 backdrop-blur-xl border-b border-white/5">
        {/* Logo */}
        <Link
          href="#inicio"
          className="font-mono text-base font-medium text-accent tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          &lt;CE /&gt;
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-[#E8ECF4]/55 tracking-wide transition-colors duration-200 hover:text-[#E8ECF4]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/images/cv_CARLOS-EDUARDO.pdf"
          target="_blank"
          className="hidden md:block px-5 py-2 bg-accent text-white rounded-md text-xs font-bold tracking-[0.08em] uppercase transition-colors hover:bg-accent-dark"
        >
          Download CV
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className={cn('w-6 h-[2px] bg-[#E8ECF4] transition-all', menuOpen && 'rotate-45 translate-y-[7px]')} />
          <span className={cn('w-6 h-[2px] bg-[#E8ECF4] transition-all', menuOpen && 'opacity-0')} />
          <span className={cn('w-6 h-[2px] bg-[#E8ECF4] transition-all', menuOpen && '-rotate-45 -translate-y-[7px]')} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-16"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-[#E8ECF4]/70 hover:text-[#E8ECF4] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/images/cv_CARLOS-EDUARDO.pdf"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-accent text-white rounded-lg text-sm font-bold tracking-[0.08em] uppercase"
          >
            Download CV
          </Link>
        </div>
      )}
    </>
  )
}
