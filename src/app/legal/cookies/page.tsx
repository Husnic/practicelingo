import LegalLayout from "@/components/legal/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy">
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help us understand how PracticeLingo is used and improve the experience for all users.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-dark font-semibold">Type</th>
                  <th className="text-left py-2 pr-4 text-dark font-semibold">Purpose</th>
                  <th className="text-left py-2 text-dark font-semibold">Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { type: "Essential", purpose: "Core site functionality, language preference", req: "Yes" },
                  { type: "Analytics", purpose: "Understand usage patterns (anonymised)", req: "Optional" },
                  { type: "Functional", purpose: "Remember language selection across sessions", req: "Optional" },
                ].map((row) => (
                  <tr key={row.type}>
                    <td className="py-3 pr-4 font-medium text-dark">{row.type}</td>
                    <td className="py-3 pr-4">{row.purpose}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.req === "Yes" ? "bg-primary/10 text-primary" : "bg-border text-text-secondary"}`}>
                        {row.req}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Managing Cookies</h2>
          <p>You can control cookies through your browser settings. Disabling cookies may affect some functionality of the PracticeLingo platform.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-dark mb-3">Consent</h2>
          <p>On your first visit, you will be asked to consent to non-essential cookies. You may withdraw consent at any time by adjusting your browser settings or contacting us.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
