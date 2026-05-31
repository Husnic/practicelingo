import LegalLayout from "@/components/legal/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Agreement</h2>
          <p>By accessing or using the PracticeLingo website and platform, you agree to be bound by these Terms of Use. If you do not agree, please do not use the service.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Acceptable Use</h2>
          <p>You agree to use PracticeLingo only for lawful purposes and in accordance with these Terms. You must not use the platform to transmit any harmful, offensive, or misleading content.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Intellectual Property</h2>
          <p>All content, branding, and technology on the PracticeLingo platform is the intellectual property of PracticeLingo and its licensors. You may not copy, reproduce, or redistribute content without express written permission.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Liabilities</h2>
          <p>PracticeLingo provides guidance and navigation support only. We are not liable for clinical decisions made based on content accessed through the platform. Always consult a qualified healthcare professional for medical advice.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Service Boundaries</h2>
          <p>PracticeLingo is a communication and navigation tool, not a clinical service. We do not diagnose, treat, or prescribe. We connect patients to relevant NHS services and information.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Changes</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
