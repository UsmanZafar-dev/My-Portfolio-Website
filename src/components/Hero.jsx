import React, { useState, useEffect } from 'react'

function Hero() {
  const [typewriterText, setTypewriterText] = useState('')

  useEffect(() => {
    const phrases = [
      'Software Engineer',
      'AI/ML Engineer',
      'Backend Developer',
      'Android Developer',
    ]

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypewriterText(phrases[0])
      return
    }

    let phraseIdx = 0
    let charIdx = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      const current = phrases[phraseIdx]
      if (!deleting) {
        setTypewriterText(current.slice(0, charIdx + 1))
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          timeoutId = setTimeout(tick, 1600)
        } else {
          timeoutId = setTimeout(tick, 70)
        }
      } else {
        setTypewriterText(current.slice(0, charIdx - 1))
        charIdx--
        if (charIdx === 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
          timeoutId = setTimeout(tick, 70)
        } else {
          timeoutId = setTimeout(tick, 40)
        }
      }
    }

    tick()
    return () => clearTimeout(timeoutId)
  }, [])

  const handleScrollClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#about')
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleWorkClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#projects')
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" class="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="hero__badge-dot"></span>
            Open to Discuss New Opportunities
          </div>

          <h1 className="hero__name reveal">
            Hi, I'm <span className="gradient-text">Usman Zafar</span>
          </h1>

          <h2 className="hero__title reveal">
            I build software that solves real-world problems.
          </h2>

          <div className="hero__typewriter-container reveal">
            <span className="typewriter" id="typewriter">{typewriterText}</span>
          </div>

          <p className="hero__subtitle reveal">
            I'm a Software Engineer passionate about developing AI-powered applications that combine Machine Learning, backend engineering, and modern mobile technologies. Currently building intelligent solutions with Python, FastAPI, Kotlin, and modern AI frameworks.
          </p>

          <div className="hero__location reveal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Lahore, Pakistan</span>
          </div>

          <div className="hero__actions reveal">
            <a href="#projects" className="btn btn--primary" onClick={handleWorkClick}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={handleContactClick}>Get In Touch</a>
          </div>

          <div className="hero__meta reveal">
            <a href="https://github.com/UsmanZafar-dev" target="_blank" rel="noopener" className="hero__meta-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.19 1.18a11 11 0 0 1 5.81 0c2.22-1.49 3.19-1.18 3.19-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/usman-zafar-dev/" target="_blank" rel="noopener" className="hero__meta-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:usman.zafar0509@gmail.com" className="hero__meta-link" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="hero__portrait reveal">
          <div className="hero__portrait-wrap">
            <img src="https://usmanzafar.netlify.app/assets/usman-zafar.jpg" alt="Portrait of Usman Zafar" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about" onClick={handleScrollClick}>
        <span></span>
      </a>
    </section>
  )
}

export default Hero
