import Button from "@/components/shared/Button";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl px-8 py-16 lg:py-20 relative overflow-hidden">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative">
            <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bring Clearer Communication To Your Practice
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Book a demo or get in touch to see how PracticeLingo transforms multilingual patient communication across your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="white">
                Book Demo
              </Button>
              <Button href="/contact" size="lg" variant="white-outline">
                Contact Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
