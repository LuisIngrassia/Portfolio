import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { personalInfo, experience, skills, education, languages } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function CVSection() {
  const { t, i18n } = useTranslation()
  const cvEn = personalInfo.cvEnglish
  const cvEs = personalInfo.cvSpanish
  const isEn = i18n.language === 'en'

  return (
    <section id="cv" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-10 text-center">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">My resume</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cv.title')}
          </h2>
          {/* Download buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={isEn ? cvEn : cvEs}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/60 hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t('cv.download')}
            </a>
            <a
              href={isEn ? cvEs : cvEn}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 text-white/70 font-semibold text-sm hover:text-white hover:border-purple-500/50 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t('cv.downloadEs')}
            </a>
          </div>
        </motion.div>

        {/* CV Display */}
        <motion.div
          {...fadeUp(0.15)}
          className="glass rounded-3xl border border-white/10 overflow-hidden glow-purple"
        >
          {/* CV Header */}
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/30 p-8 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-bold text-white mb-1">{personalInfo.name}</h1>
                <p className="text-purple-400 font-medium tracking-wide">{personalInfo.role}</p>
              </div>
              <div className="flex flex-col gap-1.5 text-sm text-white/50">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>✉️</span> {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>📞</span> {personalInfo.phone}
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                  <span>💼</span> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              {/* Skills */}
              <div>
                <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">
                  {t('skills.title')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 text-xs"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">
                  {t('about.languages')}
                </h3>
                <div className="flex flex-col gap-2">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between text-sm">
                      <span className="text-white/70">{lang.name}</span>
                      <span className="text-white/40">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">
                  {t('about.education')}
                </h3>
                <div className="flex flex-col gap-3">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <p className="text-white/70 text-xs font-medium leading-snug">{edu.degree}</p>
                      <p className="text-purple-400 text-xs">{edu.institution}</p>
                      <p className="text-white/30 text-xs">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — experience */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div>
                <h3 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                  {t('experience.title')}
                </h3>
                <div className="flex flex-col gap-6">
                  {experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex items-baseline justify-between mb-1">
                        <div>
                          <span className="text-white font-semibold text-sm">{exp.company}</span>
                          <span className="text-white/40 text-sm"> — {exp.role}</span>
                        </div>
                        <span
                          className="text-xs flex-shrink-0 ml-2"
                          style={{ color: exp.color }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-1 mt-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/50 text-xs leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
