import { useEffect } from "react";

export default function ShimmerLine() {
  useEffect(() => {
    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible - trigger shimmer
            entry.target.classList.add("active");

            // Remove active class after animation completes
            setTimeout(() => {
              entry.target.classList.remove("active");
            }, 1200); // Match CSS animation duration
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    // Find all shimmer lines and observe them
    const lines = document.querySelectorAll("[data-shimmer]");
    lines.forEach((line) => observer.observe(line));

    // Cleanup when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="divider-container">
      <div className="shimmer-line" data-shimmer></div>
    </div>
  );
}
