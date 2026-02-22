import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
