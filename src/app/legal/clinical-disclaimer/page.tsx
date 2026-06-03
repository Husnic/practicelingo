import LegalLayout from "@/components/legal/LegalLayout";

export default function ClinicalDisclaimerPage() {
  return (
    <LegalLayout title="Clinical Disclaimer" lastUpdated="May 2026">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <div className="bg-error/10 border border-error/20 rounded-2xl p-5">
          <p className="text-dark font-semibold mb-2">Important Notice</p>
          <p>
            PracticeLingo does not provide medical diagnosis, clinical advice, or medical
            treatment. All content on this platform is for navigational and educational
            purposes only.
          </p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Platform Purpose</h2>
          <p>PracticeLingo is a multilingual communication and patient engagement platform.</p>
          <p className="mt-4 font-semibold text-dark text-sm">The platform is designed to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>improve patient understanding</li>
            <li>improve access to healthcare services</li>
            <li>support healthcare navigation</li>
            <li>reduce language barriers</li>
            <li>improve engagement with healthcare information</li>
          </ul>
          <p className="mt-4 font-semibold text-dark text-sm">PracticeLingo is not designed to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>diagnose medical conditions</li>
            <li>provide clinical advice</li>
            <li>prescribe treatment</li>
            <li>make clinical decisions</li>
            <li>replace healthcare professionals</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Clinical Content Boundaries</h2>
          <p className="font-semibold text-dark text-sm">PracticeLingo content is intended for:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>education</li>
            <li>communication</li>
            <li>navigation</li>
            <li>awareness</li>
            <li>service guidance</li>
          </ul>
          <p className="mt-4 font-semibold text-dark text-sm">PracticeLingo content is not intended for:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>diagnosis</li>
            <li>treatment decisions</li>
            <li>emergency management</li>
            <li>medication advice</li>
            <li>clinical assessment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Clinical Safety Principles</h2>
          <div className="space-y-4 mt-2">
            {[
              { title: "Patient Understanding", body: "Healthcare information should be easier to understand regardless of language spoken." },
              { title: "Clear Communication", body: "Patients should receive information in a format that supports informed engagement with healthcare services." },
              { title: "Transparency", body: "Users should understand the limitations of the platform." },
              { title: "Escalation", body: "Where uncertainty exists, patients should be directed to appropriate healthcare services." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-surface rounded-2xl p-4 border border-border">
                <p className="font-semibold text-dark text-sm mb-1">{title}</p>
                <p className="text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Emergency Care</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
            <p className="font-semibold text-dark mb-3">
              PracticeLingo is not an emergency medical service.
            </p>
            <p className="text-sm mb-3">Users experiencing medical emergencies should:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>call <strong>999</strong></li>
              <li>attend Accident &amp; Emergency</li>
              <li>follow local emergency healthcare guidance</li>
            </ul>
            <p className="text-sm mt-3 mb-2">Users with urgent medical concerns should contact:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>NHS 111</strong></li>
              <li>their GP practice</li>
              <li>appropriate healthcare professionals</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Professional Advice</h2>
          <p>
            Always seek advice from a qualified healthcare professional for any medical
            condition or symptom. If you are concerned about your health, contact your GP,
            call NHS 111, or visit your nearest urgent treatment centre.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Safety Concerns</h2>
          <p>
            Users may report concerns relating to translation accuracy, content quality,
            accessibility, or patient safety through the PracticeLingo feedback process.
          </p>
          <p className="mt-3">
            Appropriate concerns will be reviewed and investigated.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
