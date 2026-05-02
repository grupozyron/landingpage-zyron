import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { OrganizationJsonLd } from "@/components/seo/organization-jsonld";
import { SkipToContent } from "@/components/skip-to-content";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_CANONICAL_URL } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SEO_DESCRIPTION =
  "A ZYRON transforma negócios tradicionais em empresas digitais. Tráfego pago, landing pages e IA para WhatsApp — com método e resultado previsível.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CANONICAL_URL),
  title: "ZYRON | Crescimento digital para empresas sérias",
  description: SEO_DESCRIPTION,
  icons: {
    icon: [{ url: "/favicon/icon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: SITE_CANONICAL_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ZYRON | Crescimento digital para empresas sérias",
    description:
      "Tráfego pago, landing pages premium e IA para WhatsApp. Solicite uma análise estratégica.",
    siteName: "ZYRON",
    locale: "pt_BR",
    type: "website",
    url: SITE_CANONICAL_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ZYRON — Crescimento digital para empresas sérias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRON | Crescimento digital para empresas sérias",
    description:
      "Tráfego pago, landing pages premium e IA para WhatsApp. Solicite uma análise estratégica.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full ${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] font-sans text-foreground antialiased">
        <SkipToContent />
        {/* Antes da hidratação: evita restauração de scroll do browser (página abria “no meio”). */}
        <Script id="zyron-scroll-init" strategy="beforeInteractive">
          {`(function(){try{if('scrollRestoration'in history)history.scrollRestoration='manual';if(!location.hash){scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;}}catch(e){}})();`}
        </Script>
        <AnalyticsScripts />
        <OrganizationJsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
