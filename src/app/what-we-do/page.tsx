import Image from "next/image";
import Link from "next/link";
import AutoNavigateOnScrollEnd from "../AutoNavigateOnScrollEnd";

export const metadata = {
  title: "What We Do | ZeroEco Africa",
  description: "Climate action, sustainable livelihoods, and knowledge & innovation.",
};

export default function WhatWeDo() {
  return (
    <main>
      <AutoNavigateOnScrollEnd to="/contact" />

      {/* INTRO — hero image removed; page opens straight into copy, like the About page */}
     <section className="section">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">What We Do</div>
          <h1 className="kicker-title" style={{ maxWidth: '760px' }}>
            Three pillars. One field-tested strategy.
          </h1>
          <p className="lede">
            Three pillars, each with its own strategic objective, programme
            areas, and measurable outcomes — built so investors and partners
            can quickly find where their mandate fits.
          </p>

          <div className="pillar-strip plain" aria-label="Our three strategic pillars">
            <a href="#climate-action" className="pillar-chip light p-climate">
              <span className="dot">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7 2 3 6 3 11c0 5 4 9 9 11 5-2 9-6 9-11 0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              Pillar 01 · Climate Action
            </a>
            <a href="#sustainable-livelihoods" className="pillar-chip light p-livelihoods">
              <span className="dot">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5M10 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              Pillar 02 · Sustainable Livelihoods
            </a>
            <a href="#knowledge-innovation" className="pillar-chip light p-knowledge">
              <span className="dot">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-11V2M9 2h6" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              Pillar 03 · Knowledge &amp; Innovation
            </a>
          </div>

          <div className="audience-strip" aria-label="Which pillar fits your organization">
            <a href="#climate-action" className="audience-card p-climate">
              <span className="label">If you are a</span>
              <h5>Carbon Investor or Climate Finance Institution</h5>
              <p>Start with Pillar One — carbon project development, MRV, and climate finance.</p>
              <span className="go">See Climate Action &rarr;</span>
            </a>
            <a href="#sustainable-livelihoods" className="audience-card p-livelihoods">
              <span className="label">If you are a</span>
              <h5>Development Partner, Foundation or CSR Programme</h5>
              <p>Start with Pillar Two — livelihoods, food security, and community resilience.</p>
              <span className="go">See Sustainable Livelihoods &rarr;</span>
            </a>
            <a href="#knowledge-innovation" className="audience-card p-knowledge">
              <span className="label">If you are an</span>
              <h5>Academic, Research or Technology Partner</h5>
              <p>Start with Pillar Three — research, GIS, and applied innovation.</p>
              <span className="go">See Knowledge &amp; Innovation &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* PILLAR ONE */}
      <section className="section" id="climate-action">
        <div className="section-inner">
          <div className="pillar-feature p-climate">
            <div className="pillar-feature-media">
              <Image
                src="/images/polluted-stream.jpg"
                alt="A degraded waterway targeted for restoration under a carbon project"
                width={780}
                height={1040}
              />
              <div className="caption">Baseline site conditions inform every carbon methodology we apply.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7 2 3 6 3 11c0 5 4 9 9 11 5-2 9-6 9-11 0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              <span className="tag">Pillar One</span>
              <h2>Climate Action, Carbon Markets &amp; Environmental Stewardship</h2>

              <div className="pillar-objective">
                Reduce greenhouse gas emissions while restoring ecosystems
                through innovative climate solutions and carbon finance.
              </div>

              <p>
                We design and develop high-integrity carbon projects —
                backed by rigorous carbon accounting, MRV, and net-zero
                strategies — that generate verifiable emissions reductions
                and channel that revenue directly into the communities that
                host them.
              </p>

              <div className="programme-tags">
                <span className="programme-tag">Carbon Project Development</span>
                <span className="programme-tag">Climate Finance</span>
                <span className="programme-tag">MRV &amp; Carbon Accounting</span>
                <span className="programme-tag">Nature-based Solutions</span>
                <span className="programme-tag">Renewable Energy</span>
                <span className="programme-tag">Environmental Governance</span>
              </div>

              <ul className="outcome-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Increased carbon sequestration and reduced emissions
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  More communities benefiting from carbon finance
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Improved ecosystem health and renewable energy adoption
                </li>
              </ul>

              <div className="pillar-audience">
                <span className="label">Ideal partners</span>
                <span className="who">Carbon investors, climate finance institutions &amp; environmental governance bodies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR TWO */}
      <section className="section section-mist" id="sustainable-livelihoods">
        <div className="section-inner">
          <div className="pillar-feature reverse p-livelihoods">
            <div className="pillar-feature-media">
              <Image
                src="/images/wellbeing-run.jpg"
                alt="Community members exercising together at dawn"
                width={780}
                height={1040}
              />
              <div className="caption">Community wellbeing and green livelihoods go hand in hand.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5M10 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              <span className="tag">Pillar Two</span>
              <h2>Sustainable Livelihoods &amp; Community Resilience</h2>

              <div className="pillar-objective">
                Empower communities to become active leaders in climate
                action through sustainable alternative livelihoods.
              </div>

              <p>
                Giving communities a voice in the fight against climate
                change — through livelihoods that make conservation the
                rational choice for a household, not a sacrifice.
              </p>

              <div className="programme-tags">
                <span className="programme-tag">Climate-Smart Agriculture</span>
                <span className="programme-tag">Agroforestry</span>
                <span className="programme-tag">Green Entrepreneurship</span>
                <span className="programme-tag">Circular Economy</span>
                <span className="programme-tag">Women &amp; Youth Empowerment</span>
                <span className="programme-tag">Ecotourism</span>
              </div>

              <ul className="outcome-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Improved household incomes and increased green jobs
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Enhanced food security and reduced resource strain
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Greater community participation in conservation
                </li>
              </ul>

              <div className="pillar-audience">
                <span className="label">Ideal partners</span>
                <span className="who">Development partners, foundations, CSR programmes &amp; community organizations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR THREE */}
      <section className="section" id="knowledge-innovation">
        <div className="section-inner">
          <div className="pillar-feature p-knowledge">
            <div className="pillar-feature-media">
              <Image
                src="/images/lab-research.jpg"
                alt="A researcher testing a water sample in a laboratory"
                width={780}
                height={1040}
              />
              <div className="caption">Water and soil testing behind every restoration methodology.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-11V2M9 2h6" stroke="currentColor" strokeWidth="1.6"/></svg>
              </span>
              <span className="tag">Pillar Three</span>
              <h2>Knowledge, Innovation &amp; Strategic Partnerships</h2>

              <div className="pillar-objective">
                Accelerate climate action through research, innovation,
                partnerships, and institutional excellence.
              </div>

              <p>
                Research, GIS and remote sensing, and climate education keep
                our interventions evidence-based, while policy advocacy and
                partnership development extend our reach well beyond any
                single project.
              </p>

              <div className="programme-tags">
                <span className="programme-tag">Research &amp; GIS</span>
                <span className="programme-tag">Climate Education</span>
                <span className="programme-tag">ESG Advisory</span>
                <span className="programme-tag">Policy Advocacy</span>
                <span className="programme-tag">Digital Climate Solutions</span>
                <span className="programme-tag">Partnership Development</span>
              </div>

              <ul className="outcome-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Strong evidence-based programming
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Increased strategic partnerships and policy influence
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Improved institutional sustainability and technical capacity
                </li>
              </ul>

              <div className="pillar-audience">
                <span className="label">Ideal partners</span>
                <span className="who">Academic institutions, technology partners &amp; policy advisory bodies</span>
              </div>

              <Link href="/projects" className="btn btn-solid-dark" style={{ marginTop: '12px' }}>
                See the Innovation Hub in action
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Every pillar reinforces the other two.</h2>
        <p>Explore the flagship programmes that put this strategy into practice.</p>
        <div className="hero-actions">
          <Link href="/projects" className="btn btn-primary">View Projects</Link>
        </div>
      </section>

    </main>
  );
}