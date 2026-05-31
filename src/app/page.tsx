import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PatientAccessCards from "@/components/home/PatientAccessCards";
import BenefitsSection from "@/components/home/BenefitsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <PatientAccessCards />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
