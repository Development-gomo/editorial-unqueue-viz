import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutData from "@/data/about.json";

export function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-[15vw] font-extrabold text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none">
        BOLD CREATIVE
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              We're a team of
              <br />
              <span className="text-primary">creative rebels</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We believe that great design has the power to transform businesses
              and create meaningful connections. Our approach combines strategic
              thinking with creative excellence to deliver results that matter.
            </p>
            <Button variant="magenta" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {aboutData.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">
                  {stat.number}
                </span>
                <p className="font-sans text-sm tracking-wide mt-2 text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
