import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { CategoryFilter } from "@/components/sections/CategoryFilter";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";
import { useWpData } from "@/hooks/useWpData";

const Portfolio = () => {
  const projectsData = useWpData("projects");
  const allProjects = projectsData?.all ?? [];
  const categories = projectsData?.categories ?? ["All"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-w-[320px]">
      <Navigation />

      <PageHeader
        title="Our"
        accent="Work"
        description="A curated collection of our finest projects. Each piece represents our commitment to bold, innovative design."
      />

      <CategoryFilter
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={cn(project.size === "large" && "md:col-span-2 lg:col-span-2")}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
