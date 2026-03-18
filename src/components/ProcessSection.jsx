import { useEffect, useRef, useState } from "react";

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="process-section" ref={sectionRef}>
      <div className="section-content">
        <h2 className="section-title">How It Works</h2>
        <p className="section-intro">
          From audience to automated revenue in three phases
        </p>

        <div className="process-grid">
          {/* Phase 1 */}
          <div className={`process-step ${isVisible ? "visible" : ""}`}>
            <div className="process-number">01</div>
            <h3 className="process-title">Audit</h3>
            <p className="process-description">
              We analyze your audience, content, and monetization potential.
              Identify what digital products your followers will actually buy.
            </p>
            <div className="process-outcome">
              <span className="outcome-label">Outcome:</span>
              <span className="outcome-text">Clear product roadmap</span>
            </div>
          </div>

          {/* Arrow */}
          <div className={`process-arrow ${isVisible ? "visible" : ""}`}>→</div>

          {/* Phase 2 */}
          <div className={`process-step ${isVisible ? "visible" : ""}`}>
            <div className="process-number">02</div>
            <h3 className="process-title">Build</h3>
            <p className="process-description">
              We create your digital products using AI, set up your Whop
              storefront, and build all automation systems. You approve, we
              execute.
            </p>
            <div className="process-outcome">
              <span className="outcome-label">Outcome:</span>
              <span className="outcome-text">Ready-to-sell products</span>
            </div>
          </div>

          {/* Arrow */}
          <div className={`process-arrow ${isVisible ? "visible" : ""}`}>→</div>

          {/* Phase 3 */}
          <div className={`process-step ${isVisible ? "visible" : ""}`}>
            <div className="process-number">03</div>
            <h3 className="process-title">Scale</h3>
            <p className="process-description">
              Launch your products, automate fulfillment, optimize conversions.
              We monitor, you profit. Everything runs on autopilot.
            </p>
            <div className="process-outcome">
              <span className="outcome-label">Outcome:</span>
              <span className="outcome-text">Automated revenue stream</span>
            </div>
          </div>
        </div>

        <div className="process-timeline">
          <p className="timeline-text">
            <strong>Timeline:</strong> 6 weeks from application to launch
          </p>
        </div>

        <div className="process-cta">
          <a
            href="#apply"
            className="btn"
            onClick={(e) => handleScroll(e, "#apply")}
          >
            Start Your Process
          </a>
        </div>
      </div>
    </section>
  );
}
