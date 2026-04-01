import { useState } from "react";

export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    // Let Netlify handle the submission
    setIsSubmitting(true);
  };

  return (
    <section id="apply" className="apply-section">
      <div className="section-content">
        <h2 className="section-title">Apply to Work Together</h2>
        <p className="section-intro">
          Tell us about your audience and goals. We'll get back to you within 48
          hours.
        </p>

        <form
          className="form apply-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Hidden field for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot for spam filtering */}
          <p style={{ display: "none" }}>
            <label>
              Don't fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>

          <div className="form-row">
            <label className="form-label" htmlFor="name">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="email">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="audienceSize">
              What is your audience size? *
            </label>
            <input
              type="text"
              id="audienceSize"
              name="audienceSize"
              className="form-input"
              placeholder="e.g., 15K Instagram, 5K email list"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="currentRevenue">
              Current monthly revenue? *
            </label>
            <input
              type="text"
              id="currentRevenue"
              name="currentRevenue"
              className="form-input"
              placeholder="e.g., $2K/month from brand deals"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="buildGoal">
              What are you trying to build? *
            </label>
            <textarea
              id="buildGoal"
              name="buildGoal"
              className="form-textarea"
              rows="4"
              placeholder="Describe your goals..."
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="biggestChallenge">
              What's your biggest growth challenge? *
            </label>
            <textarea
              id="biggestChallenge"
              name="biggestChallenge"
              className="form-textarea"
              rows="4"
              placeholder="What's holding you back from scaling?"
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label" htmlFor="platforms">
              Which platforms are you using? *
            </label>
            <input
              type="text"
              id="platforms"
              name="platforms"
              className="form-input"
              placeholder="e.g., Instagram, YouTube, Newsletter"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}
