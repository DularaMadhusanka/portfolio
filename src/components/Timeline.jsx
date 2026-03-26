import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'

const timelineItems = [
  {
    type: 'experience',
    icon: BriefcaseBusiness,
    title: 'AI Systems Research Assistant',
    subtitle: 'SLIIT',
    period: 'Nov 2025 - Present',
    description: 'Focused on Graph Neural Networks, deterministic experiment tracking, and reproducible ML pipelines.',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'BSc (Hons) IT - Data Science',
    subtitle: 'SLIIT',
    period: 'GPA: 3.6 / 4.0',
    description: 'Quantitative data science training centered around advanced mathematics, ML systems, and statistical inference.',
  },
]

function Timeline() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <h2 className="mb-9 text-2xl font-semibold text-slate-100 sm:text-3xl">Experience & Education</h2>
        <div className="relative pl-8">
          <span className="absolute top-2 bottom-2 left-2 w-px bg-gradient-to-b from-cyan-300/90 via-blue-400/70 to-transparent" />
          <div className="space-y-8">
            {timelineItems.map((item) => (
              <article key={item.title} className="relative rounded-2xl border border-slate-700/80 bg-slate-900/60 p-5">
                <span className="absolute top-6 -left-[29px] inline-flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300/55 bg-cyan-400/35" />
                <p className="mb-2 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-cyan-300 uppercase">
                  <item.icon size={14} />
                  {item.type}
                </p>
                <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {item.subtitle} · {item.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Timeline
