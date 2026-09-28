import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Presentation } from 'lucide-react'

const timelineItems = [
  {
    type: 'experience',
    icon: BriefcaseBusiness,
    title: 'Machine Learning Research Assistant — AI Systems',
    subtitle: 'SLIIT',
    period: 'Nov 2025 - Present',
    description:
      'Develops a brain-inspired Graph Neural Network framework for human behavior prediction, using curriculum learning to optimize modeling of complex spatio-temporal dependencies. Designs progressive PyTorch training protocols to improve data efficiency, runs rigorous ablation studies, and benchmarks against strong baselines. Drives reproducible codebase maintenance, research dissemination, and academic workshop organization.',
  },
  {
    type: 'tutorial',
    icon: Presentation,
    title: 'Tutorial Resource Person — ICARC 2026',
    subtitle: '6th ICARC (IEEE co–sponsored) · Faculty of Computing, Sabaragamuwa University',
    period: 'Feb 2026 · Online',
    description:
      'Co-delivered the half-day tutorial “Curriculum Learning: An Efficient Learning Paradigm” (Tutorial 03), including the graph-learning segment on curriculum strategies for GNNs and spatio-temporal tasks. Covered theoretical foundations, pacing and scoring, hands-on practice, and tooling—aligned with the conference theme on responsible AGI and advanced computing research.',
  },
  {
    type: 'speaking',
    icon: Presentation,
    title: 'Workshop Speaker — Does Order Matter? Curriculum Learning for Training Deep Neural Networks',
    subtitle: 'Moratuwa Engineering Research Conference (MERCon 2026)',
    period: '2026',
    description:
      'Presented curriculum-learning concepts for GNN training, including graph difficulty estimation and the effects of easy-to-hard and hard-to-easy training order.',
  },
  {
    type: 'experience',
    icon: BriefcaseBusiness,
    title: 'Independent Mathematics Instructor',
    subtitle: 'Freelance',
    period: 'Mar 2025 - Present',
    description:
      'Taught probability and discrete mathematics to 900+ students, strengthening algorithmic thinking and quantitative problem-solving foundations.',
  },
  {
    type: 'publication',
    icon: Presentation,
    title: 'First Author — Tag Entropy: A Structure-Agnostic Curriculum Learning Framework for GNNs',
    subtitle: 'MERCon 2026 · Published in IEEE Xplore',
    period: '2026',
    description:
      'Proposed an architecture- and structure-agnostic graph difficulty measure using normalized Shannon entropy for curriculum learning with graph neural networks.',
    link: 'https://ieeexplore.ieee.org/document/11691316',
    linkLabel: 'Read on IEEE Xplore',
  },
  {
    type: 'publication',
    icon: Presentation,
    title: 'First Author — Beyond Easy-to-Hard: Investigating Tag-Entropy-Based Training Order in GNNs',
    subtitle: 'IJCAI-ECAI 2026 GlobalSouthAI Workshop · Accepted',
    period: '2026',
    description:
      'Investigated easy-to-hard and hard-to-easy curriculum orderings across multiple GNN architectures and graph-classification datasets.',
  },
  {
    type: 'publication',
    icon: Presentation,
    title: 'Co-Author — Confusion-Aware Transfer Teacher Curriculum Learning Framework',
    subtitle: 'Global South ML Workshop at ICML 2026 · Seoul, South Korea',
    period: 'Jul 2026',
    description:
      'Co-authored a deep learning optimization framework that disentangles curriculum scoring, pacing, and feature-separation effects. Preprint: arXiv:2606.17706.',
    link: 'https://arxiv.org/abs/2606.17706',
    linkLabel: 'Read on arXiv',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'BSc (Hons) IT - Data Science',
    subtitle: 'SLIIT',
    period: '2024 - 2028 · GPA: 3.6 / 4.0',
    description:
      'Coursework and projects spanning machine learning, quantitative modeling, backend systems, and production-grade AI engineering.',
  },
]

function Timeline() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" aria-labelledby="timeline-heading" className="px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.65 }}
      >
        <h2 id="timeline-heading" className="mb-9 text-2xl font-semibold text-slate-100 sm:text-3xl">
          Experience & Education
        </h2>
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
                <h3 className="text-lg font-semibold text-slate-100">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-cyan-200"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  {item.subtitle} · {item.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    {item.linkLabel} <ArrowUpRight size={15} aria-hidden />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Timeline
