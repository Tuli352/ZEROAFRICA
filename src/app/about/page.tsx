import Image from "next/image";

export const metadata = {
  title: "About Us | ZeroEco Africa",
  description: "Learn about ZeroEco Africa, our mission, vision, and values.",
};

export default function About() {
  return (
    <main>

      {/* WHO WE ARE — now doubles as the page opener since the hero is gone */}
      <section className="section section-opener">
        <div className="section-inner">
          <div className="split">
            <div className="split-text">
              <div className="eyebrow eyebrow-strong">About ZeroEco Africa</div>
              <h2>Founded in the field, not in a boardroom.</h2>
              <p>
                ZeroEco Africa is a climate solutions organization dedicated
                to restoring nature, advancing carbon markets, and empowering
                communities through sustainable livelihoods. We work with
                communities, governments, development partners, and the
                private sector to build a resilient, low-carbon future.
              </p>
              <p>
                Our team spends as much time standing in drainage channels
                and dump sites as we do in stakeholder meetings — because
                the design of any real solution starts with seeing the
                problem firsthand.
              </p>
            </div>

            <div className="split-media">
              <Image
                src="/images/about-hero.png"
                alt="ZeroEco Africa brand identity and slogan 'Resilient communities for a sustainable Africa', alongside a collage of our fieldwork: partner meetings, agricultural land, solar installations, community engagement, and waste sites"
                width={854}
                height={607}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="section section-mist">
        <div className="section-inner">
          <div className="grid-3">
            <div className="pillar-card" style={{ borderTopColor: 'var(--canopy)' }}>
              <span className="tag" style={{ color: 'var(--canopy)' }}>Vision</span>
              <h3>A climate-resilient Africa</h3>
              <p>
                Where empowered communities lead environmental stewardship,
                sustainable livelihoods, and the transition to a low-carbon
                future.
              </p>
            </div>
            <div className="pillar-card" style={{ borderTopColor: 'var(--ochre)' }}>
              <span className="tag" style={{ color: 'var(--ochre)' }}>Mission</span>
              <h3>Community-led climate action</h3>
              <p>
                To empower communities to lead climate action by advancing
                carbon solutions, restoring ecosystems, promoting sustainable
                livelihoods, and fostering innovation and partnerships.
              </p>
            </div>
            <div className="pillar-card" style={{ borderTopColor: 'var(--lab)' }}>
              <span className="tag" style={{ color: 'var(--lab)' }}>Purpose</span>
              <h3>Lasting, shared impact</h3>
              <p>
                To create lasting environmental and socio-economic impact by
                enabling communities, governments, and businesses to work
                together on climate change and livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CONTEXT — poverty image, handled with care */}
      <section className="section">
        <div className="section-inner">
          <div className="split reverse">
            <div className="split-media">
              <Image
                src="/images/urban-poverty-bw.jpg"
                alt="A man resting on a city pavement, part of the urban informal economy"
                width={780}
                height={1040}
              />
              <div className="caption">Urban poverty and informal livelihoods shape the neighborhoods where we work.</div>
            </div>

            <div className="split-text">
              <div className="eyebrow eyebrow-strong">Why This Work Matters</div>
              <h2>Climate risk and poverty are not separate problems.</h2>
              <p>
                In the neighborhoods where ZeroEco Africa works, families
                already carry the weight of insecure housing, informal
                income, and limited public services. A blocked drain or a
                failed rainy season does not stay an environmental
                problem — it becomes a household crisis.
              </p>
              <p>
                That&apos;s why our restoration projects are designed
                alongside livelihood programmes, not after them. Ecosystem
                repair has to pay a community back for its participation, or
                it doesn&apos;t last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE — compact statement version */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="toc-simple">
            <div className="eyebrow eyebrow-strong">Our Theory Of Change</div>
            <p className="toc-statement">
              When communities are empowered with knowledge, sustainable
              livelihood opportunities, climate finance, innovative
              technologies and strong partnerships, they become leaders in
              environmental conservation and climate action — resulting in
              healthier ecosystems, resilient livelihoods and sustainable
              economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Our Core Values</div>
          <h2 className="kicker-title">What guides every decision we make.</h2>
          <div className="chip-row">
            <span className="chip">Integrity</span>
            <span className="chip">Innovation</span>
            <span className="chip">Community Empowerment</span>
            <span className="chip">Environmental Stewardship</span>
            <span className="chip">Inclusion &amp; Equity</span>
            <span className="chip">Accountability</span>
            <span className="chip">Collaboration</span>
            <span className="chip">Excellence</span>
            <span className="chip">Sustainability</span>
          </div>
        </div>
      </section>

      {/* OUR TEAM — cards now animate in on load and respond on hover */}
      <section className="section section-mist">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Our Team</div>
          <h2 className="kicker-title">A mix of young professionals and years of experience.</h2>
          <p className="lede">
            Our team boasts a mix of young professionals from different
            backgrounds, working alongside board members and advisors with
            years of experience in climate, finance, and community
            development.
          </p>

          <div className="team-grid">

            <div className="team-card">
              <div className="team-photo">
                <Image src="/images/team-cyrus.jpg" alt="Dr. Cyrus Babu Ongondo" fill sizes="360px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-body">
                <h4>Dr. Cyrus Babu Ongondo</h4>
                <span className="role">Chief Executive Officer</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <Image src="/images/team-delfine.jpg" alt="Delfine Nyabate Agwata" fill sizes="360px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-body">
                <h4>Delfine Nyabate Agwata</h4>
                <span className="role">Board Member</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <Image src="/images/team-elkana.jpg" alt="Elkana Buge Isaboke" fill sizes="360px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-body">
                <h4>Elkana Buge Isaboke</h4>
                <span className="role">Board Member</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <Image src="/images/team-sylvia.jpg" alt="Sylvia Chepkoech Rotich" fill sizes="360px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-body">
                <h4>Sylvia Chepkoech Rotich</h4>
                <span className="role">Hon. Secretary</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <Image src="/images/team-japheth.jpg" alt="Japheth Onsege Ongondo" fill sizes="360px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-body">
                <h4>Japheth Onsege Ongondo</h4>
                <span className="role">Hon. Treasurer</span>
              </div>
            </div>

            <div className="team-card">
              <div className="team-photo">
                <Image src="/images/team-tony.jpg" alt="Tony Juma Ouko" fill sizes="360px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="team-body">
                <h4>Tony Juma Ouko</h4>
                <span className="role">Operations Manager</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2030 ASPIRATION */}
      <section className="cta-band">
        <div className="eyebrow">2030 Impact Aspiration</div>
        <h2>One of Africa&apos;s leading community-centred climate organizations.</h2>
        <p>
          By 2030, ZeroEco Africa aims to restore degraded ecosystems,
          develop high-integrity carbon projects, mobilize climate finance,
          and empower communities at scale.
        </p>
      </section>

    </main>
  );
}
