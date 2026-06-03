import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "Languages", href: "/languages" },
  { label: "Pilot Programme", href: "/pilot-programme" },
  { label: "Contact", href: "/contact" },
];

const patientLinks = [
  { label: "Book Appointment", href: "/patient/book-appointment" },
  { label: "Register With Practice", href: "/patient/register" },
  { label: "Repeat Prescriptions", href: "/patient/repeat-prescriptions" },
  { label: "NHS App Support", href: "/patient/nhs-app" },
  { label: "Health Campaigns", href: "/patient/health-campaigns" },
  { label: "Learn About Your Health", href: "/patient/learn-about-your-health" },
];

const accessibilityLinks = [
  { label: "Accessibility Statement", href: "/legal/accessibility" },
  { label: "Equality, Diversity & Inclusion", href: "/legal/edi" },
  { label: "Complaints & Feedback", href: "/legal/complaints" },
  { label: "Contact", href: "/contact" },
];

const governanceLegalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "GDPR Statement", href: "/legal/gdpr" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Data Security Statement", href: "/legal/data-security" },
];

const clinicalSafetyLinks = [
  { label: "Clinical Disclaimer", href: "/legal/clinical-disclaimer" },
  { label: "Emergency Disclaimer", href: "/legal/emergency" },
  { label: "Safeguarding Statement", href: "/legal/safeguarding" },
  { label: "Translation Disclaimer", href: "/legal/translation-disclaimer" },
  { label: "AI Disclosure", href: "/legal/ai-disclosure" },
];

const transparencyLinks = [
  { label: "NHS Affiliation Disclaimer", href: "/legal/nhs-affiliation" },
  { label: "Governance Framework", href: "/legal/governance-framework" },
  { label: "Information Governance", href: "/legal/information-governance" },
];

const columns = [
  { heading: "Product", links: productLinks },
  { heading: "Patient Access", links: patientLinks },
  { heading: "Accessibility & Support", links: accessibilityLinks },
  { heading: "Governance & Legal", links: governanceLegalLinks },
  { heading: "Clinical & Safety", links: clinicalSafetyLinks },
  { heading: "Transparency", links: transparencyLinks },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      {/* Emergency banner */}
      <div className="bg-error/10 border-t-2 border-error">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-center text-red-300">
            <strong className="text-white">Emergency:</strong> PracticeLingo is
            not an emergency service. Call <strong>999</strong> or{" "}
            <strong>NHS 111</strong> for urgent care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand row */}
        <div className="mb-10 pb-8 border-b border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Image
            src="/brand/Primary-white.svg"
            alt="PracticeLingo"
            width={160}
            height={40}
            className="h-9 w-auto"
          />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
            PracticeLingo helps patients understand and access healthcare
            information in multiple languages. PracticeLingo is a communication
            and patient engagement platform and does not provide medical
            diagnosis, treatment, or emergency medical services.
          </p>
          <div className="shrink-0 flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5 border border-white/10">
            <Image
              src="/nhs.png"
              alt="NHS"
              width={36}
              height={20}
              className="h-5 w-auto opacity-80"
            />
            <p className="text-xs text-gray-400 leading-relaxed">
              Supports NHS workflows.
              <br />
              Not owned by NHS England.
            </p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-white transition-colors leading-relaxed block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PracticeLingo. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500">Clear Care. Every Language.</p>
        </div>
      </div>
    </footer>
  );
}
