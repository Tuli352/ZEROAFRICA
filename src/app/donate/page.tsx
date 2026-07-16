import Image from "next/image";

export const metadata = {
  title: "Donate | ZeroEco Africa",
  description: "Support climate action and community empowerment across Africa.",
};

export default function Donate() {
  return (
    <main>

      <section
        className="hero"
        style={{ backgroundImage: "url(/images/donate-hero.jpg)" }}
      >
        <div className="hero-content">
          <div className="eyebrow eyebrow-strong">Support Our Mission</div>
          <h1>Every contribution restores nature and funds a livelihood.</h1>
          <p className="lede">
            Your support helps ZeroEco Africa develop climate solutions,
            restore degraded ecosystems, strengthen community livelihoods,
            and expand climate innovation across Africa.
          </p>
        </div>
      </section>

      <svg className="riverline" viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" />
      </svg>

      <section className="section">
        <div className="section-inner">
          <div className="split">
            <div className="split-text">
              <div className="eyebrow eyebrow-strong">Make A Gift</div>
              <h2>Choose an amount</h2>
              <p>Every tier funds a specific, tangible part of our work.</p>

              <div className="amount-grid">
                <div className="amount-option">$25</div>
                <div className="amount-option selected">$50</div>
                <div className="amount-option">$100</div>
                <div className="amount-option">$250</div>
              </div>

              <form className="form-grid">
                <div>
                  <label className="field-label" htmlFor="donor-name">Full name</label>
                  <input id="donor-name" name="donor-name" type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="field-label" htmlFor="donor-email">Email</label>
                  <input id="donor-email" name="donor-email" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="field-label" htmlFor="frequency">Frequency</label>
                  <select id="frequency" name="frequency">
                    <option>One-time</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{width:'fit-content'}}>Donate Now</button>
              </form>
            </div>

            <div className="split-media">
              <Image
                src="/images/donate-hero.jpg"
                alt="Stacks of currency representing donation funding"
                width={1920}
                height={1440}
                style={{aspectRatio:'4/5', objectFit:'cover'}}
              />
              <div className="caption">Every donation is tracked against a specific programme outcome.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-mist">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Your Donation Supports</div>
          <h2 className="kicker-title">Where the money actually goes.</h2>

          <div className="field-list">
            <div className="field-item">
              <span className="idx">01</span>
              <h4>Restoration</h4>
              <p>Tree planting, forest restoration, and waterway cleanup.</p>
            </div>
            <div className="field-item">
              <span className="idx">02</span>
              <h4>Climate-Smart Agriculture</h4>
              <p>Training and inputs for resilient, low-carbon farming.</p>
            </div>
            <div className="field-item">
              <span className="idx">03</span>
              <h4>Community Carbon Projects</h4>
              <p>Verification, monitoring, and community revenue-sharing systems.</p>
            </div>
            <div className="field-item">
              <span className="idx">04</span>
              <h4>Renewable Energy</h4>
              <p>Off-grid solar piloting through the Climate Innovation Hub.</p>
            </div>
            <div className="field-item">
              <span className="idx">05</span>
              <h4>Women &amp; Youth Empowerment</h4>
              <p>Green livelihood training targeted at the groups hit hardest by climate risk.</p>
            </div>
            <div className="field-item">
              <span className="idx">06</span>
              <h4>Research &amp; Innovation</h4>
              <p>Water, soil, and carbon data that keeps every project accountable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Become a Climate Champion.</h2>
        <p>Together we can restore ecosystems, improve livelihoods, and build a climate-resilient Africa.</p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary">Donate Now</a>
          <a href="/partners" className="btn btn-outline">Explore Corporate Giving</a>
        </div>
      </section>

    </main>
  );
}
