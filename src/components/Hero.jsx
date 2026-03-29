import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, AtSign, Download, ExternalLink, FolderGit2 } from 'lucide-react'

const floatingNodes = [
  { top: '12%', left: '10%', delay: 0.1 },
  { top: '28%', left: '74%', delay: 0.3 },
  { top: '65%', left: '18%', delay: 0.5 },
  { top: '74%', left: '82%', delay: 0.8 },
  { top: '42%', left: '51%', delay: 0.6 },
  { top: '20%', left: '42%', delay: 0.2 },
]

const mathFragments = [
  { text: 'int_-inf^inf exp(-x^2/2) dx = sqrt(2pi)', top: '10%', left: '6%', delay: 0.2 },
  { text: 'P(X > x) approx Cx^-alpha', top: '20%', left: '58%', delay: 0.5 },
  { text: 'partialL/partialtheta = 0', top: '38%', left: '74%', delay: 0.8 },
  { text: 'n->inf, Xbar_n -> E[X]', top: '52%', left: '8%', delay: 0.3 },
  { text: 'h_v^(k+1)=sigma(W_self h_v^k+sum a_uv W_msg h_u^k)', top: '76%', left: '26%', delay: 0.6 },
]

function Hero({ viewMode }) {
  const reduceMotion = useReducedMotion()
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
  const quantSignals = [
    { label: 'P(X > VaR)', value: '0.041', tone: 'text-cyan-300' },
    { label: 'GNN Node Embeddings', value: '128D', tone: 'text-blue-300' },
    { label: 'GPU Utilization', value: '93%', tone: 'text-indigo-300' },
    { label: 'Tail Risk Regime', value: 'Heavy', tone: 'text-cyan-200' },
  ]

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-cyan-500/15 px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.22),transparent_44%),radial-gradient(circle_at_88%_14%,rgba(59,130,246,0.20),transparent_38%),radial-gradient(circle_at_50%_86%,rgba(8,145,178,0.16),transparent_45%)]" />
        {mathFragments.map((fragment) => (
          <motion.span
            key={fragment.text}
            className={`absolute rounded px-1 font-mono text-[11px] ${
              viewMode === 'research'
                ? 'text-cyan-100/45 shadow-[0_0_22px_rgba(34,211,238,0.25)]'
                : 'text-cyan-100/28 shadow-[0_0_14px_rgba(34,211,238,0.16)]'
            }`}
            style={{ top: fragment.top, left: fragment.left }}
            animate={
              reduceMotion
                ? viewMode === 'research'
                  ? { opacity: 0.45, y: 0 }
                  : { opacity: 0.28, y: 0 }
                : viewMode === 'research'
                  ? { opacity: [0.35, 0.62, 0.35], y: [0, -3, 0] }
                  : { opacity: [0.2, 0.35, 0.2], y: [0, -2, 0] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 7, repeat: Infinity, delay: fragment.delay, ease: 'easeInOut' }
            }
          >
            {fragment.text}
          </motion.span>
        ))}
        <svg className="absolute right-4 bottom-4 h-44 w-80 opacity-35 md:right-10 md:bottom-10" viewBox="0 0 320 170" fill="none" aria-hidden="true">
          <path d="M10 150H308" stroke="#334155" strokeDasharray="4 6" />
          <path d="M10 120H308" stroke="#334155" strokeDasharray="4 6" />
          <motion.path
            d="M14 148C58 148 70 44 120 44C170 44 184 148 230 148C264 148 282 148 306 148"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: reduceMotion ? 1 : 0.35, opacity: 0.7 }}
            animate={
              reduceMotion
                ? { pathLength: 1, opacity: 0.75 }
                : { pathLength: [0.35, 1], opacity: [0.45, 0.9, 0.45] }
            }
            transition={
              reduceMotion ? { duration: 0 } : { duration: 5, repeat: Infinity, repeatType: 'mirror' }
            }
          />
          <motion.path
            d="M14 148C66 148 90 92 124 80C150 70 172 68 200 80C236 96 254 148 306 148"
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: reduceMotion ? 1 : 0.35, opacity: 0.85 }}
            animate={
              reduceMotion
                ? { pathLength: 1, opacity: 0.85 }
                : { pathLength: [0.35, 1], opacity: [0.55, 1, 0.55] }
            }
            transition={
              reduceMotion ? { duration: 0 } : { duration: 4.3, repeat: Infinity, repeatType: 'mirror' }
            }
          />
          <text x="178" y="34" fill="#60a5fa" fontSize="10">Normal</text>
          <text x="230" y="64" fill="#22d3ee" fontSize="10">Heavy-tail</text>
        </svg>
        <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 1200 600" fill="none" aria-hidden="true">
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
            animate={{ y: reduceMotion ? 0 : [0, -12, 0], opacity: reduceMotion ? 0.75 : [0.4, 1, 0.5] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 5 + idx, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }
            }
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 0.7 }}
      >
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/65 px-3 py-1 text-xs tracking-[0.18em] text-cyan-300 uppercase backdrop-blur">
            Quant Terminal x AI Startup
          </div>

          <p className="text-sm tracking-[0.14em] text-slate-400 uppercase">
            ML Engineer & Data Scientist
          </p>

          <h1 id="hero-heading" className="max-w-4xl text-4xl leading-tight font-semibold tracking-tight text-slate-50 sm:text-6xl">
            Dulara Madusanka builds{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              production-grade intelligence
            </span>{' '}
            from advanced quantitative systems.
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            ML engineer with end-to-end experience across research-grade models, backend systems, and shipped AI
            products. Delivers GPU-optimized training stacks, retrieval and vision systems, and cloud simulation
            platforms—with a focus on reliability, metrics, and production readiness.
          </p>

          {viewMode === 'research' ? (
            <div className="overflow-hidden rounded-xl border border-cyan-500/20 bg-slate-900/60">
              <motion.div
                className="flex gap-8 px-4 py-2 text-xs tracking-[0.16em] text-slate-300 uppercase"
                animate={reduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
                transition={reduceMotion ? { duration: 0 } : { duration: 16, repeat: Infinity, ease: 'linear' }}
              >
                <span>d/dx e^x = e^x</span>
                <span>E[X] = integral x f(x) dx</span>
                <span>Var(X) = E[X^2] - E[X]^2</span>
                <span>G = (V, E), phi(v) {'->'} h_v</span>
                <span>P(X {'>'} x) ~ x^-alpha</span>
                <span>d/dx e^x = e^x</span>
                <span>E[X] = integral x f(x) dx</span>
                <span>Var(X) = E[X^2] - E[X]^2</span>
              </motion.div>
            </div>
          ) : (
            <div className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
              <p className="text-sm text-slate-300">
                ML research and engineering depth in probability, optimization, graph-based models, and production ML
                systems.
              </p>
            </div>
          )}

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
          <p className="w-fit rounded border border-cyan-500/30 bg-slate-900/70 px-2.5 py-1 text-xs text-cyan-200">
            Resume last updated: Mar 2026
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-2 text-slate-300">
            <a
              href="https://github.com/DularaMadhusanka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              <FolderGit2 size={17} aria-hidden /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/dulara-madusanka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              <ExternalLink size={17} aria-hidden /> LinkedIn
            </a>
            <a href="mailto:IT24101566@my.sliit.lk" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
              <AtSign size={17} /> IT24101566@my.sliit.lk
            </a>
            <span className="inline-flex items-center gap-2 text-slate-400">+94 70 465 5150</span>
          </div>
        </div>

        <aside className="rounded-2xl border border-cyan-400/20 bg-slate-950/65 p-5 shadow-[0_20px_90px_-50px_rgba(59,130,246,0.8)]" aria-label="Quant signal summary">
          <p className="mb-4 font-mono text-xs tracking-[0.18em] text-cyan-300 uppercase">quant signal monitor</p>
          {viewMode === 'research' ? (
            <>
              <div className="space-y-3">
                {quantSignals.map((signal) => (
                  <div key={signal.label} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/65 px-3 py-2">
                    <span className="text-xs text-slate-400">{signal.label}</span>
                    <span className={`font-mono text-sm ${signal.tone}`}>{signal.value}</span>
                  </div>
                ))}
              </div>
              <svg className="mt-6 h-28 w-full" viewBox="0 0 360 120" fill="none" aria-hidden="true">
                <path d="M4 104C35 84 58 62 86 66C114 69 146 108 178 82C210 56 238 26 266 40C294 54 320 92 356 76" stroke="#22d3ee" strokeWidth="2" />
                <path d="M4 112H356" stroke="#334155" strokeDasharray="4 6" />
                <path d="M4 84H356" stroke="#334155" strokeDasharray="4 6" />
                <path d="M4 56H356" stroke="#334155" strokeDasharray="4 6" />
              </svg>
            </>
          ) : (
            <ul className="space-y-2 text-sm text-slate-300">
              <li>- ML research at SLIIT: brain-inspired GNNs, curriculum learning, behavior modeling</li>
              <li>- ICARC 2026 tutorial resource person (curriculum learning & graph track)</li>
              <li>- Shipped Monte Carlo VaR/CVaR engine; stack: PyTorch, FastAPI, RAG, analytics (Python, Tableau)</li>
            </ul>
          )}
        </aside>
      </motion.div>
    </section>
  )
}

export default Hero
