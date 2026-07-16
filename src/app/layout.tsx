import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'ZeroEco Africa — Climate Solutions, Carbon Markets, Sustainable Livelihoods',
  description:
    'ZeroEco Africa restores ecosystems, develops high-integrity carbon projects, and empowers communities across Africa to lead climate action.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <header className="site-header">
          <div className="nav-wrap">
            {/* Brand/Logo links to Home - this reloads to the start page */}
            <Link href="/" className="brand">
              <img src="/images/logo-mark.png" alt="ZeroEco Africa" />
              ZeroEco<span className="brand-dot">.</span>Africa
            </Link>

            <Link href="/donate" className="nav-cta">Donate</Link>

            {/* Mobile menu toggle — pure CSS, no JS needed.
                Must precede .nav-links in the DOM so the
                ":checked ~ .nav-links" sibling selector works;
                flex `order` in CSS puts it back on the right visually. */}
            <input type="checkbox" id="nav-toggle" className="nav-toggle-checkbox" aria-hidden="true" />
            <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Toggle navigation menu" aria-controls="site-nav">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <nav className="nav-links" id="site-nav">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/what-we-do">What We Do</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/donate" className="nav-cta-mobile">Donate</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer>
          <div className="footer-grid">
            <div>
              <div className="brand">
                <img src="/images/logo-mark.png" alt="ZeroEco Africa" />
                ZeroEco<span className="brand-dot">.</span>Africa
              </div>
              <p style={{ maxWidth: '320px', fontSize: '0.92rem' }}>
                A climate solutions organization restoring nature, advancing
                carbon markets, and empowering communities across Africa.
              </p>
            </div>

            <div>
              <h4>Organization</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/what-we-do">What We Do</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/partners">Partners</Link></li>
              </ul>
            </div>

            <div>
              <h4>Involved</h4>
              <ul>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/partners">Partner With Us</Link></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li>info@zeroecoafrica.org</li>
                <li>+254 XXX XXX XXX</li>
                <li>Nairobi, Kenya</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 ZeroEco Africa. All rights reserved.</span>
            <span>Restoring Nature. Empowering Communities.</span>
          </div>
        </footer>

      </body>
    </html>
  )
}