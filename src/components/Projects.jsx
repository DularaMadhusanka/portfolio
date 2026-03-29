import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Monte Carlo Risk Engine (Deployed)',
    stack: ['Python', 'Streamlit', 'Monte Carlo', 'VaR/CVaR'],
    highlights: [
      'Cloud-based simulator for VaR/CVaR',
      "Student's t-distribution for fat-tail markets",
      '10K+ simulations on constrained 512MB Render instance',
      'External API-powered data pipeline',
    ],
    description:
      'Built a production-focused stochastic risk system using Monte Carlo methods to model heavy-tail behavior and deliver reliable portfolio risk metrics.',
    link: 'https://monte-carlo-risk-engine.streamlit.app/',
    featured: true,
  },
  {
    title: 'Entropy-Based Curriculum Training Pipeline',
    stack: ['PyTorch', 'GPU', 'Curriculum learning'],
    highlights: ['GPU-based entropy difficulty scoring', 'Fully GPU-bound training loop', '+2.84% accuracy', '+39% F1 uplift'],
    description:
      'Implemented entropy-driven feature masking to prioritize harder concepts first and improve fine-grained classification stability on small datasets.',
  },
  {
    title: 'RAG-Based Hotel Booking Assistant',
    stack: ['FastAPI', 'RAG', 'Vector DB', 'LLM'],
    highlights: ['Vector database retrieval stack', 'Context-aware LLM responses', 'Modular FastAPI backend'],
    description:
      'Designed a retrieval-augmented booking assistant that combines semantic search and LLM generation for grounded, domain-specific hotel recommendations.',
  },
  {
    title: 'Exploring Global COVID-19 Trends',
    stack: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
    highlights: [
      'Ingested and normalized multi-country case and mortality series for longitudinal analysis',
      'Built reproducible cleaning and aggregation workflows with Pandas',
      'Visualized infection and fatality dynamics to compare regions and peak behavior',
      'Communicated findings through clear, narrative-driven charts for stakeholder review',
    ],
    description:
      'End-to-end exploratory analysis of real-world COVID-19 data: rigorous cleaning, time-series visualization, and interpretation of cross-country case and death-rate patterns.',
    link: 'https://github.com/DularaMadhusanka/covid19-data-science-project',
    linkLabel: 'GitHub',
    period: 'May 2025 – Jun 2025',
  },
  {
    title: 'Sales Performance Dashboard (Tableau)',
    stack: ['Tableau', 'BI', 'Calculated fields', 'Sales analytics'],
    highlights: [
      'Interactive filters for year, segment, and product category',
      'Regional comparison of sales volume versus profit margin',
      'Ranked top 15 customers by profitability for account prioritization',
      'West region led with a 14.9% profit margin—surfaced as a benchmark for scalable playbooks',
    ],
    description:
      'Executive-style Tableau dashboard on regional sales: isolates profit trends, high-value customers, and growth levers through calculated fields and drillable views.',
    assetNote: 'Interactive workbook — shareable link available on request.',
  },
  {
    title: 'Real-Time ASL Recognition System',
    stack: ['TensorFlow', 'MobileNetV2', 'Computer vision'],
    highlights: ['MobileNetV2 architecture', 'TensorFlow pipeline', '85% classification accuracy'],
    description:
      'Developed and optimized a real-time vision inference system for American Sign Language recognition with stable interactive performance.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

function Projects({ viewMode }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" aria-labelledby="projects-heading" className="px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: reduceMotion ? 0 : 0.7 }}
      >
        <h2 id="projects-heading" className="mb-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
          Selected Projects
        </h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Production ML and analytics work: simulation, deep learning, retrieval systems, BI dashboards, and large-scale
          exploratory analysis.
        </p>
        <motion.div
          className="grid gap-5 md:grid-cols-6"
          {...(reduceMotion
            ? {}
            : {
                variants: container,
                initial: 'hidden',
                whileInView: 'show',
                viewport: { once: true, amount: 0.12 },
              })}
        >
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              {...(reduceMotion ? {} : { variants: item })}
              className={`group rounded-2xl border border-slate-700/70 bg-white/5 p-5 shadow-[0_22px_70px_-52px_rgba(56,189,248,0.85)] backdrop-blur-md transition hover:-translate-y-1.5 hover:border-cyan-300/50 ${
                project.featured || idx === 0 ? 'md:col-span-4' : 'md:col-span-2'
              }`}
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-200">
                  <Sparkles size={13} aria-hidden /> {project.featured || idx === 0 ? 'Featured' : 'Case study'}
                </span>
                {project.period && (
                  <span className="rounded-md border border-slate-600/80 bg-slate-950/40 px-2 py-0.5 font-mono text-[11px] text-slate-500">
                    {project.period}
                  </span>
                )}
                {project.stack?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-600/80 bg-slate-950/40 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <ul className="mb-4 space-y-2 text-sm text-slate-300">
                {(viewMode === 'recruiter' ? project.highlights.slice(0, 2) : project.highlights).map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-cyan-500/80" aria-hidden>
                      ·
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  {project.linkLabel ?? 'Live app'} <ArrowUpRight size={15} aria-hidden />
                </a>
              ) : (
                project.assetNote && <p className="text-xs text-slate-500">{project.assetNote}</p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
