import { HeroSection } from "@/components/sections/hero-section";
import {
  AudienceSection,
  FinalCtaSection,
  ManifestoSection,
  MethodSection,
  ServicesSection,
  TeamSection,
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
        <ManifestoSection />
        <ServicesSection />
        <MethodSection />
        <VisionSection />
        <AudienceSection />
        <TeamSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
