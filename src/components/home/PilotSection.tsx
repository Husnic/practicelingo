import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";

const practices = [
  "Earl's Court Health & Wellbeing Centre",
  "Brompton Medical Centre",
  "Kings Road Medical Services",
  "Chelsea Medical Services",
  "Kynance Practice",
];

const objectives = [
  "Reduce reception workload",
  "Improve multilingual communication",
  "Improve NHS App uptake",
  "Increase patient engagement",
  "Support digital access goals",
];

export default function PilotSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="flex-1">
            <SectionHeader
              eyebrow="Pilot Programme"
              title="Launching With Kensington & Chelsea South PCN"
              subtitle="PracticeLingo is being piloted across GP surgeries within the Kensington & Chelsea South Primary Care Network in London."
            />

            <div className="mt-8">
              <h4 className="font-semibold text-dark mb-4 text-sm uppercase tracking-wider">Pilot Practices</h4>
              <ul className="space-y-3">
                {practices.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-dark text-sm font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button href="/pilot-programme">Join Pilot Programme</Button>
            </div>
          </div>

          {/* Objectives */}
          <div className="flex-1 bg-surface rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark">Pilot Objectives</h3>
            </div>
            <ul className="space-y-4">
              {objectives.map((obj, i) => (
                <li key={obj} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-dark text-sm font-medium pt-1">{obj}</p>
                </li>
              ))}
            </ul>

            {/* Map placeholder */}
            <div className="mt-8 bg-white rounded-2xl p-4 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-dark">Kensington &amp; Chelsea, London</span>
              </div>
              <div className="bg-surface rounded-xl h-28 flex items-center justify-center">
                <p className="text-text-secondary text-sm">SW3 · SW5 · W8 · W14 area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
