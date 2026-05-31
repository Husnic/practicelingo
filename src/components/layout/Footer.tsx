import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "Languages", href: "/languages" },
  { label: "Pilot Programme", href: "/pilot-programme" },
];

const supportLinks = [
  { label: "Accessibility Statement", href: "/legal/accessibility" },
  { label: "Contact", href: "/contact" },
  { label: "Complaints Procedure", href: "/legal/complaints" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "GDPR Statement", href: "/legal/gdpr" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Clinical Disclaimer", href: "/legal/clinical-disclaimer" },
  { label: "Translation Disclaimer", href: "/legal/translation-disclaimer" },
];

const safetyLinks = [
  { label: "Safeguarding Statement", href: "/legal/safeguarding" },
  { label: "Emergency Disclaimer", href: "/legal/emergency" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Image
              src="/brand/Primary-white.svg"
              alt="PracticeLingo"
              width={160}
              height={40}
              className="h-9 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Multilingual patient communication for GP surgeries and Primary
              Care Networks across the UK.
            </p>
            {/* NHS compatibility note */}
            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5 border border-white/10 max-w-xs">
              <Image src="/nhs.png" alt="NHS" width={36} height={20} className="h-5 w-auto opacity-80" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Supports NHS workflows. Not owned by NHS England.
              </p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 mt-6">
              Safety
            </h3>
            <ul className="space-y-2">
              {safetyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} PracticeLingo. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">Clear Care. Every Language.</p>
        </div>
      </div>
    </footer>
  );
}
