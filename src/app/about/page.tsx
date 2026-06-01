import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import { Globe, Settings, Building2, Accessibility } from "lucide-react";

const values = [
  {
    Icon: Globe,
    bg: "bg-[#005EB8]",
    title: "Inclusion First",
    description: "Every patient deserves to understand their care, regardless of their first language.",
  },
  {
    Icon: Settings,
    bg: "bg-[#2EB6CC]",
    title: "Operationally Practical",
    description: "Designed around real GP surgery workflows — simple to deploy, simple to use.",
  },
  {
    Icon: Building2,
    bg: "bg-[#007F3B]",
    title: "NHS Compatible",
    description: "Built to complement NHS digital services and support health equity goals.",
  },
  {
    Icon: Accessibility,
    bg: "bg-[#0B7A82]",
    title: "Accessible By Design",
    description: "Large text, audio guidance, and touch-friendly interfaces for all patients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          eyebrow="About PracticeLingo"
          title="Built To Make Healthcare Easier To Understand"
          subtitle="PracticeLingo exists to help every patient access healthcare confidently, regardless of language barriers."
          imageUrl="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=80"
          imageAlt="NHS GP surgery waiting area"
          overlayColor="#005EB8"
        />

        {/* Why we exist */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <SectionHeader
                  eyebrow="Why We Exist"
                  title="Bridging the Language Gap in Healthcare"
                />
                <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Modern healthcare systems depend heavily on communication. Yet millions of patients across the UK still struggle to understand healthcare information, navigate healthcare services, and engage with digital healthcare tools.
                  </p>
                  <p>
                    Many GP practices face increasing pressure supporting multilingual communities while managing heavy operational workloads.
                  </p>
                  <p>
                    PracticeLingo was created to bridge this gap — using multilingual communication technology designed specifically for healthcare environments.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/how-it-works">See How It Works</Button>
                </div>
              </div>

              {/* Image + Stats */}
              <div className="flex-1">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                    alt="Diverse patients receiving healthcare support"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005EB8]/20 to-transparent" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { stat: "10+", label: "Languages supported", bg: "bg-[#005EB8]", light: true },
                    { stat: "QR", label: "No app download needed", bg: "bg-[#E6F1FB]", light: false },
                    { stat: "NHS", label: "Compatible workflows", bg: "bg-[#E6F1FB]", light: false },
                    { stat: "0", label: "Reception dependency", bg: "bg-[#007F3B]", light: true },
                  ].map((item) => (
                    <div key={item.label} className={`${item.bg} rounded-2xl p-5`}>
                      <p className={`text-3xl font-bold mb-1 ${item.light ? "text-white" : "text-[#005EB8]"}`}>{item.stat}</p>
                      <p className={`text-xs ${item.light ? "text-white/70" : "text-text-secondary"}`}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Vision"
              title="Clearer Communication. Better Access. Better Outcomes."
              subtitle="We believe every patient should understand their care, access services independently, and feel confident navigating healthcare systems."
              centered
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(({ Icon, bg, title, description }) => (
                <div key={title} className="bg-white rounded-3xl p-6 border border-border shadow-sm text-center">
                  <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-dark mb-2">{title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
