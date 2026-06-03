import LegalLayout from "@/components/legal/LegalLayout";

export default function GovernanceFrameworkPage() {
  return (
    <LegalLayout title="Governance Framework Statement" lastUpdated="May 2026">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Purpose</h2>
          <p>
            This Governance Framework establishes the principles, standards, and controls
            that guide the design, operation, management, and continuous improvement of
            the PracticeLingo platform.
          </p>
          <p className="mt-3">
            PracticeLingo recognises that trust is fundamental to healthcare
            communication. The platform has therefore been developed with a commitment to
            transparency, accessibility, accountability, patient safety, privacy, and
            inclusion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Governance Objectives</h2>
          <p>The objectives of this framework are to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>support safe and effective patient communication</li>
            <li>promote accessibility and inclusion</li>
            <li>protect personal information</li>
            <li>support compliance with applicable laws and regulations</li>
            <li>maintain public trust</li>
            <li>provide clear accountability</li>
            <li>support future NHS and healthcare partnerships</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Governance Principles</h2>
          <p>PracticeLingo is guided by the following principles:</p>
          <div className="mt-4 space-y-4">
            {[
              {
                title: "Patient First",
                body: "The platform exists to improve patient understanding, access, and experience.",
              },
              {
                title: "Accessibility by Design",
                body: "Accessibility considerations are integrated throughout the platform rather than treated as an afterthought.",
              },
              {
                title: "Privacy and Security",
                body: "Information is handled responsibly and protected through appropriate safeguards.",
              },
              {
                title: "Transparency",
                body: "Users should understand how the platform works, how information is used, and the limitations of the service.",
              },
              {
                title: "Continuous Improvement",
                body: "PracticeLingo is committed to ongoing review and enhancement of policies, processes, and technologies.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-surface rounded-2xl p-4 border border-border">
                <p className="font-semibold text-dark text-sm mb-1">{title}</p>
                <p className="text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Governance Areas</h2>
          <p>The governance framework includes:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Privacy &amp; Data Protection</li>
            <li>Information Security</li>
            <li>Accessibility</li>
            <li>Safeguarding</li>
            <li>Clinical Safety</li>
            <li>Translation Governance</li>
            <li>User Experience</li>
            <li>Equality &amp; Inclusion</li>
            <li>Complaints &amp; Feedback</li>
            <li>AI &amp; Automation Oversight</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Policy Structure</h2>
          <p>The following policies support this framework:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Accessibility Statement</li>
            <li>GDPR Statement</li>
            <li>Clinical Disclaimer</li>
            <li>Cookie Policy</li>
            <li>Safeguarding Statement</li>
            <li>Translation Accuracy Disclaimer</li>
            <li>Emergency Disclaimer</li>
            <li>NHS Affiliation Disclaimer</li>
            <li>AI Disclosure</li>
            <li>Data Security Statement</li>
            <li>Equality, Diversity &amp; Inclusion Statement</li>
            <li>Complaints &amp; Feedback Procedure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Continuous Review</h2>
          <p>
            This framework will be reviewed periodically as the platform evolves and new
            regulatory, operational, or user requirements emerge.
          </p>
          <p className="mt-3">
            Document Owner: PracticeLingo Leadership Team &mdash; Review Frequency: Annual
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
