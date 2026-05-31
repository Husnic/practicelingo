import LegalLayout from "@/components/legal/LegalLayout";

export default function EdiPage() {
  return (
    <LegalLayout title="Equality, Diversity & Inclusion Statement">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Commitment</h2>
          <p>PracticeLingo is explicitly built to advance health equity, inclusion, and multilingual accessibility in UK healthcare. Equal access to healthcare information is a fundamental right — not a nice-to-have.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Health Equity</h2>
          <p>Language barriers are a known driver of health inequality in the UK. PracticeLingo directly addresses this by providing healthcare guidance in the patient's preferred language — reducing the gap between English-speaking and non-English-speaking patients.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Inclusion by Design</h2>
          <p>Every element of PracticeLingo is designed with inclusion at its core:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Multilingual support across 10+ languages</li>
            <li>Accessible design for elderly and low-digital-literacy users</li>
            <li>Audio guidance for patients who cannot read</li>
            <li>Large, clear text for visually impaired users</li>
            <li>Touch-friendly interfaces for limited dexterity</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Communities We Serve</h2>
          <p>PracticeLingo is designed to serve diverse communities across the UK, including — but not limited to — Arabic, Mandarin, Portuguese, Hindi, French, Yoruba, and West African language-speaking communities.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Ongoing Commitment</h2>
          <p>We are continuously expanding our language library and improving accessibility to better serve all communities. We welcome feedback at <strong>inclusion@practicelingo.co.uk</strong>.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
