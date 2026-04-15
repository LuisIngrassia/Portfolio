import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { education, languages } from '../data'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const langLevels = {
  Native: 100,
  Advanced: 85,
  Basic: 35,
}

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-16 text-center">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">Who I am</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            {t('about.title')}
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bio — large card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 glass rounded-2xl p-8 glow-purple"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-lg">
                👤
              </div>
              <h3 className="text-white font-semibold text-lg">Luis Pedro Ingrassia</h3>
            </div>
            <p className="text-white/60 leading-relaxed text-base">
              {t('about.body')}
            </p>
          </motion.div>

          {/* Languages */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-5">
              {t('about.languages')}
            </p>
            <div className="flex flex-col gap-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white/80 text-sm font-medium">{lang.name}</span>
                    <span className="text-white/40 text-xs">{lang.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${langLevels[lang.level]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 glass rounded-2xl p-6"
          >
            <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-5">
              {t('about.education')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  <span className="text-purple-400 text-xs font-medium">{edu.period}</span>
                  <span className="text-white font-medium text-sm leading-snug">{edu.degree}</span>
                  <span className="text-white/40 text-xs">{edu.institution}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
