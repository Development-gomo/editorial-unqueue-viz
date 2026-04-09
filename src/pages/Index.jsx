import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { VideoHero } from "@/components/home/VideoHero";
import { ServicesMarquee } from "@/components/home/ServicesMarquee";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TeamPreview } from "@/components/home/TeamPreview";
import { BlogPreview } from "@/components/home/BlogPreview";

const Index = () => {
  return (
    <main className="min-w-[320px]">
      <Navigation />
      <VideoHero />
      <ServicesMarquee />
      <FeaturedWork />
      <AboutPreview />
      <TeamPreview />
      <BlogPreview />
      <Footer />
    </main>
  );
};

export default Index;
