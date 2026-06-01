const siteUrl = "https://practicelingo.co.uk";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PracticeLingo",
    url: siteUrl,
    logo: `${siteUrl}/brand/Primary.png`,
    description:
      "PracticeLingo is a multilingual patient communication platform for UK GP surgeries and Primary Care Networks, providing waiting room displays, QR mobile continuation, and audio guidance in 6 languages.",
    slogan: "Clear Care. Every Language.",
    foundingLocation: {
      "@type": "Place",
      addressCountry: "GB",
      addressLocality: "London",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "Multilingual healthcare communication",
      "NHS GP surgery digital tools",
      "Patient communication technology",
      "Health inequality and language barriers",
      "Primary Care Networks",
    ],
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@practicelingo.co.uk",
      availableLanguage: [
        "English",
        "Arabic",
        "Mandarin",
        "Portuguese",
        "Hindi",
        "French",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "PracticeLingo",
    description:
      "Multilingual patient communication platform for UK GP surgeries and PCNs.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PracticeLingo",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "A multilingual patient communication platform for UK GP surgeries combining waiting room displays, QR mobile continuation, audio translation, and digital healthcare guidance in 6 languages.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: "GB",
    },
    featureList: [
      "Multilingual waiting room displays",
      "QR-powered mobile continuation",
      "Audio translation in 6 languages",
      "NHS App onboarding support",
      "Health campaign delivery",
      "Health A-Z education library",
      "GDPR compliant",
      "No patient app download required",
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "GP Practice, Primary Care Network, NHS Healthcare Provider",
      geographicArea: { "@type": "Country", name: "United Kingdom" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PracticeLingo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PracticeLingo is a multilingual patient communication platform designed for UK GP surgeries and Primary Care Networks. It provides waiting room displays that allow patients to select their preferred language, QR codes for mobile continuation, audio guidance, and digital healthcare information in 6 languages.",
        },
      },
      {
        "@type": "Question",
        name: "Which languages does PracticeLingo support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PracticeLingo currently supports English, Arabic, Mandarin, Portuguese, Hindi, and French at launch. Spanish, Yoruba, Pidgin, German, Italian, and Twi are coming soon.",
        },
      },
      {
        "@type": "Question",
        name: "Does PracticeLingo require patients to download an app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Patients scan a QR code from the waiting room display and multilingual content opens directly in their phone browser. No app download is required.",
        },
      },
      {
        "@type": "Question",
        name: "Is PracticeLingo NHS-approved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PracticeLingo supports NHS workflows and services and is designed to be NHS-compatible. It is not owned or operated by NHS England unless formally stated in a specific partnership agreement.",
        },
      },
      {
        "@type": "Question",
        name: "Is PracticeLingo GDPR compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. PracticeLingo does not collect or store individual patient clinical data. All data handling is aligned with UK GDPR requirements. Analytics data is anonymised.",
        },
      },
      {
        "@type": "Question",
        name: "Where is PracticeLingo currently deployed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PracticeLingo is currently being piloted across five GP practices within the Kensington & Chelsea South Primary Care Network in London, including Earl's Court Health & Wellbeing Centre, Brompton Medical Centre, Kings Road Medical Services, Chelsea Medical Services, and Kynance Practice.",
        },
      },
      {
        "@type": "Question",
        name: "How does PracticeLingo help reduce reception workload?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "By providing multilingual self-service guidance for appointment booking, prescription ordering, NHS App onboarding, and health information, PracticeLingo reduces the need for reception staff to repeatedly explain routine processes to patients who speak different languages.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
