import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import teamData from "@/data/team.json";

export function TeamPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const teamMembers = teamData.preview;

  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <p className="font-sans text-sm tracking-widest text-secondary-foreground/50 mb-4">
              Our Team
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Meet the
              <br />
              <span className="text-primary">minds behind</span>
            </h2>
          </div>
          <Link
            to="/team"
            className="group font-sans text-sm tracking-wide flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors duration-300"
          >
            Full Team
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    hoveredIndex === index ? "scale-110 grayscale-0" : "scale-100 grayscale"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-opacity duration-500",
                    hoveredIndex === index ? "opacity-90" : "opacity-0"
                  )}
                />
                <div
                  className={cn(
                    "absolute bottom-6 left-6 right-6 flex gap-3 transition-all duration-500",
                    hoveredIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                >
                  <a
                    href="#"
                    className="w-10 h-10 bg-cloud-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cloud-white hover:bg-cloud-white hover:text-secondary transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-cloud-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cloud-white hover:bg-cloud-white hover:text-secondary transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-secondary-foreground/50">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
