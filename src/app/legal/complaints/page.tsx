import LegalLayout from "@/components/legal/LegalLayout";

export default function ComplaintsPage() {
  return (
    <LegalLayout title="Complaints & Feedback Procedure">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Approach</h2>
          <p>PracticeLingo welcomes all feedback — positive or negative. We use feedback to improve our platform and better serve patients and healthcare providers.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">How to Raise a Concern</h2>
          <p>To raise a complaint or concern, please use the most relevant route below:</p>
          <div className="space-y-3 mt-4">
            <div className="bg-surface rounded-2xl p-4 flex items-start gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="font-semibold text-dark text-sm">Translation Concerns</p>
                <a href="mailto:translations@practicelingo.co.uk" className="text-primary text-sm hover:underline">translations@practicelingo.co.uk</a>
              </div>
            </div>
            <div className="bg-surface rounded-2xl p-4 flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-dark text-sm">All Other Concerns</p>
                <a href="mailto:support@practicelingo.co.uk" className="text-primary text-sm hover:underline">support@practicelingo.co.uk</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Response Process</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>We aim to acknowledge all complaints within 3 working days</li>
            <li>We aim to provide a full response within 10 working days</li>
            <li>Complex issues may require longer investigation — we will keep you informed</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Escalation</h2>
          <p>If you are not satisfied with our response, you may contact the Information Commissioner&apos;s Office (ICO) for data-related concerns at ico.org.uk, or the Parliamentary and Health Service Ombudsman (PHSO) for healthcare complaints.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Clinical Complaints</h2>
          <p>If your complaint relates to clinical care received at a GP practice, please contact that practice directly. PracticeLingo is responsible for the communication platform only — not the clinical care provided by practices.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
