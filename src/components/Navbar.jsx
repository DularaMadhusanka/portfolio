import { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Timeline' },
]

function Navbar({ viewMode, onViewModeChange }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section) => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.3, 0.6, 0.8],
        rootMargin: '-25% 0px -40% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <header className="sticky top-0 z-30 border-b border-cyan-500/10 bg-[#060912]/70 px-4 py-3 backdrop-blur-md sm:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <a href="#home" className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
          Dulara
        </a>
        <ul className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 p-1 text-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`rounded-full px-3 py-1.5 transition ${
                  activeSection === item.id ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-300 hover:text-cyan-200'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 p-1 text-xs sm:flex">
          <button
            type="button"
            onClick={() => onViewModeChange('research')}
            className={`rounded-full px-3 py-1.5 transition ${
              viewMode === 'research' ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-300'
            }`}
          >
            Research
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('recruiter')}
            className={`rounded-full px-3 py-1.5 transition ${
              viewMode === 'recruiter' ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-300'
            }`}
          >
            Recruiter
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
