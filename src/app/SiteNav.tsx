"use client"

import Link from 'next/link'
import { useRef } from 'react'

export default function SiteNav() {
  const toggleRef = useRef<HTMLInputElement>(null)

  // Close the mobile menu the moment any nav link is clicked.
  const closeMenu = () => {
    if (toggleRef.current) {
      toggleRef.current.checked = false
    }
  }

  return (
    <>
      {/* Mobile menu toggle — checkbox-driven CSS menu, closed via ref on link click */}
      <input
        ref={toggleRef}
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle-checkbox"
        aria-hidden="true"
      />
      <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Toggle navigation menu" aria-controls="site-nav">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav className="nav-links" id="site-nav">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/what-we-do" onClick={closeMenu}>What We Do</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <Link href="/partners" onClick={closeMenu}>Partners</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/donate" className="nav-cta-mobile" onClick={closeMenu}>Donate</Link>
      </nav>
    </>
  )
}
