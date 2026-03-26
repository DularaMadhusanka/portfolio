import { motion } from 'framer-motion'
import { ArrowDown, AtSign, Download, ExternalLink, FolderGit2 } from 'lucide-react'

const floatingNodes = [
  { top: '12%', left: '10%', delay: 0.1 },
  { top: '28%', left: '74%', delay: 0.3 },
  { top: '65%', left: '18%', delay: 0.5 },
  { top: '74%', left: '82%', delay: 0.8 },
  { top: '42%', left: '51%', delay: 0.6 },
  { top: '20%', left: '42%', delay: 0.2 },
]

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <section id="home" className="relative overflow-hidden border-b border-cyan-500/15 px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.22),transparent_44%),radial-gradient(circle_at_88%_14%,rgba(59,130,246,0.20),transparent_38%),radial-gradient(circle_at_50%_86%,rgba(8,145,178,0.16),transparent_45%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1200 600" fill="none">
          <path d="M100 180C260 240 360 120 520 200C700 290 840 200 1100 260" stroke="url(#grad)" strokeWidth="1.5" />
          <path d="M80 420C300 340 380 440 560 360C800 250 900 400 1120 330" stroke="url(#grad)" strokeWidth="1.5" />
          <defs>
            <linearGradient id="grad" x1="80" y1="100" x2="1120" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        {floatingNodes.map((node, idx) => (
          <motion.span
            key={idx}
            className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
            style={{ top: node.top, left: node.left }}
            animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.5] }}
            transition={{ duration: 5 + idx, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/65 px-3 py-1 text-xs tracking-[0.18em] text-cyan-300 uppercase backdrop-blur">
          Quant Terminal x AI Startup
        </div>

        <p className="text-sm tracking-[0.14em] text-slate-400 uppercase">
          Data Science Undergraduate & ML Engineer
        </p>

        <h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-slate-50 sm:text-6xl">
          Dulara Madusanka builds{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            production-grade intelligence
          </span>{' '}
          from advanced quantitative systems.
        </h1>

        <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Data Science undergraduate with hands-on experience in ML systems, backend engineering, and deployed AI
          applications. Built GPU-optimized pipelines, real-time vision systems, and cloud-based simulation platforms,
          focusing on scalable, production-ready ML solutions.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-300/45 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]"
          >
            View Projects <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
          </a>
          <a
            href={resumeUrl}
            download="Dulara_Madusanka_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-5 py-3 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-400/60 hover:text-blue-200"
          >
            Download Resume <Download size={16} />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-5 pt-2 text-slate-300">
          <a
            href="https://github.com/DularaMadhusanka"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-cyan-300"
          >
            <FolderGit2 size={17} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/dulara-madusanka"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-cyan-300"
          >
            <ExternalLink size={17} /> LinkedIn
          </a>
          <a href="mailto:IT24101566@my.sliit.lk" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
            <AtSign size={17} /> IT24101566@my.sliit.lk
          </a>
          <span className="inline-flex items-center gap-2 text-slate-400">+94 70 465 5150</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
