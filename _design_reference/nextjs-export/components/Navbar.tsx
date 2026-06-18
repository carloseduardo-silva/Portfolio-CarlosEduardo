'use client'

import Link from 'next/link'
import { navItems } from '@/data/portfolio'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-15 bg-navy-950/95 backdrop-blur-xl border-b border-white/5">
      {/* Logo */}
      <Link
        href="#inicio"
        className="font-mono text-base font-medium text-accent tracking-tight"
      >
        &lt;CE /&gt;
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-10">
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

      {/* CTA */}
      <Link
        href="/cv.pdf"
        target="_blank"
        className="px-5 py-2 bg-accent text-white rounded-md text-xs font-bold tracking-[0.08em] uppercase transition-colors hover:bg-accent-dark"
      >
        Download CV
      </Link>
    </nav>
  )
}
