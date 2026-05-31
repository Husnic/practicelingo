import LegalLayout from "@/components/legal/LegalLayout";

export default function AiDisclosurePage() {
  return (
    <LegalLayout title="AI & Automated Translation Disclosure">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Use of Automated Technology</h2>
          <p>Some translations and audio guidance provided through the PracticeLingo platform may use automated translation technologies, including AI-assisted translation tools.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Our Approach</h2>
          <p>We use a structured multilingual content system based on translation keys and reviewed content. Where automated translation is used, we work to ensure content is reviewed for accuracy and appropriateness for healthcare contexts.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Limitations</h2>
          <p>Automated translations may not capture all cultural nuances or regional language variations. Users should be aware that:</p>
          <ul className="list-disc pl-5 space-y-1 mt-3">
            <li>Translations are guidance support, not clinical instructions</li>
            <li>Clinical consultations should always involve a qualified interpreter where needed</li>
            <li>Accuracy may vary between language pairs</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Audio Guidance</h2>
          <p>Audio playback may be generated using text-to-speech technology. The audio content mirrors the written translation and is subject to the same accuracy considerations.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Report Issues</h2>
          <p>To report translation or audio quality issues: <strong>translations@practicelingo.co.uk</strong></p>
        </section>
      </div>
    </LegalLayout>
  );
}
