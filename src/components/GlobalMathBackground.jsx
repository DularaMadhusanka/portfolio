import { motion } from 'framer-motion'

const globalEquations = [
  { text: 'nabla_theta L(theta)', top: '8%', left: '6%', delay: 0.2 },
  { text: 'E[X] = integral x f(x) dx', top: '16%', left: '68%', delay: 0.6 },
  { text: 'P(X > x) approx Cx^-alpha', top: '32%', left: '12%', delay: 0.9 },
  { text: 'Var(X) = E[X^2] - E[X]^2', top: '44%', left: '71%', delay: 0.35 },
  { text: 'h_v^(k+1)=sigma(W_self h_v^k + sum a_uv W_msg h_u^k)', top: '58%', left: '9%', delay: 0.5 },
  { text: 'A_hat = D^(-1/2)(A+I)D^(-1/2)', top: '72%', left: '64%', delay: 0.8 },
  { text: 'arg min_theta E[L(y, f_theta(x))]', top: '84%', left: '21%', delay: 0.4 },
]

function GlobalMathBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 1600 1000" fill="none">
        <path d="M0 180C240 120 360 280 560 210C840 110 980 260 1260 180C1400 140 1500 110 1600 130" stroke="#0ea5e9" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M0 670C180 640 380 760 600 690C840 610 980 750 1200 700C1400 660 1500 610 1600 640" stroke="#22d3ee" strokeOpacity="0.35" strokeWidth="2" />
        <path d="M0 430C180 460 320 390 520 430C700 470 920 370 1140 430C1360 490 1480 390 1600 420" stroke="#3b82f6" strokeOpacity="0.3" strokeWidth="1.5" />
      </svg>
      {globalEquations.map((equation) => (
        <motion.span
          key={equation.text}
          className="absolute rounded px-1 font-mono text-[11px] text-cyan-100/30 shadow-[0_0_16px_rgba(34,211,238,0.16)]"
          style={{ top: equation.top, left: equation.left }}
          animate={{ opacity: [0.18, 0.42, 0.18], y: [0, -3, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: equation.delay, ease: 'easeInOut' }}
        >
          {equation.text}
        </motion.span>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_62%_78%,rgba(34,211,238,0.1),transparent_36%)]" />
    </div>
  )
}

export default GlobalMathBackground
