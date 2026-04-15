import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function ScoreRing({ score }) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (score / 100) * circumference

  const color = score >= 80 ? '#22c55e' : score >= 60 ? '#a855f7' : score >= 40 ? '#f59e0b' : '#ef4444'

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="100" height="100" className="-rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-2xl font-bold text-white font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color }}
        >
          {score}%
        </motion.span>
      </div>
    </div>
  )
}

function ResultCard({ result }) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6"
    >
      {/* Score + verdict */}
      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 glass rounded-2xl border border-white/10">
        <ScoreRing score={result.matchScore} />
        <div className="flex-1 text-center sm:text-left">
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-1">
            {t('analyzer.matchScore')}
          </p>
          <p className="text-white font-semibold text-lg leading-relaxed">{result.verdict}</p>
        </div>
      </div>

      {/* Strengths + Gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass rounded-2xl p-5 border border-green-500/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-400">✓</span>
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase">
              {t('analyzer.strengths')}
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {result.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-5 border border-amber-500/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-400">△</span>
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              {t('analyzer.gaps')}
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {result.gaps.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function AIAnalyzer() {
  const { t } = useTranslation()
  const [jobDescription, setJobDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const analyze = async () => {
    if (!jobDescription.trim() || loading) return
    setLoading(true)
    setResult(null)
    setError(null)

    try {
      const res = await fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription }),
      })

      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setResult(data)
    } catch {
      setError(t('analyzer.error'))
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) analyze()
  }

  return (
    <section id="analyzer" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <span className="text-base">🤖</span>
            {t('analyzer.poweredBy')}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t('analyzer.title')}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {t('analyzer.subtitle')}
          </p>
        </motion.div>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl border border-white/10 p-6 mb-4 glow-purple"
        >
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            onKeyDown={handleKey}
            placeholder={t('analyzer.placeholder')}
            rows={8}
            className="w-full bg-transparent text-white/80 placeholder-white/20 text-sm leading-relaxed resize-none outline-none"
          />
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <span className="text-white/20 text-xs">Ctrl + Enter to analyze</span>
            <button
              onClick={analyze}
              disabled={!jobDescription.trim() || loading}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-900/30 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  {t('analyzer.analyzing')}
                </>
              ) : (
                <>
                  <span>✦</span>
                  {t('analyzer.analyze')}
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-sm text-center mb-4"
            >
              {error}
            </motion.p>
          )}
          {result && <ResultCard result={result} />}
        </AnimatePresence>
      </div>
    </section>
  )
}
