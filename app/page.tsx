import { HeroSection } from "@/components/sections/hero-section";
import {
  AudienceSection,
  FinalCtaSection,
  FoundersSection,
  ManifestoSection,
  OriginSection,
  PositioningSection,
  ProblemSection,
  ServicesSection,
  StatementSection,
  TransformationSection,
  ValueSection,
  VisionSection,
} from "@/components/sections/story-sections";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNavbar } from "@/components/site/site-navbar";

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <OriginSection />
        <VisionSection />
        <ServicesSection />
        <TransformationSection />
        <PositioningSection />
        <FoundersSection />
        <ValueSection />
        <AudienceSection />
        <StatementSection />
        <ManifestoSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
