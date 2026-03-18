import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <a
          href="#home"
          className="nav-logo-link"
          onClick={(e) => handleScroll(e, "#home")}
        >
          <img
            src="/logo.png"
            alt="The Silent Scale"
            className="nav-logo-img"
          />
        </a>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? "nav-toggle-icon open" : "nav-toggle-icon"}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={isOpen ? "nav-links open" : "nav-links"}>
          <a href="#process" onClick={(e) => handleScroll(e, "#process")}>
            How It Works
          </a>
          <a href="#services" onClick={(e) => handleScroll(e, "#services")}>
            Services
          </a>
          <a
            href="#apply"
            onClick={(e) => handleScroll(e, "#apply")}
            className="nav-cta"
          >
            Apply
          </a>
        </div>
      </div>
    </nav>
  );
}
