import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Quantitative Risk Terminal & Monte Carlo Engine',
    highlights: ["Student's t-distribution", 'Fat-tail risk estimation', 'Tiingo API ingestion', 'OOM prevention on 512MB RAM'],
    description:
      'Built a robust risk surface explorer for heavy-tailed markets with resource-aware simulation controls that stay stable under constrained memory.',
    link: 'https://monte-carlo-risk-engine.streamlit.app/',
    featured: true,
  },
  {
    title: 'Entropy-Driven Curriculum Training Pipeline',
    highlights: ['PyTorch orchestration', 'GPU-bound optimization loops', '+39% F1 performance uplift'],
    description:
      'Designed staged-sample scheduling based on entropy signals to accelerate convergence and increase model generalization.',
  },
  {
    title: 'Multi-Agent Conversational AI Platform',
    highlights: ['LangGraph orchestration', 'RAG retrieval layers', 'FastAPI backend'],
    description:
      'Engineered a modular multi-agent runtime where retrieval reasoning and response synthesis run as composable graph states.',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-8 text-2xl font-semibold text-slate-100 sm:text-3xl">Selected Projects</h2>
        <div className="grid gap-5 md:grid-cols-6">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`group rounded-2xl border border-slate-700/70 bg-white/5 p-5 shadow-[0_22px_70px_-52px_rgba(56,189,248,0.85)] backdrop-blur-md transition hover:-translate-y-1.5 hover:border-cyan-300/50 ${
                project.featured || idx === 0 ? 'md:col-span-4' : 'md:col-span-2'
              }`}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200">
                <Sparkles size={13} /> Production Focus
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <ul className="mb-4 space-y-2 text-sm text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  Live App <ArrowUpRight size={15} />
                </a>
              )}
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
