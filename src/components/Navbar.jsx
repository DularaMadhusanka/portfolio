import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Timeline' },
]

function Navbar({ viewMode, onViewModeChange }) {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

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
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const linkClass = (id) =>
    `rounded-full px-3 py-1.5 transition ${
      activeSection === id ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-300 hover:text-cyan-200'
    }`

  return (
    <header className="sticky top-0 z-30 border-b border-cyan-500/10 bg-[#060912]/70 px-4 py-3 backdrop-blur-md sm:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3" aria-label="Primary">
        <a href="#home" className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
          Dulara
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 p-1 text-sm lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={linkClass(item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 p-1 text-xs sm:flex">
            <button
              type="button"
              onClick={() => onViewModeChange('research')}
              className={`rounded-full px-3 py-1.5 transition ${
                viewMode === 'research' ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-300'
              }`}
              aria-pressed={viewMode === 'research'}
            >
              Research
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('recruiter')}
              className={`rounded-full px-3 py-1.5 transition ${
                viewMode === 'recruiter' ? 'bg-cyan-400/20 text-cyan-200' : 'text-slate-300'
              }`}
              aria-pressed={viewMode === 'recruiter'}
            >
              Recruiter
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[52px] z-40 flex flex-col border-t border-cyan-500/10 bg-[#060912]/95 px-4 py-4 backdrop-blur-lg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Section navigation"
          onClick={() => setMobileOpen(false)}
        >
          <ul className="flex flex-col gap-1 text-base" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block rounded-xl px-4 py-3 ${activeSection === item.id ? 'bg-cyan-400/15 text-cyan-100' : 'text-slate-200'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2 border-t border-slate-800 pt-4" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => {
                onViewModeChange('research')
                setMobileOpen(false)
              }}
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium ${
                viewMode === 'research' ? 'bg-cyan-400/20 text-cyan-100' : 'border border-slate-700 text-slate-300'
              }`}
              aria-pressed={viewMode === 'research'}
            >
              Research view
            </button>
            <button
              type="button"
              onClick={() => {
                onViewModeChange('recruiter')
                setMobileOpen(false)
              }}
              className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium ${
                viewMode === 'recruiter' ? 'bg-cyan-400/20 text-cyan-100' : 'border border-slate-700 text-slate-300'
              }`}
              aria-pressed={viewMode === 'recruiter'}
            >
              Recruiter view
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
