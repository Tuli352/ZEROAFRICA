import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects | ZeroEco Africa",
  description: "Our flagship programmes across Africa.",
};

export default function Projects() {
  return (
    <main>

      {/* INTRO — hero image removed; page opens straight into copy, matching About & What We Do */}
     <section className="section">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Projects</div>
          <h1 className="kicker-title" style={{ maxWidth: '760px' }}>
            Four flagship programmes, built to reinforce each other.
          </h1>
          <p className="lede">
            Each programme below carries one of our three strategic pillars
            into the field — carbon finance, livelihoods, or applied
            innovation.
          </p>
        </div>
      </section>

      {/* PROJECT 01 */}
      <section className="section">
        <div className="section-inner">
          <div className="pillar-feature p-climate">
            <div className="pillar-feature-media">
              <Image
                src="/images/polluted-stream.jpg"
                alt="A waterway targeted for restoration under the Community Carbon Initiative"
                width={780}
                height={1040}
              />
              <div className="caption">Baseline site: an urban waterway prior to restoration.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="tag">Programme 01</span>
              <h2>Community Carbon Initiative</h2>
              <p>
                High-integrity, community co-designed carbon projects that
                turn ecosystem restoration into a verified, financeable
                asset. Revenue flows back into the communities hosting each
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 02 */}
      <section className="section section-mist">
        <div className="section-inner">
          <div className="pillar-feature reverse p-livelihoods">
            <div className="pillar-feature-media">
              <Image
                src="/images/urban-street.jpg"
                alt="A busy urban street where informal livelihoods operate"
                width={780}
                height={1040}
              />
              <div className="caption">The informal economy is where many Green Livelihoods participants already work.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="tag">Programme 02</span>
              <h2>Green Livelihoods Programme</h2>
              <p>
                Training and micro-enterprise support for green jobs — from
                waste-to-value recycling to agroforestry — built around
                livelihoods communities are already pursuing informally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 03 */}
      <section className="section">
        <div className="section-inner">
          <div className="pillar-feature p-climate">
            <div className="pillar-feature-media">
              <Image
                src="/images/field-visit.jpg"
                alt="A field team member assessing a degraded site for restoration"
                width={780}
                height={1040}
              />
              <div className="caption">Site scoping ahead of a restoration project launch.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="tag">Programme 03</span>
              <h2>Africa Restoration Initiative</h2>
              <p>
                Ecosystem restoration across degraded waterways, forests, and
                urban green space, starting with the sites our field teams
                assess as highest-need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 04 */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="pillar-feature reverse dark">
            <div className="pillar-feature-media">
              <Image
                src="/images/solar-water-pump.jpg"
                alt="A solar-powered water pump prototype"
                width={780}
                height={1040}
              />
              <div className="caption">A solar water pump piloted through the Climate Innovation Hub.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="tag">Programme 04</span>
              <h2>Climate Innovation Hub</h2>
              <p>
                Applied research, GIS mapping, and renewable-energy piloting —
                including off-grid solar water systems — tested under real
                field conditions before wider deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Every programme reinforces the other three.</h2>
        <p>Explore the strategy behind these projects, or get in touch to partner with us.</p>
        <div className="hero-actions">
          <Link href="/what-we-do" className="btn btn-primary">See Our Strategy</Link>
          <Link href="/contact" className="btn btn-outline">Start a Conversation</Link>
        </div>
      </section>

    </main>
  );
}
