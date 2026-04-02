import { useState } from "react";

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2>Privacy Policy</h2>
        <p className="last-updated">Last updated: April 2026</p>

        <div className="privacy-content">
          <h3>Information We Collect</h3>
          <p>When you submit our contact form, we collect:</p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Information you provide in your application</li>
          </ul>

          <h3>Analytics</h3>
          <p>
            We use Simple Analytics to understand how visitors use our website.
            Simple Analytics is privacy-friendly and does not use cookies or
            collect personal data. No personal information is tracked or stored.
          </p>
          <p>
            Learn more:{" "}
            <a
              href="https://simpleanalytics.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              simpleanalytics.com
            </a>
          </p>

          <h3>Google Fonts</h3>
          <p>
            This website uses Google Fonts to display typography. Google Fonts
            may set cookies to deliver fonts efficiently. No personal data is
            collected through Google Fonts.
          </p>
          <p>
            Learn more:{" "}
            <a
              href="https://developers.google.com/fonts/faq/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Fonts Privacy
            </a>
          </p>

          <h3>How We Use Your Information</h3>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiry</li>
            <li>Evaluate partnership opportunities</li>
            <li>Provide information about our services</li>
          </ul>

          <h3>Data Storage</h3>
          <p>
            Your form submissions are stored securely via Netlify Forms and sent
            to our business email. We do not sell or share your personal
            information with third parties.
          </p>

          <h3>Your Rights</h3>
          <p>
            You can request deletion of your data at any time by contacting us.
          </p>

          <h3>Contact</h3>
          <p>
            For privacy questions, contact:{" "}
            <a href="mailto:feven@thesilentscale.com">
              feven@thesilentscale.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
