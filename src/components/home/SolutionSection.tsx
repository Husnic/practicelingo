import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import { Globe, QrCode, Volume2, Navigation, FileText } from "lucide-react";

const capabilities = [
  { Icon: Globe, text: "choose their preferred language" },
  { Icon: FileText, text: "access translated guidance" },
  { Icon: QrCode, text: "scan QR codes to continue on their own device" },
  { Icon: Volume2, text: "listen to audio guidance" },
  { Icon: Navigation, text: "navigate healthcare services independently" },
];

export default function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left text */}
          <div className="flex-1 order-2 lg:order-1">
            <SectionHeader
              eyebrow="The Solution"
              title="Helping Patients Navigate Healthcare More Confidently"
              subtitle="PracticeLingo transforms healthcare information into accessible multilingual experiences."
            />
            <p className="mt-6 text-text-secondary text-sm font-medium uppercase tracking-wide">
              Patients can:
            </p>
            <div className="mt-3 space-y-3">
              {capabilities.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-[#E6F1FB] flex items-center justify-center shrink-0 group-hover:bg-[#005EB8] transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#005EB8] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <p className="text-dark font-medium">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <Button href="/how-it-works">See How It Works</Button>
              <Button href="/contact" variant="outline">
                Book Demo
              </Button>
            </div>
          </div>

          {/* Right: image + stat cards */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden w-full min-w-[270px] aspect-[4/3] shadow-xl">
                <Image
                  src="/images/solution.jpeg"
                  alt="GP doctor consulting with patient using digital tools"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005EB8]/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
