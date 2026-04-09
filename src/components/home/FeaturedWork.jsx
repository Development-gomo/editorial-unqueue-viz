import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import projectsData from "@/data/projects.json";

export function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState(null);
  const projects = projectsData.featured;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
              Featured Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Selected
              <br />
              <span className="text-primary">Projects</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group font-sans text-sm tracking-wide flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                index === 0 || index === 3 ? "md:row-span-2" : ""
              )}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={cn(
                  "aspect-[4/3] md:aspect-auto md:h-full min-h-[280px] md:min-h-[360px] relative overflow-hidden rounded-2xl",
                  index === 0 || index === 3 ? "md:min-h-[540px]" : ""
                )}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-all duration-700",
                    hoveredId === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent transition-opacity duration-500",
                    hoveredId === project.id ? "opacity-90" : "opacity-60"
                  )}
                />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform transition-all duration-500">
                    <p
                      className={cn(
                        "font-sans text-xs tracking-widest text-cloud-white/70 mb-2 transition-all duration-300",
                        hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"
                      )}
                    >
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-cloud-white flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight
                        className={cn(
                          "w-6 h-6 transition-all duration-300",
                          hoveredId === project.id
                            ? "opacity-100 translate-x-0 -translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        )}
                      />
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
