import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";
import projectsData from "@/data/projects.json";

export function FeaturedWork() {
  const projects = projectsData.featured;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected"
          accent="Projects"
          link="/portfolio"
          linkText="View All Work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const large = index === 0 || index === 3;
            return (
              <ProjectCard
                key={project.id}
                project={project}
                large={large}
                className={cn(large && "md:row-span-2")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
