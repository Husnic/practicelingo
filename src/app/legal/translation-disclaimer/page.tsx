import LegalLayout from "@/components/legal/LegalLayout";

export default function TranslationDisclaimerPage() {
  return (
    <LegalLayout title="Translation Accuracy Disclaimer">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Nature of Translations</h2>
          <p>PracticeLingo provides multilingual healthcare guidance to support patient navigation and communication. Translations are intended as navigational and educational support tools.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Translation Accuracy</h2>
          <p>While we take care to ensure translations are accurate and appropriate, translation accuracy may vary. Automated translation technologies may be used to support content delivery (see our AI &amp; Automated Translation Disclosure).</p>
          <p className="mt-3">We strongly recommend that:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Clinical information is verified with a qualified healthcare professional</li>
            <li>Patients seek interpreter support for clinical consultations</li>
            <li>Urgent clinical clarification comes directly from healthcare professionals</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Interpreter Rights</h2>
          <p>Patients have the right to request a professional interpreter for clinical appointments with NHS services. PracticeLingo does not replace professional medical interpretation services.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Report Translation Concerns</h2>
          <p>If you believe a translation is inaccurate or potentially misleading, please report it to: <strong>translations@practicelingo.co.uk</strong></p>
        </section>
      </div>
    </LegalLayout>
  );
}
