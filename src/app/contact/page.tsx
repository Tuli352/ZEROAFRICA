import Image from "next/image";

export const metadata = {
  title: "Contact | ZeroEco Africa",
  description: "Get in touch with ZeroEco Africa.",
};

export default function Contact() {
  return (
    <main>

      {/* INTRO — hero image removed; page opens straight into copy, matching the rest of the site */}
      <section className="section">
        <div className="section-inner">
          <div className="eyebrow eyebrow-strong">Contact Us</div>
          <h1 className="kicker-title" style={{ maxWidth: '760px' }}>
            Let&apos;s talk about restoration, partnership, or getting involved.
          </h1>
          <p className="lede">
            Whether you&apos;re exploring a partnership, funding a
            programme, or just curious about the work — reach us directly
            or send a message below.
          </p>
        </div>
      </section>

      <section className="section section-mist">
        <div className="section-inner">
          <div className="pillar-feature">
            <div className="pillar-feature-media">
              <Image
                src="/images/community-gathering.jpg"
                alt="A community gathering during a project consultation"
                width={780}
                height={1040}
              />
              <div className="caption">Community consultations shape every project before ground is broken.</div>
            </div>
            <div className="pillar-feature-text">
              <span className="tag">Reach Us Directly</span>
              <h2>We read every message.</h2>
              
              <div style={{ marginBottom: '24px' }}>
                <p><strong>Address:</strong> Lotus Plaza, Westlands, Nairobi, Kenya</p>
                <p><strong>Phone:</strong> +254 720 374 624</p>
                <p><strong>Email:</strong> info@zeroecoafrica.co.ke</p>
              </div>

              <form className="form-grid" style={{ marginTop: '32px' }}>
                <div>
                  <label className="field-label" htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" placeholder="Jane Wanjiru" />
                </div>
                <div>
                  <label className="field-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="field-label" htmlFor="topic">What is this about?</label>
                  <select id="topic" name="topic">
                    <option>General inquiry</option>
                    <option>Partnership</option>
                    <option>Media</option>
                    <option>Donations</option>
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us what's on your mind"></textarea>
                </div>
                <button type="submit" className="btn btn-solid-dark" style={{ width: 'fit-content' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}