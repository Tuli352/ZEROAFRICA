import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Partners | ZeroEco Africa",
  description: "Governments, private sector, development partners, and academic institutions working with ZeroEco Africa.",
};

export default function Partners() {
  return (
    <main>

      {/* INTRO — hero image removed; page opens straight into copy, matching the rest of the site */}
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Partners</div>
          <h1 className="kicker-title" style={{ maxWidth: '760px' }}>
            Restoration at scale takes more than one organization.
          </h1>
          <p className="lede">
            Government, private sector, development, and academic
            partners each bring something we can&apos;t build alone —
            here&apos;s how we work with each.
          </p>
        </div>
      </section>

      {/* PRIVATE SECTOR FEATURE */}
      <section className="section">
        <div className="section-inner">
          <div className="pillar-feature">
            <div className="pillar-feature-media">
              <Image
                src="/images/partner-booth.jpg"
                alt="A solar technology company's exhibition booth at a climate and energy expo"
                width={1600}
                height={1200}
              />
              <div className="caption">A clean-energy technology partner exhibiting at a regional solar and energy expo.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="tag">Private Sector</span>
              <h2>Working alongside African clean-tech companies.</h2>
              <p>
                We collaborate with renewable-energy and clean-tech firms
                across the region — sharing field sites, co-piloting
                hardware, and connecting their technology to communities
                that need it most.
              </p>
              <p>
                Partners like solar and clean-energy technology providers
                showcase field-ready solutions at regional climate and
                energy exhibitions, where we scout and test new approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR CATEGORIES — single clean grid instead of an uneven 3+1 split */}
      <section className="section section-mist">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Who We Work With</div>
          <h2 className="kicker-title">Four categories of partnership, one shared goal.</h2>

          <div className="grid-4">
            <div className="pillar-card">
              <span className="tag">Government</span>
              <h3>Public sector</h3>
              <p>County and national government partners align policy with community-led restoration.</p>
            </div>
            <div className="pillar-card">
              <span className="tag">Private Sector</span>
              <h3>Clean-tech &amp; industry</h3>
              <p>Renewable energy and technology firms co-develop field-tested solutions.</p>
            </div>
            <div className="pillar-card">
              <span className="tag">Development</span>
              <h3>Development partners</h3>
              <p>Multilateral and bilateral partners fund and scale proven programmes.</p>
            </div>
            <div className="pillar-card">
              <span className="tag">Academia</span>
              <h3>Academic institutions</h3>
              <p>Research collaborations that keep our carbon and restoration methodologies rigorous.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Become a partner in restoration.</h2>
        <p>Whether you bring technology, funding, policy, or research — there is a role for your organization.</p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
        </div>
      </section>

    </main>
  );
}
