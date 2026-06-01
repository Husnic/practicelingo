import LegalLayout from "@/components/legal/LegalLayout";

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Commitment</h2>
          <p>
            PracticeLingo is committed to making healthcare communication
            accessible to everyone — including elderly patients, those with low
            digital literacy, non-English speakers, and users who rely on
            assistive technology.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">
            Readability Standards
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Large, readable text throughout all patient-facing pages</li>
            <li>High contrast colour combinations</li>
            <li>Touch-friendly interface with large tap targets</li>
            <li>No reliance on colour alone to convey meaning</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">
            Assistive Technology
          </h2>
          <p>
            PracticeLingo patient pages are designed to work with screen
            readers. All images include descriptive alt text. Audio playback is
            available for all key content.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">
            Multilingual Accessibility
          </h2>
          <p>
            Content is available in 6 languages. Audio guidance is provided in
            each supported language to support patients who may have difficulty
            reading.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Feedback</h2>
          <p>
            If you experience accessibility barriers, please contact us at{" "}
            <strong>accessibility@practicelingo.co.uk</strong> so we can
            improve.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
