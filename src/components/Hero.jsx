export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Turn Your Influence Into Automated Revenue
        </h1>

        <p className="hero-subtitle">
          We build and manage digital products for creators. You stay visible,
          we stay silent.
        </p>

        <a
          href="#apply"
          className="btn hero-cta"
          onClick={(e) => handleScroll(e, "#apply")}
        >
          Book Free Audit
        </a>

        <p className="hero-tagline">
          Where Audiences Become Scalable Businesses
        </p>
      </div>
    </section>
  );
}
