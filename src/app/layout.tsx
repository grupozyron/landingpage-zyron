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
  "ZYRON é uma empresa de crescimento premium do Grupo ZYRON: tráfego pago, landing pages estratégicas e aquisição previsível para negócios tradicionais que querem modernizar e escalar.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CANONICAL_URL),
  title: "ZYRON | Empresas sérias prontas para crescer no digital",
  description: SEO_DESCRIPTION,
  /* Favicons: `public/favicon/icon.svg` (incluído). Após adicionares PNG/ICO, vê public/favicon/MEDIDAS.md */
  icons: {
    icon: [{ url: "/favicon/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "ZYRON | Empresas sérias prontas para crescer no digital",
    description: SEO_DESCRIPTION,
    siteName: "ZYRON",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZYRON | Empresas sérias prontas para crescer no digital",
    description: SEO_DESCRIPTION,
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
