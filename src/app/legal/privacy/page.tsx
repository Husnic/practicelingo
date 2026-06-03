import LegalLayout from "@/components/legal/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2026">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">1. Introduction</h2>
          <p>
            PracticeLingo is committed to protecting and respecting your privacy.
          </p>
          <p className="mt-3">
            This Privacy Policy explains how PracticeLingo collects, uses, stores, and
            protects information when individuals visit our website, interact with our
            services, scan QR codes, submit enquiries, or access multilingual healthcare
            guidance through the PracticeLingo platform.
          </p>
          <p className="mt-3">
            We recognise the importance of privacy, transparency, and responsible data
            management, particularly within healthcare environments.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">2. Who We Are</h2>
          <p>
            PracticeLingo is a multilingual patient communication platform designed to
            support healthcare organisations, patients, and communities through accessible
            healthcare information and digital communication tools.
          </p>
          <p className="mt-3">
            For questions regarding this Privacy Policy, please contact:{" "}
            <strong>privacy@practicelingo.co.uk</strong>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">3. Information We May Collect</h2>

          <h3 className="text-base font-semibold text-dark mb-2 mt-4">Information You Provide</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Organisation name</li>
            <li>Name of representative</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Enquiry details</li>
            <li>Feedback submissions</li>
          </ul>

          <h3 className="text-base font-semibold text-dark mb-2 mt-4">Information Automatically Collected</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Device type</li>
            <li>Browser information</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Website usage statistics</li>
            <li>QR code interactions</li>
            <li>Session analytics</li>
          </ul>

          <h3 className="text-base font-semibold text-dark mb-2 mt-4">Cookies and Similar Technologies</h3>
          <p>
            PracticeLingo may use cookies and analytics technologies to improve user
            experience, understand website performance, and support platform functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">4. How We Use Information</h2>
          <p>We may use information to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Respond to enquiries</li>
            <li>Arrange demonstrations</li>
            <li>Improve website performance</li>
            <li>Improve user experience</li>
            <li>Understand platform usage</li>
            <li>Monitor system performance</li>
            <li>Develop future platform features</li>
            <li>Meet legal and regulatory obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">5. Lawful Basis for Processing</h2>
          <p>
            Where applicable under UK GDPR, PracticeLingo relies upon:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Legitimate interests</li>
            <li>Consent</li>
            <li>Contractual necessity</li>
            <li>Legal obligations</li>
          </ul>
          <p className="mt-3">depending on the nature of the interaction.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">6. Data Sharing</h2>
          <p>PracticeLingo does not sell personal data.</p>
          <p className="mt-3">
            Information may be shared with trusted service providers who assist with:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Website hosting</li>
            <li>Analytics</li>
            <li>Security monitoring</li>
            <li>Email communications</li>
            <li>Technical support</li>
          </ul>
          <p className="mt-3">
            All suppliers are expected to maintain appropriate security and confidentiality standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">7. Data Retention</h2>
          <p>
            Information will only be retained for as long as reasonably necessary to
            fulfil the purposes outlined in this policy or to comply with legal
            obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">8. Data Security</h2>
          <p>
            PracticeLingo takes reasonable technical and organisational measures to
            protect information against:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>unauthorised access</li>
            <li>misuse</li>
            <li>accidental loss</li>
            <li>destruction</li>
            <li>alteration</li>
          </ul>
          <p className="mt-3">
            Security measures may include encryption, access controls, secure hosting
            environments, and monitoring systems.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">9. Your Rights</h2>
          <p>
            Depending on applicable law, individuals may have rights to:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>access personal information</li>
            <li>correct inaccurate information</li>
            <li>request deletion</li>
            <li>restrict processing</li>
            <li>object to processing</li>
            <li>withdraw consent where applicable</li>
          </ul>
          <p className="mt-3">
            Requests may be submitted to:{" "}
            <strong>privacy@practicelingo.co.uk</strong>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">10. Third-Party Links</h2>
          <p>
            PracticeLingo may link to NHS services and third-party websites.
          </p>
          <p className="mt-3">
            We are not responsible for the privacy practices of external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">11. Changes To This Policy</h2>
          <p>
            PracticeLingo may update this Privacy Policy periodically.
          </p>
          <p className="mt-3">Updated versions will be published on this website.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">12. Contact</h2>
          <p>
            Privacy enquiries: <strong>privacy@practicelingo.co.uk</strong>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
