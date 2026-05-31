import LegalLayout from "@/components/legal/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Introduction</h2>
          <p>PracticeLingo (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect information when you use the PracticeLingo platform, website, or patient-facing pages.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Personal Data We Collect</h2>
          <p>We may collect the following data:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Contact form submissions (organisation name, email address, phone number, message)</li>
            <li>Analytics data (page views, QR interactions, language selections — anonymised)</li>
            <li>Cookie data (see our Cookie Policy)</li>
          </ul>
          <p className="mt-3">We do not collect clinical patient data, NHS numbers, or medical records through the PracticeLingo platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to enquiries and demo requests</li>
            <li>To operate and improve the PracticeLingo platform</li>
            <li>To measure usage and impact across pilot practices</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Data Retention</h2>
          <p>Contact form data is retained for 12 months unless you request deletion earlier. Anonymised analytics data may be retained for up to 3 years.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Your Rights</h2>
          <p>Under UK GDPR, you have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at <strong>privacy@practicelingo.co.uk</strong>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Contact</h2>
          <p>For privacy-related queries: <strong>privacy@practicelingo.co.uk</strong></p>
        </section>
      </div>
    </LegalLayout>
  );
}
