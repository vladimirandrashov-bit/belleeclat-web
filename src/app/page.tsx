import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
