import { SITE_CANONICAL_URL } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZYRON",
    url: SITE_CANONICAL_URL,
    description:
      "Empresa de crescimento premium: tráfego pago, landing pages e sistemas de aquisição para negócios tradicionais.",
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo ZYRON",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
