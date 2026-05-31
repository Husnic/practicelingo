import SectionHeader from "@/components/shared/SectionHeader";

const patientProblems = [
  "Understand appointment systems",
  "Complete registration forms",
  "Use the NHS App",
  "Follow healthcare instructions",
  "Navigate healthcare services",
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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Challenge"
          title="Language Barriers Are Slowing Down Healthcare Access"
          subtitle="Across the UK, many GP practices serve patients whose first language is not English — creating friction for patients and pressure for practice teams."
          centered
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Patient side */}
          <div className="bg-surface rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark">Patients Often Struggle To</h3>
            </div>
            <ul className="space-y-3">
              {patientProblems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-error/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-error" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice side */}
          <div className="bg-surface rounded-3xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-warning/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark">For Practices, This Leads To</h3>
            </div>
            <ul className="space-y-3">
              {practiceProblems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-warning/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solution teaser */}
        <div className="mt-10 text-center">
          <p className="text-dark font-semibold text-lg">
            PracticeLingo was created to solve this problem{" "}
            <span className="text-primary">simply and effectively.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
