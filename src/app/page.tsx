import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import HowItWorks from "@/components/HowItWorks";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StarrySky from "@/components/StarrySky";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <StarrySky />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Agents />
        <HowItWorks />
        <Tokenomics />
        <Footer />
      </div>
    </main>
  );
}
