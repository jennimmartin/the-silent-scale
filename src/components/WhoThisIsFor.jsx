import { useEffect, useRef, useState } from "react";

export default function WhoThisIsFor() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="who-this-is-for" className="who-section" ref={sectionRef}>
      <div className="section-content">
        <h2 className="section-title">Do You Qualify</h2>

        <div className="who-grid">
          <div className={`who-column ${isVisible ? "visible" : ""}`}>
            <h3 className="who-heading">You have:</h3>
            <ul className="who-list">
              <li>3k–100k followers</li>
              <li>An audience that asks for help, tools, or advice</li>
              <li>No time to build digital products</li>
              <li>No time to manage launches</li>
              <li>No automation systems set up</li>
            </ul>
          </div>

          <div className={`who-column ${isVisible ? "visible" : ""}`}>
            <h3 className="who-heading">You want:</h3>
            <ul className="who-list">
              <li>A digital product</li>
              <li>A paid membership</li>
              <li>A template pack</li>
              <li>A micro-course</li>
              <li>A monthly subscription</li>
            </ul>
          </div>
        </div>

        <div className={`who-philosophy ${isVisible ? "visible" : ""}`}>
          <p className="philosophy-quote">
            Attention is valuable, but systems turn attention into wealth.
          </p>
        </div>
      </div>
    </section>
  );
}
