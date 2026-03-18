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
        <h1 className="hero-title">Shadow Operator for Digital Creators</h1>

        <p className="hero-subtitle">
          We build and automate your digital products on Whop. You stay visible,
          we stay silent.
        </p>

        <a
          href="#apply"
          className="btn hero-cta"
          onClick={(e) => handleScroll(e, "#apply")}
        >
          Apply to Work Together
        </a>

        <p className="hero-tagline">
          Where Audiences Become Scalable Businesses
        </p>
      </div>
    </section>
  );
}
