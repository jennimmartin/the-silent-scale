export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-content">
        <h2 className="section-title">Partnership Models</h2>
        <p className="section-intro">We usually offer 3 partnership models</p>

        <div className="services-grid">
          {/* Starter */}
          <div className="service-card">
            <div className="service-number">01</div>
            <h3 className="service-title">Starter</h3>
            <p className="service-description">
              Build your first product (3k–10k followers)
            </p>
            <ul className="service-features">
              <li>1 digital product (AI-assisted)</li>
              <li>Whop setup</li>
              <li>Sales page</li>
              <li>Basic automations</li>
              <li>1 launch plan</li>
            </ul>
            <p className="service-price">Starting at $5K</p>
          </div>

          {/* Pro */}
          <div className="service-card">
            <div className="service-number">02</div>
            <h3 className="service-title">Pro</h3>
            <p className="service-description">
              Full digital product system (10k–60k followers)
            </p>
            <ul className="service-features">
              <li>2–3 digital products</li>
              <li>Full Whop storefront</li>
              <li>Automations for onboarding + upsells</li>
              <li>AI-generated marketing materials</li>
              <li>30-day launch content plan</li>
            </ul>
            <p className="service-price">$8K–$12K or revenue share</p>
          </div>

          {/* Elite */}
          <div className="service-card">
            <div className="service-number">03</div>
            <h3 className="service-title">Elite</h3>
            <p className="service-description">
              Full Shadow Operator experience (60k–100k followers)
            </p>
            <ul className="service-features">
              <li>Unlimited digital products</li>
              <li>Monthly product creation</li>
              <li>Whop community + subscription setup</li>
              <li>Full automation stack</li>
              <li>Scaling roadmap</li>
            </ul>
            <p className="service-price">$15K+ or revenue share</p>
          </div>
        </div>
      </div>
    </section>
  );
}
