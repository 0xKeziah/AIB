import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import HowItWorks from "@/components/HowItWorks";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative scanline-overlay overflow-hidden">
      <Navbar />
      <Hero />
      <Agents />
      <HowItWorks />
      <Tokenomics />
      <Footer />
    </main>
  );
}
