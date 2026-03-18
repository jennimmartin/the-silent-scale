import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProofSection from "./components/ProofSection";
import ServicesSection from "./components/ServicesSection";
import CaseStudy from "./components/CaseStudy";
import ApplyForm from "./components/ApplyForm";
import ShimmerLine from "./components/ShimmerLine";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Nav />

      <Hero />

      <ShimmerLine />

      <ProofSection />

      <ShimmerLine />

      <ServicesSection />

      <ShimmerLine />

      <CaseStudy />

      <ShimmerLine />

      <ApplyForm />

      <Footer />
    </>
  );
}

export default App;
