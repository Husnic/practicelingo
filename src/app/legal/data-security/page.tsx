import LegalLayout from "@/components/legal/LegalLayout";

export default function DataSecurityPage() {
  return (
    <LegalLayout title="Data Security Statement">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Security Approach</h2>
          <p>PracticeLingo takes data security seriously. We implement technical and organisational measures to protect all personal data against unauthorised access, loss, or disclosure.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Technical Measures</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Encryption in transit:</strong> All data transmitted is encrypted using TLS</li>
            <li><strong>Encryption at rest:</strong> Stored data is encrypted</li>
            <li><strong>Secure hosting:</strong> Infrastructure hosted on reputable UK/EU cloud providers</li>
            <li><strong>Access controls:</strong> Role-based access control limits who can access data</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">GDPR Alignment</h2>
          <p>Our security practices are aligned with UK GDPR requirements. We conduct regular reviews of our security posture and update our practices in line with current best practice.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Patient Data</h2>
          <p>PracticeLingo does not store individual patient clinical data, NHS numbers, or medical records. Patient-facing pages use anonymised analytics only.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Reporting a Security Issue</h2>
          <p>To report a security vulnerability or data breach concern: <strong>support@practicelingo.co.uk</strong></p>
        </section>
      </div>
    </LegalLayout>
  );
}
