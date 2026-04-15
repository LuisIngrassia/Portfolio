import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { personalInfo } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const { t, i18n } = useTranslation()
  const cvFile = i18n.language === 'es' ? personalInfo.cvSpanish : personalInfo.cvEnglish

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="orb-delay absolute top-1/3 -right-40 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        />
        <div
          className="orb absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-green-500/30 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t('hero.available')}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-white/60 text-lg mb-2 tracking-wide"
        >
          {t('hero.greeting')}
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.3)}
          className="font-display text-6xl md:text-8xl font-extrabold mb-4 leading-none tracking-tight"
        >
          <span className="text-white">Luis Pedro</span>
          <br />
          <span className="gradient-text">Ingrassia</span>
        </motion.h1>

        {/* Role */}
        <motion.div {...fadeUp(0.4)} className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <p className="text-white/70 text-xl font-medium tracking-widest uppercase text-sm">
            {t('hero.role')}
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={cvFile}
            download
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/60 hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t('hero.downloadCV')}
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-white/20 text-white/80 font-semibold text-sm hover:text-white hover:border-purple-500/50 transition-all hover:scale-105 active:scale-95"
          >
            {t('hero.viewProjects')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.7)} className="flex items-center justify-center gap-5 mt-12">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-purple-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white/30 hover:text-purple-400 transition-colors"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
