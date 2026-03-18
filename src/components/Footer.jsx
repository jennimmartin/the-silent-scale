import { useState } from "react";
import PrivacyModal from "./PrivacyModal";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <img
            src="/logo.png"
            alt="The Silent Scale"
            className="footer-logo-img"
          />

          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#case-study">Case Study</a>
            <a href="#apply">Apply</a>
            <button
              onClick={() => setShowPrivacy(true)}
              className="footer-nav-link"
            >
              Privacy
            </button>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} The Silent Scale. All rights
            reserved.
          </p>

          <p className="footer-credit">
            Design & Development by{" "}
            <a
              href="https://jennimmartin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jenni M Martin
            </a>
          </p>
        </div>
      </footer>

      <PrivacyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
    </>
  );
}
