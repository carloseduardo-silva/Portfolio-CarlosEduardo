'use client'

import { useState } from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'

const navLinks = [
  { icon: 'ic:round-start', href: '#', label: 'Início' },
  { icon: 'gg:profile', href: '#about', label: 'Quem sou' },
  { icon: 'mdi:work-outline', href: '#experience', label: 'Experiências' },
  { icon: 'teenyicons:computer-outline', href: '#skills', label: 'Tecnologias' },
  { icon: 'material-symbols:folder-outline', href: '#projects', label: 'Projetos' },
  { icon: 'mynaui:telephone-call', href: '#contacts', label: 'Contato' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Overlay escuro quando menu mobile está aberto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/65 backdrop-blur-sm z-40 animate-[fade_1s] lg:hidden"
          onClick={closeMenu}
        />
      )}

      <div className="fixed w-full lg:w-[19%] z-50 lg:z-0 lg:h-screen">
        {/* Nav bar */}
        <div
          id="nav"
          className="flex flex-row justify-between items-center px-[15px] py-3 bg-grey text-navy
                     lg:flex-col lg:justify-center lg:items-center lg:h-screen lg:w-full lg:py-[10px] lg:px-[6px] lg:shadow-[2px_-2px_18px_rgba(0,0,0,0.36)]"
        >
          {/* Logo + Nome */}
          <div className="flex flex-col items-center name-div">
            <Image
              src="/images/perfil-blue3-Photoroom.jpg"
              alt="Carlos Eduardo"
              width={120}
              height={120}
              className="hidden lg:flex rounded-[49%] border-2 border-blue-mid shadow-[2px_2px_7px_rgba(0,0,0,0.55)] w-[60%] max-w-[380px] max-h-[380px] mx-auto hover:scale-[1.02] transition-transform duration-300"
            />
            <h2 className="text-[1.5em] font-semibold lg:hidden hover:text-blue transition-colors duration-500 cursor-pointer">
              Carlos Eduardo
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav hidden lg:flex flex-col mr-[10px]">
            <ul className="list-none text-center mt-7">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="flex flex-row items-center justify-center gap-[13px] hover:text-blue group"
                >
                  <a
                    href={link.href}
                    className="no-underline text-black py-4 text-[18px] font-medium group-hover:text-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="ml-4">
                <a target="_blank" rel="noreferrer" href="/images/cv_CARLOS-EDUARDO.pdf">
                  <button className="rounded-[10px] text-mint bg-navy px-[1.25em] py-[0.75em] my-[10px] text-[15px] hover:scale-110 transition-transform duration-300 cursor-pointer">
                    DOWNLOAD CV
                  </button>
                </a>
              </li>
            </ul>

            {/* Social icons — desktop */}
            <div className="flex flex-row items-center justify-center my-6">
              <a target="_blank" rel="noreferrer" href="https://wa.me/5513974022220">
                <img src="/images/icons8-whatsapp-40.png" alt="whatsapp" className="w-[28px] h-[29px] mx-[10px] mt-[6px] hover:scale-110 transition-transform cursor-pointer" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/carlos-eduardo-da-silva-050403235">
                <img src="/images/icons8-linkedin-40.png" alt="linkedin" className="w-[28px] h-[29px] mx-[10px] mt-[6px] hover:scale-110 transition-transform cursor-pointer" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/carloseduardo-silva">
                <img src="/images/icons8-github-40.png" alt="github" className="w-[28px] h-[29px] mx-[10px] mt-[6px] hover:scale-110 transition-transform cursor-pointer" />
              </a>
            </div>
          </nav>

          {/* Mobile right side: social icons + hamburger */}
          <div className="flex flex-row items-center pt-[3px] lg:hidden">
            <div id="icons-nav" className="hidden sm:flex">
              <a target="_blank" rel="noreferrer" href="https://wa.me/5513974022220">
                <img src="/images/icons8-whatsapp-40.png" alt="whatsapp" className="w-[22px] h-[23px] mx-[7px] mt-[6px] hover:scale-110 cursor-pointer" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/carlos-eduardo-da-silva-050403235">
                <img src="/images/icons8-linkedin-40.png" alt="linkedin" className="w-[22px] h-[23px] mx-[7px] mt-[6px] hover:scale-110 cursor-pointer" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/carloseduardo-silva">
                <img src="/images/icons8-github-40.png" alt="github" className="w-[22px] h-[23px] mx-[7px] mt-[6px] hover:scale-110 cursor-pointer" />
              </a>
            </div>

            {!menuOpen ? (
              <span
                onClick={toggleMenu}
                className="material-symbols-outlined text-[34px] font-semibold ml-[19px] cursor-pointer"
              >
                menu
              </span>
            ) : (
              <span
                onClick={toggleMenu}
                className="material-symbols-outlined text-[34px] font-semibold ml-[19px] cursor-pointer"
              >
                close
              </span>
            )}
          </div>
        </div>

        {/* Mobile Nav overlay */}
        {menuOpen && <MobileNav onClose={closeMenu} />}
      </div>
    </>
  )
}
