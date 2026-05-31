import LegalLayout from "@/components/legal/LegalLayout";

export default function EmergencyPage() {
  return (
    <LegalLayout title="Emergency & Urgent Care Disclaimer">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <div className="bg-error rounded-2xl p-6 text-white text-center">
          <p className="text-3xl mb-3">🚨</p>
          <h2 className="text-xl font-bold mb-2">In an Emergency — Call 999</h2>
          <p className="text-red-100">PracticeLingo is not an emergency service. If you or someone is in immediate danger or requires emergency medical care, call 999 immediately.</p>
        </div>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">What PracticeLingo Is</h2>
          <p>PracticeLingo is a multilingual patient communication and navigation platform designed for use in GP surgery settings. It is not a clinical service, triage tool, or emergency response system.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">When to Call 999</h2>
          <p>Call 999 if someone:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Is having a heart attack or stroke</li>
            <li>Has stopped breathing or is unconscious</li>
            <li>Has severe bleeding that cannot be controlled</li>
            <li>Is in severe pain</li>
            <li>Is in immediate danger</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">When to Call NHS 111</h2>
          <p>Call 111 (free) when you need urgent medical advice but it is not a life-threatening emergency. NHS 111 is available 24 hours a day, 7 days a week, with multilingual interpreter support.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Urgent Treatment Centres</h2>
          <p>For urgent but non-emergency conditions, visit your nearest Urgent Treatment Centre (UTC). You can find your nearest UTC at nhs.uk or through the NHS App.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
