import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import GlobalMathBackground from './components/GlobalMathBackground'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ResearchLab from './components/ResearchLab'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

function App() {
  const [viewMode, setViewMode] = useState(() => {
    const savedMode = window.localStorage.getItem('portfolio_view_mode')
    return savedMode === 'recruiter' ? 'recruiter' : 'research'
  })

  useEffect(() => {
    window.localStorage.setItem('portfolio_view_mode', viewMode)
  }, [viewMode])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content" tabIndex={-1} className="relative min-h-screen bg-[#05070c] text-slate-100 outline-none">
        <GlobalMathBackground />
        <div className="relative z-10">
          <Navbar viewMode={viewMode} onViewModeChange={setViewMode} />
          <Hero viewMode={viewMode} />
          <Skills />
          <ResearchLab viewMode={viewMode} />
          <Projects viewMode={viewMode} />
          <Timeline />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
