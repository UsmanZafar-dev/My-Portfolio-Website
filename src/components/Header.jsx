import React, { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    // Sticky header scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // Scroll spy IntersectionObserver
    const sections = document.querySelectorAll('section[id]')
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id'))
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => spyObserver.observe(s))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      spyObserver.disconnect()
    }
  }, [])

  const handleLinkClick = (e, targetId) => {
    const target = document.querySelector(targetId)
    if (!target) return
    e.preventDefault()
    const top = target.getBoundingClientRect().top + window.scrollY - 70 // nav offset
    window.scrollTo({ top, behavior: 'smooth' })
    setIsMobileOpen(false)
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`nav ${isScrolled ? 'is-scrolled' : ''}`} id="nav">
      <div className="container nav__inner">
        <a href="#hero" className="nav__logo" aria-label="Home" onClick={(e) => handleLinkClick(e, '#hero')}>
          <img
            className="nav__avatar"
            src="https://usmanzafar.netlify.app/assets/usman-avatar.jpg"
            alt="Usman Zafar"
            width="32"
            height="32"
          />
          <span className="nav__logo-text">Usman Zafar</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav__link ${activeSection === link.href.substring(1) ? 'is-active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="/Usman%20Zafar%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--primary">
            Resume
          </a>
          <button
            className={`nav__toggle ${isMobileOpen ? 'is-open' : ''}`}
            id="navToggle"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        className={`nav__mobile ${isMobileOpen ? 'is-visible' : ''}`}
        id="navMobile"
        hidden={!isMobileOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav__mobile-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header
