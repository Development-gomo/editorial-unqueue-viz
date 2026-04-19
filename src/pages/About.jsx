import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { StorySection } from "@/components/sections/StorySection";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { useWpData } from "@/hooks/useWpData";

const About = () => {
  const aboutData = useWpData("about");

  return (
    <main className="min-w-[320px]">
      <Navigation />

      <PageHeader
        eyebrow="About Us"
        title="We are"
        accent="BOLD"
        description="A creative agency that believes in the transformative power of design. We create digital experiences that challenge conventions and inspire action."
        variant="dark"
      />

      {aboutData?.heroImage && (
        <ImageBanner image={aboutData.heroImage} alt="Our team at work" />
      )}

      <StorySection
        eyebrow="Our Story"
        title="From a small studio to a"
        accent="global creative force"
        paragraphs={aboutData?.story?.paragraphs ?? []}
      />

      <ValuesGrid
        eyebrow="Our Values"
        title="What drives"
        accent="everything we do"
        values={aboutData?.values ?? []}
      />

      <CTASection
        title="Ready to create something bold?"
        ctaText="Start a Conversation"
        ctaHref="/contact"
        variant="primary"
      />

      <Footer />
    </main>
  );
};

export default About;
