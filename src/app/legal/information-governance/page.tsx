import LegalLayout from "@/components/legal/LegalLayout";

export default function InformationGovernancePage() {
  return (
    <LegalLayout title="Information Governance Statement" lastUpdated="May 2026">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Introduction</h2>
          <p>
            PracticeLingo recognises the importance of information governance in
            supporting trust, transparency, privacy, and accountability.
          </p>
          <p className="mt-3">
            We are committed to managing information responsibly and in accordance with
            applicable legal, ethical, and operational requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Information Governance Principles</h2>
          <p>PracticeLingo seeks to ensure that information is:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>handled lawfully</li>
            <li>accurate where possible</li>
            <li>appropriately protected</li>
            <li>available when required</li>
            <li>retained appropriately</li>
            <li>disposed of securely</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Scope</h2>
          <p>This statement applies to information processed through:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>the PracticeLingo website</li>
            <li>QR interactions</li>
            <li>patient-facing content</li>
            <li>practice-facing administration tools</li>
            <li>feedback and contact forms</li>
            <li>future platform services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Data Protection</h2>
          <p>PracticeLingo supports compliance with:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>UK GDPR</li>
            <li>Data Protection Act 2018</li>
            <li>Privacy and Electronic Communications Regulations (PECR)</li>
          </ul>
          <p className="mt-3">where applicable.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Information Security</h2>
          <p>PracticeLingo seeks to implement reasonable security controls including:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>secure hosting</li>
            <li>access controls</li>
            <li>encrypted communications</li>
            <li>monitoring processes</li>
            <li>role-based permissions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Confidentiality</h2>
          <p>
            Access to information should be restricted to authorised individuals with
            legitimate business or operational needs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Accuracy</h2>
          <p>
            Reasonable efforts are made to ensure information is accurate, current, and
            relevant.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Accountability</h2>
          <p>
            Information governance responsibilities are overseen by PracticeLingo
            management and relevant service providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Continuous Improvement</h2>
          <p>
            Information governance practices will continue to evolve alongside the
            platform and future healthcare partnerships.
          </p>
          <p className="mt-3">
            Review Frequency: Annual
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
