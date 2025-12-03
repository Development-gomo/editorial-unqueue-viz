import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "12", label: "Years Experience" },
  { number: "40+", label: "Team Members" },
  { number: "98%", label: "Client Satisfaction" },
];

export function AboutPreview() {
  return (
    <section className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-[20vw] font-extrabold text-foreground/[0.03] whitespace-nowrap pointer-events-none">
        BOLD CREATIVE
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-8">
              We're a team of
              <br />
              <span className="text-magenta">creative rebels</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
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

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background border-2 border-foreground p-6 md:p-8 brutal-shadow hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-magenta">
                  {stat.number}
                </span>
                <p className="font-display text-sm uppercase tracking-wider mt-2 text-muted-foreground">
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
