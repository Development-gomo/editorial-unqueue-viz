import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed">
              {study.description}
            </p>
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  The <span className="text-primary">Challenge</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  The <span className="text-primary">Solution</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.images.map((image, index) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={`${study.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">
            Want to create something like this?
          </h2>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start a Project
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudy;
