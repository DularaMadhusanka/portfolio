function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-cyan-500/10 bg-[#04060a]/80 px-6 py-12 backdrop-blur-sm sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-200">Dulara Madusanka</p>
          <p className="mt-1 text-sm text-slate-500">Data Science · ML systems · Quantitative AI</p>
          <p className="mt-3 text-xs text-slate-600">© {year} · Built with React & Vite</p>
        </div>
        <nav aria-label="Footer links" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#home" className="text-slate-400 transition hover:text-cyan-300">
            Home
          </a>
          <a href="#projects" className="text-slate-400 transition hover:text-cyan-300">
            Projects
          </a>
          <a href="https://github.com/DularaMadhusanka" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition hover:text-cyan-300">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dulara-madusanka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
          <a href="mailto:IT24101566@my.sliit.lk" className="text-slate-400 transition hover:text-cyan-300">
            Email
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
