import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reusable project / portfolio card.
 */
export function ProjectCard({ project, className, large = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/case-study/${project.id}`}
      className={cn("group relative rounded-2xl overflow-hidden block", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl aspect-[4/3]",
          large && "md:aspect-auto md:h-full md:min-h-[540px]"
        )}
      >
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            hovered ? "scale-110" : "scale-100"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent transition-opacity duration-500",
            hovered ? "opacity-90" : "opacity-60"
          )}
        />
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <p
            className={cn(
              "font-sans text-xs tracking-widest text-cloud-white/70 mb-2 transition-all duration-300",
              hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"
            )}
          >
            {project.category}
          </p>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-cloud-white flex items-center gap-3">
            {project.title}
            <ArrowUpRight
              className={cn(
                "w-6 h-6 transition-all duration-300",
                hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              )}
            />
          </h3>
        </div>
      </div>
    </Link>
  );
}
