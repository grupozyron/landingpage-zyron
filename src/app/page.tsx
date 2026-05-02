import { ScrollHashHandler } from "@/components/scroll-hash-handler";
import { CaseStudy } from "@/components/landing/case-study";
import { DifferentialSection } from "@/components/landing/differential-section";
import { FinalCta } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { GridBackground } from "@/components/landing/grid-background";
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta";
import { PainSection } from "@/components/landing/pain-section";
import { PricePerceptionSection } from "@/components/landing/price-perception-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SolutionSection } from "@/components/landing/solution-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustStrip } from "@/components/landing/trust-strip";
import { WhatsappAiSection } from "@/components/landing/whatsapp-ai-section";
import { ZyronHeader } from "@/components/landing/zyron-header";
import { ZyronHero } from "@/components/landing/zyron-hero";

export default function Home() {
  return (
    <>
      <ScrollHashHandler />
      <GridBackground />
      <ZyronHeader />
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="pb-32 outline-none md:pb-0 focus-visible:ring-2 focus-visible:ring-[#2563FF]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A]"
      >
        <ZyronHero />
        <TrustStrip />
        <PainSection />
        <SolutionSection />
        <WhatsappAiSection />
        <DifferentialSection />
        <ServicesSection />
        <CaseStudy />
        <ProcessSection />
        <TestimonialsSection />
        <PricePerceptionSection />
        <FinalCta />
      </main>
      <MobileStickyCta />
      <FloatingWhatsApp />
      <SiteFooter />
    </>
  );
}
