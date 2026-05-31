import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { Users, Lightbulb, Flag, Smartphone, Megaphone, Heart } from "lucide-react";

const benefits = [
  { Icon: Users, title: "Reduce Reception Pressure", description: "Fewer repeated explanations and routine admin conversations.", color: "text-white bg-[#005EB8]" },
  { Icon: Lightbulb, title: "Improve Patient Understanding", description: "Help patients navigate healthcare more confidently.", color: "text-white bg-[#2EB6CC]" },
  { Icon: Flag, title: "Improve Access", description: "Support inclusive communication across diverse multilingual communities.", color: "text-white bg-[#0B7A82]" },
  { Icon: Smartphone, title: "Increase NHS App Adoption", description: "Help patients access NHS digital services more independently.", color: "text-white bg-[#007F3B]" },
  { Icon: Megaphone, title: "Support Health Campaigns", description: "Deliver preventative messaging more effectively in multiple languages.", color: "text-white bg-[#F59E0B]" },
  { Icon: Heart, title: "Improve Patient Experience", description: "Create a calmer and more inclusive waiting room environment.", color: "text-white bg-[#EC4899]" },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#005EB8] overflow-hidden relative">
      {/* Subtle image overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1400&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* Left: header + image */}
          <div className="flex-1">
            <SectionHeader
              eyebrow="Practice Benefits"
              title="Built For Operational Efficiency"
              subtitle="PracticeLingo reduces pressure on your team while improving outcomes for every patient — regardless of language."
              light
            />

            {/* Healthcare worker photo */}
            <div className="mt-10 relative rounded-3xl overflow-hidden aspect-[4/3] max-w-sm shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
                alt="GP practice receptionist supporting patients"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005EB8]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-semibold">Empowering every patient</p>
                <p className="text-blue-200 text-xs">regardless of their first language</p>
              </div>
            </div>
          </div>

          {/* Right: benefit cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ Icon, title, description, color }, i) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all duration-200 hover:-translate-y-0.5 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">{title}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
