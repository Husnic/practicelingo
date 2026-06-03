import LegalLayout from "@/components/legal/LegalLayout";

export default function TranslationDisclaimerPage() {
  return (
    <LegalLayout title="Translation Accuracy Disclaimer" lastUpdated="May 2026">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Purpose</h2>
          <p>
            PracticeLingo provides multilingual communication tools to help patients
            understand healthcare information and navigate healthcare services more easily.
          </p>
          <p className="mt-3">
            While every reasonable effort is made to ensure translation quality and
            accuracy, translations should be viewed as communication support rather than a
            replacement for professional interpretation or clinical consultation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Translation Quality</h2>
          <p>PracticeLingo may utilise:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>professionally reviewed translations</li>
            <li>approved translation libraries</li>
            <li>localised practice content</li>
            <li>text-to-speech technologies</li>
            <li>automated translation technologies</li>
          </ul>
          <p className="mt-4">Translation quality may vary depending on:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>language</li>
            <li>context</li>
            <li>dialect</li>
            <li>clinical terminology</li>
            <li>source material provided</li>
          </ul>
        </section>

        <section>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h2 className="text-base font-bold text-dark mb-2">Important Limitation</h2>
            <p>
              Translations are intended to improve accessibility and understanding.
            </p>
            <p className="mt-2">
              They should not be relied upon as the sole basis for making healthcare
              decisions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Clinical Clarification</h2>
          <p>
            Where uncertainty exists, patients should seek clarification directly from:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>their GP practice</li>
            <li>NHS services</li>
            <li>qualified healthcare professionals</li>
            <li>approved interpreter services where appropriate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Priority of Original Content</h2>
          <p>
            In the event of any inconsistency between translated content and the original
            source content, the original source content may take precedence.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Reporting Translation Concerns</h2>
          <p>
            PracticeLingo welcomes feedback regarding translation quality and accuracy.
          </p>
          <p className="mt-3">
            Concerns may be reported via:{" "}
            <strong>translations@practicelingo.co.uk</strong>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
