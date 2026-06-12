
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { ProjectsSection } from './components/sections/Project'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
