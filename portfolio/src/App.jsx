import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CVSection from './components/CVSection'
import AIAnalyzer from './components/AIAnalyzer'
import Contact from './components/Contact'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-white/20 text-sm">
        © {new Date().getFullYear()} Luis Pedro Ingrassia — {t('footer.built')}
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-noise">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(59,130,246,0.06) 0%, transparent 60%)',
        }} />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CVSection />
        <AIAnalyzer />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
