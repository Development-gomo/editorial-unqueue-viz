import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Miller",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Marcus Johnson",
    role: "Tech Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Emma Wilson",
    role: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export function TeamPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-secondary-foreground/60 mb-4">
              Our Team
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
              Meet the
              <br />
              <span className="text-magenta">minds behind</span>
            </h2>
          </div>
          <Link
            to="/team"
            className="font-display text-sm uppercase tracking-widest flex items-center gap-2 border-b-2 border-secondary-foreground pb-1 hover:text-magenta hover:border-magenta transition-colors duration-300"
          >
            Full Team
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden border-2 border-secondary-foreground/30 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    hoveredIndex === index ? "scale-110 grayscale-0" : "scale-100 grayscale"
                  )}
                />

                {/* Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-magenta transition-opacity duration-500",
                    hoveredIndex === index ? "opacity-80" : "opacity-0"
                  )}
                />

                {/* Social Icons */}
                <div
                  className={cn(
                    "absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500",
                    hoveredIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  )}
                >
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground text-secondary flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground text-secondary flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-secondary-foreground/60 uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
