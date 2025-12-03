import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies: Record<string, {
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  heroImage: string;
  images: string[];
}> = {
  "1": {
    title: "Neon Dreams",
    category: "Brand Identity",
    year: "2024",
    client: "Neon Studios",
    description: "A complete brand transformation for a cutting-edge entertainment company.",
    challenge: "Neon Studios needed a brand identity that would stand out in the crowded entertainment industry while remaining versatile enough for diverse applications.",
    solution: "We created a bold, dynamic visual system centered around the concept of light and energy. The identity uses vibrant gradients, custom typography, and flexible layouts that adapt to any medium.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
      "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=800&q=80",
    ],
  },
  "2": {
    title: "Urban Flow",
    category: "Web Design",
    year: "2024",
    client: "Urban Mobility",
    description: "A revolutionary digital experience for the future of urban transportation.",
    challenge: "Creating an intuitive platform that could handle complex routing while maintaining a seamless, enjoyable user experience.",
    solution: "We designed a clean, map-centric interface with intelligent suggestions and real-time updates. The design prioritizes clarity and speed without sacrificing visual appeal.",
    heroImage: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1600&q=80",
    images: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
      "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&q=80",
    ],
  },
};

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies[id || "1"] || caseStudies["1"];

  return (
    <main className="min-w-[320px]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-0 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-magenta transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {study.category}
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
                {study.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-end">
              <div>
                <p className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                  Client
                </p>
                <p className="text-lg font-bold">{study.client}</p>
              </div>
              <div>
                <p className="font-display text-sm uppercase tracking-wider text-muted-foreground">
                  Year
                </p>
                <p className="text-lg font-bold">{study.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] relative">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-16">
              {study.description}
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  The <span className="text-magenta">Challenge</span>
                </h2>
                <p className="text-lg text-muted-foreground">{study.challenge}</p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  The <span className="text-magenta">Solution</span>
                </h2>
                <p className="text-lg text-muted-foreground">{study.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.images.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] border-2 border-foreground overflow-hidden"
              >
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

      {/* CTA */}
      <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
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
