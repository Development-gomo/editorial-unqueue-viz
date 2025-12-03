import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    color: "bg-magenta",
  },
  {
    id: 2,
    title: "Urban Flow",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    color: "bg-accent",
  },
  {
    id: 3,
    title: "Minimal Wave",
    category: "Digital Campaign",
    image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&q=80",
    color: "bg-secondary",
  },
  {
    id: 4,
    title: "Future Tech",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    color: "bg-magenta",
  },
];

export function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Featured Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
              Selected
              <br />
              <span className="text-magenta">Projects</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="font-display text-sm uppercase tracking-widest flex items-center gap-2 border-b-2 border-foreground pb-1 hover:text-magenta hover:border-magenta transition-colors duration-300"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              className={cn(
                "group relative overflow-hidden",
                index === 0 || index === 3 ? "md:row-span-2" : ""
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={cn(
                  "aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] md:min-h-[400px] relative overflow-hidden border-2 border-foreground transition-all duration-500",
                  index === 0 || index === 3 ? "md:min-h-[600px]" : ""
                )}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
                    hoveredId === project.id ? "scale-110" : "scale-100"
                  )}
                />

                {/* Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    project.color,
                    hoveredId === project.id ? "opacity-80" : "opacity-0"
                  )}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div
                    className={cn(
                      "transform transition-all duration-500",
                      hoveredId === project.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    )}
                  >
                    <p className="font-display text-sm uppercase tracking-widest text-cloud-white/80 mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-cloud-white flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight className="w-8 h-8" />
                    </h3>
                  </div>
                </div>

                {/* Bottom Label (always visible) */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 bg-foreground text-background p-4 flex justify-between items-center transition-transform duration-500",
                    hoveredId === project.id ? "translate-y-full" : "translate-y-0"
                  )}
                >
                  <span className="font-display text-sm uppercase tracking-wider">
                    {project.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
