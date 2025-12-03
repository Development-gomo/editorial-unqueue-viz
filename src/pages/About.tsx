import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    number: "01",
    title: "Bold Creativity",
    description: "We don't follow trends, we set them. Every project is an opportunity to push boundaries.",
  },
  {
    number: "02",
    title: "Strategic Thinking",
    description: "Beautiful design backed by data-driven insights and strategic planning.",
  },
  {
    number: "03",
    title: "Collaborative Spirit",
    description: "We work with you, not just for you. Your success is our success.",
  },
  {
    number: "04",
    title: "Relentless Excellence",
    description: "We obsess over every detail until it's perfect. Good enough isn't in our vocabulary.",
  },
];

const About = () => {
  return (
    <main className="min-w-[320px]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-secondary-foreground/60 mb-4">
                About Us
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
                We are
                <br />
                <span className="text-magenta">BOLD</span>
              </h1>
            </div>
            <p className="text-xl text-secondary-foreground/80 max-w-lg">
              A creative agency that believes in the transformative power of design.
              We create digital experiences that challenge conventions and inspire action.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
          alt="Our team at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Our Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                From a small studio to a
                <span className="text-magenta"> global creative force</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 2012, BOLD started as a two-person studio with a simple belief:
                design should be fearless. What began as a passion project in a tiny apartment
                has grown into an internationally recognized creative agency.
              </p>
              <p>
                Today, we're a team of 40+ designers, developers, and strategists united by
                our commitment to pushing creative boundaries. We've worked with Fortune 500
                companies and emerging startups alike, always bringing the same level of
                dedication and innovation.
              </p>
              <p>
                Our work has been recognized by Awwwards, Communication Arts, and the D&AD,
                but our greatest achievement is the lasting impact we create for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Our Values
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              What drives
              <br />
              <span className="text-magenta">everything we do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.number}
                className="bg-background border-2 border-foreground p-8 md:p-12 brutal-shadow hover-lift"
              >
                <span className="font-display text-6xl md:text-7xl font-extrabold text-magenta/20">
                  {value.number}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-magenta text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
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
