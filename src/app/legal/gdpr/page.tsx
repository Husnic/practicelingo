import LegalLayout from "@/components/legal/LegalLayout";

export default function GdprPage() {
  return (
    <LegalLayout title="GDPR Statement" lastUpdated="May 2026">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Introduction</h2>
          <p>
            PracticeLingo is committed to processing personal data responsibly, lawfully,
            and transparently in accordance with the UK General Data Protection Regulation
            (UK GDPR), the Data Protection Act 2018, and other applicable privacy
            legislation.
          </p>
          <p className="mt-3">
            We recognise the importance of protecting personal information and maintaining
            public trust, particularly within healthcare environments.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Commitment</h2>
          <p>PracticeLingo is committed to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>processing data lawfully, fairly, and transparently</li>
            <li>collecting only information necessary for legitimate purposes</li>
            <li>maintaining data accuracy</li>
            <li>limiting retention of personal information</li>
            <li>protecting information through appropriate security measures</li>
            <li>respecting individual privacy rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Lawful Basis for Processing</h2>
          <p>
            Depending on the nature of the interaction, PracticeLingo may rely upon:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Consent</li>
            <li>Legitimate Interests</li>
            <li>Contractual Necessity</li>
            <li>Legal Obligations</li>
          </ul>
          <p className="mt-3">as lawful bases for processing personal data.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Information We May Process</h2>
          <p>Examples include:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>organisation contact details</li>
            <li>demonstration requests</li>
            <li>enquiry submissions</li>
            <li>website usage analytics</li>
            <li>accessibility feedback</li>
            <li>QR interaction metrics</li>
          </ul>
          <p className="mt-3">
            PracticeLingo does not seek to collect special category health information
            through public-facing website forms unless explicitly stated.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Individual Rights</h2>
          <p>Individuals may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>request access to their information</li>
            <li>request correction of inaccurate information</li>
            <li>request erasure of information</li>
            <li>restrict processing</li>
            <li>object to processing</li>
            <li>request portability where applicable</li>
            <li>withdraw consent where consent is relied upon</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Data Retention</h2>
          <p>
            Personal information is retained only for as long as necessary to fulfil
            legitimate business, legal, regulatory, or operational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">International Transfers</h2>
          <p>
            Where third-party providers process information outside the United Kingdom,
            appropriate safeguards will be implemented in accordance with applicable data
            protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Data Security</h2>
          <p>
            PracticeLingo employs reasonable technical and organisational measures to
            protect information against:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>unauthorised access</li>
            <li>accidental disclosure</li>
            <li>misuse</li>
            <li>alteration</li>
            <li>loss</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Contact</h2>
          <p>
            Data protection enquiries may be directed to:{" "}
            <strong>privacy@practicelingo.co.uk</strong>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
