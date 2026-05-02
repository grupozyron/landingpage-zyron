import { ScrollDepthTracker } from "@/components/analytics/scroll-depth-tracker";
import { ScrollHashHandler } from "@/components/scroll-hash-handler";
import { AudienceSegments } from "@/components/landing/audience-segments";
import { CaseStudy } from "@/components/landing/case-study";
import { FinalCta } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { GridBackground } from "@/components/landing/grid-background";
import { IaWhatsAppSection } from "@/components/landing/ia-whatsapp-section";
import { LogoWall } from "@/components/landing/logo-wall";
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta";
import { PainSection } from "@/components/landing/pain-section";
import { ProcessSection } from "@/components/landing/process-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SolutionSection } from "@/components/landing/solution-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ZyronHeader } from "@/components/landing/zyron-header";
import { ZyronHero } from "@/components/landing/zyron-hero";

export default function Home() {
  return (
    <>
      <ScrollHashHandler />
      <ScrollDepthTracker />
      <GridBackground />
      <ZyronHeader />
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="pb-32 outline-none md:pb-0 focus-visible:ring-2 focus-visible:ring-[#2563FF]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A]"
      >
        <ZyronHero />
        <LogoWall />
        <AudienceSegments />
        <PainSection />
        <SolutionSection />
        <IaWhatsAppSection />
        <CaseStudy />
        <ProcessSection />
        <TestimonialsSection />
        <FinalCta />
      </main>
      <MobileStickyCta />
      <FloatingWhatsApp />
      <SiteFooter />
    </>
  );
}
