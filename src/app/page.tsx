import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contacts from '@/components/sections/Contacts'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="main-content" className="flex flex-col justify-center items-center gap-32 lg:pl-[17em] xl:pl-[21em] lg:gap-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </>
  )
}
