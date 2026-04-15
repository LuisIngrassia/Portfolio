import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { personalInfo } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const contactLinks = [
  {
    key: 'email',
    label: 'ingrassialuispedro@gmail.com',
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-purple-600 to-blue-600',
    glow: 'hover:shadow-purple-900/40',
  },
  {
    key: 'linkedin',
    label: 'linkedin.com/in/luisingrassia',
    href: personalInfo.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    gradient: 'from-blue-600 to-cyan-600',
    glow: 'hover:shadow-blue-900/40',
  },
  {
    key: 'phone',
    label: '+54 11 5584 8885',
    href: `tel:${personalInfo.phone}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    gradient: 'from-pink-600 to-purple-600',
    glow: 'hover:shadow-pink-900/40',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-14 text-center">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">Let's talk</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-white/50 text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        {/* Contact cards */}
        <div className="flex flex-col gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.key}
              href={link.href}
              target={link.key !== 'phone' && link.key !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              {...fadeUp(i * 0.1)}
              whileHover={{ x: 6 }}
              className={`flex items-center gap-5 p-5 glass rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group shadow-lg ${link.glow} hover:shadow-xl`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                {link.icon}
              </div>
              <div>
                <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-0.5">
                  {t(`contact.${link.key}`)}
                </p>
                <p className="text-white font-medium">{link.label}</p>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-purple-400 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
