import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Network, Sigma, SquareFunction } from 'lucide-react'

const researchPillars = [
  {
    title: 'Calculus & Optimization',
    icon: SquareFunction,
    notes: ['Gradient flow intuition', 'Loss surface behavior', 'Differentiable system design'],
  },
  {
    title: 'Probability & Statistics',
    icon: Sigma,
    notes: ['Heavy-tailed distributions', 'VaR / CVaR estimation', 'Bayesian uncertainty perspective'],
  },
  {
    title: 'GNN & Curriculum Learning',
    icon: Network,
    notes: [
      'Brain-inspired graphs for human behavior prediction',
      'Curriculum schedules for spatio-temporal dependencies',
      'Progressive PyTorch training, ablations, and SOTA benchmarks',
    ],
  },
]

const matrixRows = [
  ['P(node_i -> node_j)', '0.72', 'active'],
  ['dL/dtheta_t', '1.4e-03', 'stable'],
  ['Tail(alpha)', '2.11', 'heavy'],
  ['Covariance shift', '0.08', 'controlled'],
]

const gnnNodes = [
  { x: 42, y: 40 },
  { x: 124, y: 24 },
  { x: 208, y: 46 },
  { x: 278, y: 30 },
  { x: 78, y: 98 },
  { x: 170, y: 88 },
  { x: 250, y: 98 },
]

const gnnEdges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [1, 4],
  [1, 5],
  [2, 5],
  [2, 6],
  [3, 6],
  [4, 5],
  [5, 6],
]

const theoremCards = [
  {
    title: 'Concentration Insight',
    statement: 'As sample size n increases, empirical mean converges to expected value under finite variance.',
    proofHint: 'Use weak law intuition and variance shrinkage proportional to 1/n.',
  },
  {
    title: 'Heavy-Tail Warning',
    statement: 'Gaussian assumptions underestimate extreme events when alpha-tail distributions govern returns.',
    proofHint: 'Compare kurtosis and decay rates between exp(-x^2) and x^-alpha.',
  },
  {
    title: 'Message Passing Stability',
    statement: 'Normalized adjacency and residual connections improve gradient flow in deeper GNN layers.',
    proofHint: 'Bound spectral amplification and preserve identity paths.',
  },
]

function ResearchLab({ viewMode }) {
  const reduceMotion = useReducedMotion()
  const [activePoint, setActivePoint] = useState({ x: 160, y: 60 })

  const glowByNode = (x, y) => {
    const dx = activePoint.x - x
    const dy = activePoint.y - y
    const distance = Math.hypot(dx, dy)
    return Math.max(0.15, 1 - distance / 180)
  }

  return (
    <section id="research" aria-labelledby="research-heading" className="px-6 py-20 sm:px-10 lg:px-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? false : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.65 }}
      >
        <h2 id="research-heading" className="mb-8 text-2xl font-semibold text-slate-100 sm:text-3xl">
          Math & GNN Research Lab
        </h2>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5 shadow-[0_22px_70px_-55px_rgba(34,211,238,0.8)]">
            <p className="mb-4 font-mono text-xs tracking-[0.16em] text-cyan-300 uppercase">research vectors</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {researchPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                  <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                    <pillar.icon size={16} />
                    {pillar.title}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {pillar.notes.map((note) => (
                      <li key={note}>- {note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-950/60 p-3">
              <p className="mb-2 font-mono text-xs text-slate-400">model_equation.log</p>
              <p className="font-mono text-xs text-cyan-200">
                h_v^(k+1) = sigma( W_self h_v^k + sum_(u in N(v)) a_uv W_msg h_u^k )
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5">
            <p className="mb-3 font-mono text-xs tracking-[0.16em] text-cyan-300 uppercase">stochastic state matrix</p>
            <div className="space-y-2">
              {matrixRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center rounded-md border border-slate-800 bg-slate-950/55 px-3 py-2 text-xs">
                  <span className="font-mono text-slate-300">{row[0]}</span>
                  <span className="font-mono text-cyan-200">{row[1]}</span>
                  <span className="font-mono text-slate-400">{row[2]}</span>
                </div>
              ))}
            </div>
            <svg className="mt-5 h-28 w-full rounded-md border border-slate-800 bg-slate-950/50 p-2" viewBox="0 0 320 100" fill="none">
              <path d="M10 78C32 72 46 60 70 62C94 64 112 76 136 60C160 44 175 28 196 32C218 36 234 58 255 62C276 66 292 60 310 50" stroke="#60a5fa" strokeWidth="2" />
              <circle cx="70" cy="62" r="3" fill="#22d3ee" />
              <circle cx="136" cy="60" r="3" fill="#22d3ee" />
              <circle cx="196" cy="32" r="3" fill="#22d3ee" />
              <circle cx="255" cy="62" r="3" fill="#22d3ee" />
            </svg>
          </article>
        </div>

        {viewMode === 'research' ? (
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5">
            <p className="mb-3 font-mono text-xs tracking-[0.16em] text-cyan-300 uppercase">interactive gnn canvas</p>
            <div
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-2"
              onMouseMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect()
                const x = ((event.clientX - bounds.left) / bounds.width) * 320
                const y = ((event.clientY - bounds.top) / bounds.height) * 120
                setActivePoint({ x, y })
              }}
              onMouseLeave={() => setActivePoint({ x: 160, y: 60 })}
            >
              <svg className="h-44 w-full" viewBox="0 0 320 120" fill="none">
                {gnnEdges.map((edge) => {
                  const source = gnnNodes[edge[0]]
                  const target = gnnNodes[edge[1]]
                  const opacity = ((glowByNode(source.x, source.y) + glowByNode(target.x, target.y)) / 2).toFixed(2)
                  return (
                    <line
                      key={`${edge[0]}-${edge[1]}`}
                      x1={source.x}
                      y1={source.y}
                      x2={target.x}
                      y2={target.y}
                      stroke="#334155"
                      strokeWidth="1.4"
                      opacity={opacity}
                    />
                  )
                })}
                {gnnNodes.map((node, idx) => (
                  <motion.circle
                    key={idx}
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill="#22d3ee"
                    animate={
                      reduceMotion
                        ? { opacity: glowByNode(node.x, node.y) }
                        : { opacity: [0.4, glowByNode(node.x, node.y), 0.5] }
                    }
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 3 + idx * 0.1, repeat: Infinity }
                    }
                  />
                ))}
              </svg>
            </div>
            <p className="mt-3 text-xs text-slate-400">Node intensity adapts around the active latent center (message passing focus).</p>
          </article>

          <article className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5">
            <p className="mb-3 font-mono text-xs tracking-[0.16em] text-cyan-300 uppercase">theorem / proof cards</p>
            <div className="space-y-3">
              {theoremCards.map((card) => (
                <div key={card.title} className="rounded-lg border border-slate-800 bg-slate-950/55 p-3">
                  <p className="text-sm font-semibold text-cyan-200">{card.title}</p>
                  <p className="mt-1 text-xs text-slate-300">{card.statement}</p>
                  <p className="mt-2 font-mono text-[11px] text-slate-400">Proof sketch: {card.proofHint}</p>
                </div>
              ))}
            </div>
          </article>
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5">
            <p className="mb-3 font-mono text-xs tracking-[0.16em] text-cyan-300 uppercase">research summary for recruiters</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {theoremCards.map((card) => (
                <div key={card.title} className="rounded-lg border border-slate-800 bg-slate-950/55 p-3">
                  <p className="text-sm font-semibold text-cyan-200">{card.title}</p>
                  <p className="mt-1 text-xs text-slate-300">{card.statement}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default ResearchLab
