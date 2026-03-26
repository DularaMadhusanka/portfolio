import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

function App() {
  return (
    <main className="min-h-screen bg-[#05070c] text-slate-100">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
    </main>
  )
}

export default App
