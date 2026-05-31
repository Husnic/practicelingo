import LegalLayout from "@/components/legal/LegalLayout";

export default function GdprPage() {
  return (
    <LegalLayout title="GDPR Statement">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Lawful Basis</h2>
          <p>PracticeLingo processes personal data under the following lawful bases under UK GDPR:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li><strong>Legitimate interests</strong> — for platform operation and service improvement</li>
            <li><strong>Consent</strong> — for optional analytics and communications</li>
            <li><strong>Legal obligation</strong> — where required by law</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Data Processing</h2>
          <p>We process only the minimum personal data necessary to deliver our services. We do not sell personal data to third parties. Patient-facing pages use anonymised analytics only.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Data Retention</h2>
          <p>Personal data is retained only as long as necessary for the purpose for which it was collected. Contact enquiries are held for 12 months. All data is securely deleted after the retention period.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Your Rights Under UK GDPR</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Right of access (Subject Access Request)</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to restriction of processing</li>
            <li>Right to data portability</li>
            <li>Right to object</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Contact for Rights Requests</h2>
          <p>Email: <strong>gdpr@practicelingo.co.uk</strong></p>
          <p className="mt-2">You also have the right to lodge a complaint with the ICO: <strong>ico.org.uk</strong></p>
        </section>
      </div>
    </LegalLayout>
  );
}
