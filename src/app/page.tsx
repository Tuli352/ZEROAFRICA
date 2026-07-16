import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO — untouched structure, wording now pulled directly from the Strategic Plan */}
      <section
        className="hero"
        style={{ backgroundImage: "url(/images/community-women.jpg)" }}
      >
        <div className="hero-badge">
          <img src="/images/logo-circle.png" alt="ZeroEco Africa mark" />
        </div>

        <div className="hero-content">
          <div className="eyebrow">Climate Solutions &bull; Carbon Markets &bull; Sustainable Livelihoods</div>
          <h1>
            Empowering Communities. <span className="hero-highlight">Restoring Nature.</span>
            <span className="hero-badge-inline">
              <img src="/images/logo-circle.png" alt="ZeroEco Africa mark" />
            </span>
            Advancing Climate Solutions.
          </h1>
          <p className="lede">
            To create lasting environmental and socio-economic impact by
            enabling communities, governments, and businesses to work
            together in addressing climate change while improving
            livelihoods and protecting natural ecosystems.
          </p>
          <div className="hero-actions">
            <Link href="/donate" className="btn btn-primary">Support the work</Link>
            <Link href="/what-we-do" className="btn btn-outline">See our approach</Link>
          </div>

          <div className="pillar-strip" aria-label="Our three strategic pillars">
            <Link href="/what-we-do#climate-action" className="pillar-chip p-climate">
              <span className="dot">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7 2 3 6 3 11c0 5 4 9 9 11 5-2 9-6 9-11 0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              Climate Action
            </Link>
            <Link href="/what-we-do#sustainable-livelihoods" className="pillar-chip p-livelihoods">
              <span className="dot">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5M10 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              Sustainable Livelihoods
            </Link>
            <Link href="/what-we-do#knowledge-innovation" className="pillar-chip p-knowledge">
              <span className="dot">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-11V2M9 2h6" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              Knowledge &amp; Innovation
            </Link>
          </div>
        </div>
      </section>

      <svg className="riverline" viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" />
      </svg>

      {/* THREE STRATEGIC PILLARS — kept front and center, given standout visual treatment */}
      <section className="section pillars-standout">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Our Three Strategic Pillars</div>
          <h2 className="kicker-title">Protect the Planet. Empower People. Scale Impact.</h2>
          <p className="lede">
            When communities are empowered with knowledge, sustainable
            livelihood opportunities, climate finance, innovative
            technologies, and strong partnerships, they become leaders in
            environmental conservation and climate action.
          </p>

          <div className="grid-3">
            <Link href="/what-we-do#climate-action" className="pillar-card p-climate" style={{ textDecoration: 'none' }}>
              <span className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7 2 3 6 3 11c0 5 4 9 9 11 5-2 9-6 9-11 0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              <span className="tag">Pillar I</span>
              <h3>Climate Action, Carbon Markets &amp; Environmental Stewardship</h3>
              <p>Reduce greenhouse gas emissions while restoring ecosystems through innovative climate solutions and carbon finance.</p>
            </Link>
            <Link href="/what-we-do#sustainable-livelihoods" className="pillar-card p-livelihoods" style={{ textDecoration: 'none' }}>
              <span className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5M10 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              <span className="tag">Pillar II</span>
              <h3>Sustainable Livelihoods &amp; Community Resilience</h3>
              <p>Empower communities to become active leaders in climate action through sustainable alternative livelihoods.</p>
            </Link>
            <Link href="/what-we-do#knowledge-innovation" className="pillar-card p-knowledge" style={{ textDecoration: 'none' }}>
              <span className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-11V2M9 2h6" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              <span className="tag">Pillar III</span>
              <h3>Knowledge, Innovation &amp; Strategic Partnerships</h3>
              <p>Accelerate climate action through research, innovation, partnerships and institutional excellence.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPLORE — walks visitors through every page in the header, in header order */}
      <section className="section section-mist">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Explore ZeroEco Africa</div>
          <h2 className="kicker-title">Everything you need, in order.</h2>
          <p className="lede">
            Follow the same path as our main menu to see who we are, how we
            work, what we&apos;ve built, who stands with us, and how to
            reach us.
          </p>

          <div className="explore-grid">
            <Link href="/about" className="explore-card">
              <span className="step">01 &middot; About</span>
              <h4>Who We Are</h4>
              <p>Our vision, mission, theory of change, values, and team.</p>
              <span className="go">Meet the team &rarr;</span>
            </Link>
            <Link href="/what-we-do" className="explore-card">
              <span className="step">02 &middot; What We Do</span>
              <h4>Our Strategy</h4>
              <p>The three pillars behind every programme we run.</p>
              <span className="go">See the strategy &rarr;</span>
            </Link>
            <Link href="/projects" className="explore-card">
              <span className="step">03 &middot; Projects</span>
              <h4>Flagship Programmes</h4>
              <p>Carbon, livelihoods, restoration, and innovation in the field.</p>
              <span className="go">View projects &rarr;</span>
            </Link>
            <Link href="/partners" className="explore-card">
              <span className="step">04 &middot; Partners</span>
              <h4>Who Works With Us</h4>
              <p>Government, private sector, development, and academic partners.</p>
              <span className="go">See our partners &rarr;</span>
            </Link>
            <Link href="/contact" className="explore-card">
              <span className="step">05 &middot; Contact</span>
              <h4>Get In Touch</h4>
              <p>Reach the team directly about restoration or partnership.</p>
              <span className="go">Contact us &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="eyebrow eyebrow-strong">Our Impact Aspiration By 2030</div>
        <h2>One of Africa&apos;s leading community-centred climate organizations.</h2>
        <p>
          Restoring ecosystems, developing high-integrity carbon projects,
          creating sustainable livelihoods, mobilizing climate finance, and
          empowering communities to lead the transition to a resilient,
          low-carbon future.
        </p>
        <div className="hero-actions">
          <Link href="/donate" className="btn btn-primary">Donate Now</Link>
          <Link href="/partners" className="btn btn-outline">Partner With Us</Link>
        </div>
      </section>

    </main>
  );
}
