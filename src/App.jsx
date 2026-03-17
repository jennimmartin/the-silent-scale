import Nav from "./components/Nav";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import ShimmerLine from "./components/ShimmerLine";

import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      {/* Test Section 1 */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--white)",
          fontSize: "3rem",
          color: "var(--primary-600)",
        }}
      >
        <div>
          <h1>Section 1</h1>
          <p style={{ fontSize: "1rem", color: "var(--grey-600)" }}>
            Scroll down to see shimmer line trigger
          </p>
        </div>
      </section>

      {/* SHIMMER LINE 1 */}
      <ShimmerLine />

      {/* Test Section 2 */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--grey-100)",
          fontSize: "3rem",
          color: "var(--primary-600)",
        }}
      >
        <h2>Section 2</h2>
      </section>

      {/* SHIMMER LINE 2 */}
      <ShimmerLine />

      {/* Test Section 3 */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--white)",
          fontSize: "3rem",
          color: "var(--primary-600)",
        }}
      >
        <h2>Section 3</h2>
      </section>

      {/* SHIMMER LINE 3 */}
      <ShimmerLine />

      {/* Test Section 4 */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--grey-100)",
          fontSize: "3rem",
          color: "var(--primary-600)",
        }}
      >
        <h2>Section 4</h2>
      </section>

      <Footer />
    </>
  );
}

export default App;
