import LegalLayout from "@/components/legal/LegalLayout";

export default function SafeguardingPage() {
  return (
    <LegalLayout title="Safeguarding Statement">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Commitment</h2>
          <p>PracticeLingo is committed to the safety and wellbeing of all users, with particular attention to vulnerable patients including children, elderly individuals, and those experiencing mental health difficulties.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Vulnerable Users</h2>
          <p>Our platform is designed to be inclusive and accessible to patients with varying levels of digital literacy, language proficiency, and health literacy. We design for the most vulnerable user first.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Safeguarding Routes</h2>
          <p>If you are concerned about the welfare of yourself or someone else:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>In an emergency, call <strong>999</strong></li>
            <li>For urgent mental health support, call <strong>NHS 111</strong> and select the mental health option</li>
            <li>For non-urgent safeguarding concerns, contact your local authority safeguarding team</li>
            <li>Speak to your GP at the earliest opportunity</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Platform Safeguards</h2>
          <p>PracticeLingo does not collect or store any clinical patient data. Our platform does not replace clinical assessment. We signpost users to appropriate NHS services where necessary.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Contact</h2>
          <p>To raise a safeguarding concern related to PracticeLingo: <strong>support@practicelingo.co.uk</strong></p>
        </section>
      </div>
    </LegalLayout>
  );
}
