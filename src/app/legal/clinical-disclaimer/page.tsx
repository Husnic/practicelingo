import LegalLayout from "@/components/legal/LegalLayout";

export default function ClinicalDisclaimerPage() {
  return (
    <LegalLayout title="Clinical Disclaimer">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <div className="bg-error/10 border border-error/20 rounded-2xl p-5">
          <p className="text-dark font-semibold mb-2">Important Notice</p>
          <p>PracticeLingo does not provide medical diagnosis, clinical advice, or medical treatment. All content on this platform is for navigational and educational purposes only.</p>
        </div>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Nature of Content</h2>
          <p>Content on PracticeLingo is designed to help patients navigate healthcare services and understand general health information. It is not a substitute for professional clinical advice.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Professional Advice</h2>
          <p>Always seek advice from a qualified healthcare professional for any medical condition or symptom. If you are concerned about your health, contact your GP, call NHS 111, or visit your nearest urgent treatment centre.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Emergency Care</h2>
          <p className="font-semibold text-dark">For emergencies, always call 999 or attend your nearest Accident and Emergency (A&E) department.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Limitation of Liability</h2>
          <p>PracticeLingo accepts no liability for clinical decisions made based on content accessed through the platform. Users access content at their own risk and are advised to verify all health information with a qualified healthcare provider.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
