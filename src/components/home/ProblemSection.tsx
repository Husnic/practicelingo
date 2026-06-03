import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

const patientProblems = [
  "booking appointments",
  "using the NHS App",
  "managing repeat prescriptions",
  "accessing healthcare campaigns",
  "understanding care pathways",
];

const practiceProblems = [
  "Repeated explanations by reception staff",
  "Increased admin pressure",
  "High DNA (Did Not Attend) rates",
  "Reduced patient engagement",
  "Lower uptake of digital tools",
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image — diverse patients in waiting room */}
          <div className="flex-1 relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden w-full min-w-[270px] aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-xl">
              <Image
                src="/images/reception.jpeg"
                alt="Diverse patients in a GP waiting room"
                fill
                className="object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border">
                <p className="text-dark font-semibold text-sm mb-1">
                  Language barriers affect
                </p>
                <p className="text-3xl font-bold text-[#005EB8]">1 in 10</p>
                <p className="text-text-secondary text-xs mt-1">
                  GP patients in diverse communities
                </p>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#E6F1FB] -z-10" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#E6F1FB] -z-10" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <SectionHeader
              eyebrow="The Challenge"
              title="Communication Barriers Continue To Impact Healthcare Access"
              subtitle="Across England, communication barriers continue to affect patient understanding, healthcare access and service utilisation."
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Patient side */}
              <div className="bg-[#FEF2F2] rounded-2xl p-5 border border-red-100">
                <p className="text-sm font-bold text-[#EF4444] uppercase tracking-wider mb-3">
                  Patients struggle to
                </p>
                <ul className="space-y-2.5">
                  {patientProblems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EF4444]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practice side */}
              <div className="bg-[#FFFBEB] rounded-2xl p-5 border border-amber-100">
                <p className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider mb-3">
                  Practices face
                </p>
                <ul className="space-y-2.5">
                  {practiceProblems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#F59E0B]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-dark font-semibold text-lg">
              PracticeLingo was created to solve this{" "}
              <span className="text-[#005EB8]">simply and effectively.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
