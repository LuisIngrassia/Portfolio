import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['about', 'skills', 'experience', 'projects', 'cv', 'contact']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lang = i18n.language

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(lang === 'en' ? 'es' : 'en')
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="font-display font-bold text-lg tracking-tight text-white hover:text-purple-400 transition-colors"
        >
          LPI<span className="text-purple-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="text-sm text-white/60 hover:text-white transition-colors capitalize tracking-wide"
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: lang toggle + mobile menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full glass border border-white/10 text-xs font-medium text-white/70 hover:text-white hover:border-purple-500/50 transition-all"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
            <span className="text-white/30">/</span>
            <span className={lang === 'es' ? 'text-white' : 'text-white/40'}>ES</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-white/70 hover:text-white transition-colors capitalize"
                  >
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
