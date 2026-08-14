import Sidebar from '@/components/layout/Sidebar'
import ReadingProgress from '@/components/layout/ReadingProgress'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contacts from '@/components/sections/Contacts'

export default function Home() {
  return (
    <>
      <Sidebar />
      <ReadingProgress />
      <main className="lg:pl-[var(--sidebar-w)]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contacts />
      </main>
    </>
  )
}
