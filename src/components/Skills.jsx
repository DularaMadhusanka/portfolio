import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Cpu, Sigma } from 'lucide-react'

const skillGroups = [
  {
    title: 'ML Systems & AI Infra',
    icon: Cpu,
    skills: ['GPU-efficient training loops', 'Cloud deployment patterns', 'MLOps reproducibility', 'Pipeline optimization'],
  },
  {
    title: 'ML & Deep Learning',
    icon: BrainCircuit,
    skills: ['PyTorch', 'Graph Neural Networks', 'RAG-enabled workflows', 'Curriculum learning'],
  },
  {
    title: 'Mathematics & Quant',
    icon: Sigma,
    skills: ['Monte Carlo simulations', "Student's t-distribution", 'Stochastic risk modeling', 'Heavy-tail analytics'],
  },
  {
    title: 'Languages & Tools',
    icon: Code2,
    skills: ['Python', 'FastAPI', 'LangGraph', 'Tiingo API', 'GitHub Actions'],
  },
]

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <h2 className="mb-8 text-2xl font-semibold text-slate-100 sm:text-3xl">Core Skills</h2>
        <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/65 shadow-[0_16px_90px_-45px_rgba(34,211,238,0.6)] backdrop-blur">
          <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs tracking-[0.22em] text-slate-400 uppercase">skills-terminal.log</span>
          </div>
          <div className="grid gap-6 p-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-slate-700/80 bg-slate-950/55 p-4">
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-sm text-cyan-300">
                  <group.icon size={16} />
                  {'>'} {group.title}
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {group.skills.map((skill) => (
                    <li key={skill} className="font-mono">
                      - {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
