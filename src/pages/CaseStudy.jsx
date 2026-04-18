import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { CaseStudyContent, ImageGallery } from "@/components/sections/CaseStudyContent";
import { CTASection } from "@/components/sections/CTASection";
import caseStudies from "@/data/caseStudies.json";

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies[id || "1"] || caseStudies["1"];

  return (
    <main className="min-w-[320px]">
      <Navigation />

      <section className="pt-32 pb-0 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
            <div>
              <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
                {study.category}
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
                {study.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-end">
              <div>
                <p className="font-sans text-sm text-muted-foreground">Client</p>
                <p className="text-lg font-bold">{study.client}</p>
              </div>
              <div>
                <p className="font-sans text-sm text-muted-foreground">Year</p>
                <p className="text-lg font-bold">{study.year}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[50vh] md:h-[70vh] relative">
          <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      <CaseStudyContent
        description={study.description}
        challenge={study.challenge}
        solution={study.solution}
      />

      <ImageGallery images={study.images} title={study.title} />

      <CTASection
        title="Want to create something like this?"
        ctaText="Start a Project"
        ctaHref="/contact"
        variant="secondary"
      />

      <Footer />
    </main>
  );
};

export default CaseStudy;
