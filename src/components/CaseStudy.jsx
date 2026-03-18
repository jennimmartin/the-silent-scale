export default function CaseStudy() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="case-study" className="case-study-section">
      <div className="section-content">
        <h2 className="case-study-headline">This Could Be You</h2>

        <div className="case-study-content">
          <div className="case-study-scenario">
            <h3 className="case-study-label">The Challenge</h3>
            <p className="case-study-text">
              Creator with 20K followers but only brand deals. Inconsistent
              income, no control over revenue.
            </p>
          </div>

          <div className="case-study-scenario">
            <h3 className="case-study-label">Our Approach</h3>
            <p className="case-study-text">
              Build paid membership + digital product system. 6 weeks to
              execution.
            </p>
          </div>

          <div className="case-study-scenario">
            <h3 className="case-study-label">The Results</h3>
            <div className="case-study-results">
              <div className="case-study-stat">
                <span className="stat-before">$1K/month</span>
                <span className="stat-arrow">→</span>
                <span className="stat-after">$12K/month</span>
              </div>
              <ul className="case-study-metrics">
                <li>120% revenue growth</li>
                <li>24.5% conversion rate</li>
                <li>$9,750 product launch revenue</li>
                <li>100% audience monetization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="case-study-cta">
          <p className="case-study-question">Ready to scale your influence?</p>
          <a
            href="#apply"
            className="btn"
            onClick={(e) => handleScroll(e, "#apply")}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
