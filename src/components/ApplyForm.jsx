import { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    audienceSize: "",
    currentRevenue: "",
    buildGoal: "",
    biggestChallenge: "",
    platforms: "",
    email: "",
    name: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual form service (Formspree, Netlify Forms, etc.)
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      console.log("Form submitted:", formData);

      // Reset form
      setFormData({
        audienceSize: "",
        currentRevenue: "",
        buildGoal: "",
        biggestChallenge: "",
        platforms: "",
        email: "",
        name: "",
      });
    }, 1000);
  };

  return (
    <section id="apply" className="apply-section">
      <div className="section-content">
        <h2 className="section-title">Apply to Work Together</h2>
        <p className="section-intro">
          Tell us about your audience and goals. We'll get back to you within 48
          hours.
        </p>

        <form className="form apply-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label" htmlFor="name">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.audienceSize}
              onChange={handleChange}
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
              value={formData.currentRevenue}
              onChange={handleChange}
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
              value={formData.buildGoal}
              onChange={handleChange}
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
              value={formData.biggestChallenge}
              onChange={handleChange}
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
              value={formData.platforms}
              onChange={handleChange}
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

          {submitStatus === "success" && (
            <p className="form-success">
              Thanks for applying! We'll review your information and get back to
              you within 48 hours.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
