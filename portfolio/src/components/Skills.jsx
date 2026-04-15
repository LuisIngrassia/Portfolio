import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { skills } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const categoryConfig = {
  frontend: { label: 'Frontend', gradient: 'from-purple-600 to-pink-600', accent: 'purple' },
  backend: { label: 'Backend', gradient: 'from-blue-600 to-cyan-600', accent: 'blue' },
  database: { label: 'Database', gradient: 'from-green-600 to-emerald-600', accent: 'green' },
  tools: { label: 'Tools', gradient: 'from-orange-600 to-amber-600', accent: 'orange' },
}

const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = []
  acc[skill.category].push(skill)
  return acc
}, {})

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            {t('skills.title')}
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Frontend — large */}
          <motion.div
            {...fadeUp(0.1)}
            className="col-span-2 row-span-2 glass rounded-2xl p-6 hover:border-purple-500/30 border border-white/10 transition-all group"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryConfig.frontend.gradient} bg-opacity-20 mb-5`}>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">
                {t('skills.frontend')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {groupedSkills.frontend?.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.07] border border-white/10 text-white/80 text-sm font-medium hover:border-purple-500/50 hover:text-white transition-all cursor-default"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            {...fadeUp(0.2)}
            className="col-span-2 glass rounded-2xl p-6 hover:border-blue-500/30 border border-white/10 transition-all"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryConfig.backend.gradient} bg-opacity-20 mb-5`}>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">
                {t('skills.backend')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {groupedSkills.backend?.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.07] border border-white/10 text-white/80 text-sm font-medium hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            {...fadeUp(0.3)}
            className="glass rounded-2xl p-5 hover:border-green-500/30 border border-white/10 transition-all"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryConfig.database.gradient} bg-opacity-20 mb-4`}>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">
                {t('skills.database')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {groupedSkills.database?.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.07] border border-white/10 text-white/80 text-sm font-medium hover:border-green-500/50 hover:text-white transition-all cursor-default"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            {...fadeUp(0.4)}
            className="glass rounded-2xl p-5 hover:border-orange-500/30 border border-white/10 transition-all"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryConfig.tools.gradient} bg-opacity-20 mb-4`}>
              <span className="text-white text-xs font-semibold tracking-wide uppercase">
                {t('skills.tools')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {groupedSkills.tools?.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.07] border border-white/10 text-white/80 text-sm font-medium hover:border-orange-500/50 hover:text-white transition-all cursor-default"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
