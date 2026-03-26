import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Monte Carlo Risk Engine (Deployed)',
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
    highlights: ['GPU-based entropy difficulty scoring', 'Fully GPU-bound training loop', '+2.84% accuracy', '+39% F1 uplift'],
    description:
      'Implemented entropy-driven feature masking to prioritize harder concepts first and improve fine-grained classification stability on small datasets.',
  },
  {
    title: 'RAG-Based Hotel Booking Assistant',
    highlights: ['Vector database retrieval stack', 'Context-aware LLM responses', 'Modular FastAPI backend'],
    description:
      'Designed a retrieval-augmented booking assistant that combines semantic search and LLM generation for grounded, domain-specific hotel recommendations.',
  },
  {
    title: 'Real-Time ASL Recognition System',
    highlights: ['MobileNetV2 architecture', 'TensorFlow pipeline', '85% classification accuracy'],
    description:
      'Developed and optimized a real-time vision inference system for American Sign Language recognition with stable interactive performance.',
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
