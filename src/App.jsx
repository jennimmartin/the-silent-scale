import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProofSection from "./components/ProofSection";
import WhoThisIsFor from "./components/WhoThisIsFor";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
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

      <ProcessSection />

      <ShimmerLine />

      <WhoThisIsFor />

      <ShimmerLine />

      <ServicesSection />

      <ShimmerLine />

      <ApplyForm />

      <ProofSection />

      <Footer />
    </>
  );
}

export default App;
