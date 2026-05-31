import SectionHeader from "@/components/shared/SectionHeader";
import { Users, Lightbulb, Flag, Smartphone, Megaphone, Heart } from "lucide-react";

const benefits = [
  {
    Icon: Users,
    title: "Reduce Reception Pressure",
    description: "Reduce repeated explanations and routine admin conversations.",
    color: "text-white bg-[#005EB8]",
  },
  {
    Icon: Lightbulb,
    title: "Improve Patient Understanding",
    description: "Help patients navigate healthcare more confidently and independently.",
    color: "text-white bg-[#2EB6CC]",
  },
  {
    Icon: Flag,
    title: "Improve Access",
    description: "Support inclusive communication across diverse multilingual communities.",
    color: "text-white bg-[#0B7A82]",
  },
  {
    Icon: Smartphone,
    title: "Increase NHS App Adoption",
    description: "Help patients access NHS digital services more independently.",
    color: "text-white bg-[#007F3B]",
  },
  {
    Icon: Megaphone,
    title: "Support Health Campaigns",
    description: "Deliver preventative healthcare messaging more effectively in multiple languages.",
    color: "text-white bg-[#F59E0B]",
  },
  {
    Icon: Heart,
    title: "Improve Patient Experience",
    description: "Create a calmer and more inclusive waiting room environment.",
    color: "text-white bg-[#EC4899]",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#005EB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Practice Benefits"
          title="Built For Operational Efficiency"
          subtitle="PracticeLingo reduces pressure on your team while improving outcomes for every patient — regardless of language."
          centered
          light
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ Icon, title, description, color }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
