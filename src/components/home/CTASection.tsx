import Image from "next/image";
import Button from "@/components/shared/Button";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
        alt="Healthcare professionals supporting patients"
        fill
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003D80]/90 via-[#005EB8]/80 to-[#0B7A82]/85" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left text */}
          <div className="flex-1 max-w-2xl">
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Bring Clearer Communication To Your Organisation
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Support patients. Reduce communication barriers. Improve access.
            </p>
          </div>

          {/* Right: CTA card */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 min-w-[280px]">
              <p className="text-white font-bold text-lg mb-2">
                Ready to start?
              </p>
              <p className="text-white/70 text-sm mb-6">
                Join GP practices already improving multilingual communication.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  href="/contact"
                  size="lg"
                  variant="white"
                  className="w-full justify-center"
                >
                  Book a Demo
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="white-outline"
                  className="w-full justify-center"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
