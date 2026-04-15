import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { experience } from '../data'

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">Where I've worked</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            {t('experience.title')}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/50 via-blue-600/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                className={`relative flex flex-col items-start gap-6 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purple-500 z-10 mt-6"
                  style={{ background: '#050810', boxShadow: `0 0 12px ${exp.color}60` }}
                />

                {/* Spacer for centering */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card — even: right side (pl-12), odd: left side (pr-12) */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group">
                    {/* Company badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                        style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40`, color: exp.color }}
                      >
                        {exp.company[0]}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg leading-tight">{exp.company}</h3>
                        <p className="text-white/50 text-sm">{exp.role}</p>
                      </div>
                      <span
                        className="ml-auto text-xs font-medium px-3 py-1 rounded-full"
                        style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2 mt-4">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-white/55 text-sm leading-relaxed">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
