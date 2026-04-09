import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutData from "@/data/about.json";

const About = () => {
  return (
    <main className="min-w-[320px]">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="font-sans text-sm tracking-widest text-secondary-foreground/50 mb-4">
                About Us
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
                We are
                <br />
                <span className="text-primary">BOLD</span>
              </h1>
            </div>
            <p className="text-xl text-secondary-foreground/70 max-w-lg leading-relaxed">
              A creative agency that believes in the transformative power of design.
              We create digital experiences that challenge conventions and inspire action.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] md:h-[70vh]">
        <img
          src={aboutData.heroImage}
          alt="Our team at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                From a small studio to a
                <span className="text-primary"> global creative force</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {aboutData.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
              Our Values
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              What drives
              <br />
              <span className="text-primary">everything we do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.values.map((value) => (
              <div
                key={value.number}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant hover-lift"
              >
                <span className="font-display text-6xl md:text-7xl font-extrabold text-primary/20">
                  {value.number}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
            Ready to create something bold?
          </h2>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
