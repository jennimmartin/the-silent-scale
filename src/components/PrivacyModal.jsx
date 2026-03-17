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
        <p className="last-updated">Last updated: March 2026</p>

        <div className="privacy-content">
          <h3>Information We Collect</h3>
          <p>When you submit our contact form, we collect:</p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Information you provide in your message</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your inquiry</li>
            <li>Provide information about our services</li>
          </ul>

          <h3>Data Storage</h3>
          <p>
            Your information is sent via email and stored securely. We do not
            sell or share your personal information with third parties.
          </p>

          <h3>Contact</h3>
          <p>For privacy questions, contact: haddisfeven@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
