export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-content">
        <h2 className="section-title">Partnership Models</h2>
        <p className="section-intro">We usually offer 3 partnership models</p>

        <div className="services-grid">
          {/* Growth Operator */}
          <div className="service-card">
            <div className="service-number">01</div>
            <h3 className="service-title">Growth Operator</h3>
            <p className="service-description">
              We manage monetization systems
            </p>
            <ul className="service-features">
              <li>Revenue strategy</li>
              <li>Product design</li>
              <li>Funnel setup</li>
              <li>Growth systems</li>
            </ul>
            <p className="service-price">$5K–$15K/month</p>
          </div>

          {/* Launch Partner */}
          <div className="service-card">
            <div className="service-number">02</div>
            <h3 className="service-title">Launch Partner</h3>
            <p className="service-description">
              For creators launching products
            </p>
            <ul className="service-features">
              <li>Offer design</li>
              <li>Pricing strategy</li>
              <li>Launch strategy</li>
              <li>Sales systems</li>
            </ul>
            <p className="service-price">Revenue share</p>
          </div>

          {/* Advisory */}
          <div className="service-card">
            <div className="service-number">03</div>
            <h3 className="service-title">Advisory</h3>
            <p className="service-description">Periodic strategy calls</p>
            <ul className="service-features">
              <li>Monetization strategy</li>
              <li>Product roadmap</li>
              <li>Growth planning</li>
              <li>Quarterly reviews</li>
            </ul>
            <p className="service-price">$2K–$5K/month</p>
          </div>
        </div>
      </div>
    </section>
  );
}
