import LegalLayout from "@/components/legal/LegalLayout";

export default function NhsAffiliationPage() {
  return (
    <LegalLayout title="NHS Affiliation Disclaimer">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Relationship with the NHS</h2>
          <p>PracticeLingo supports NHS workflows and services. We work with GP practices and Primary Care Networks to deliver multilingual patient communication.</p>
          <p className="mt-3 font-semibold text-dark">PracticeLingo is not owned, operated, endorsed, or contracted by NHS England or any NHS trust, unless formally stated in a specific partnership agreement.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Use of NHS Branding</h2>
          <p>Where NHS logos, links, or branding appear on PracticeLingo pages, they are used solely to direct patients to official NHS services. The NHS logo is the property of NHS England.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Pilot Programme</h2>
          <p>The PracticeLingo pilot programme operates in partnership with individual GP practices within the Kensington &amp; Chelsea South PCN. This is an independent commercial arrangement with those practices.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Queries</h2>
          <p>For questions about our NHS relationships: <strong>partnerships@practicelingo.co.uk</strong></p>
        </section>
      </div>
    </LegalLayout>
  );
}
